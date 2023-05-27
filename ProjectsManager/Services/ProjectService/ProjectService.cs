using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectsManager.Data;
using ProjectsManager.Dtos.AssignmentDTO;
using ProjectsManager.Dtos.Project;
using System.Security.Claims;

namespace ProjectsManager.Services.ProjectService
{
    public class ProjectService : IProjectService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public ProjectService(IMapper mapper, DataContext context, IHttpContextAccessor httpContextAccessor)
        {
            _mapper = mapper;
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }
        private int GetUserId() => int.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(
    ClaimTypes.NameIdentifier));
        public async Task<ServiceResponse<List<GetProjectDto>>> AddProject(AddProjectDto newProject)
        {
            var response = new ServiceResponse<List<GetProjectDto>>();
            Project project = _mapper.Map<Project>(newProject);
            project.User = await _context.Users.FirstOrDefaultAsync(u => u.Id == GetUserId());
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            response.Data = await _context.Projects
                .Where(p => p.User.Id == GetUserId())
                .Select(p => _mapper.Map<GetProjectDto>(p)).ToListAsync();
            return response;
        }
        public async Task<ServiceResponse<List<GetProjectDto>>> GetAllProject()
        {
            var response = new ServiceResponse<List<GetProjectDto>>();
            var projects = await _context.Projects
                .Include(p => p.User)
                .Include(p => p.Assignments)
                .ToListAsync();
            response.Data = projects.Select(p => _mapper.Map<GetProjectDto>(p)).ToList();
            return response;
        }

        public async Task<ServiceResponse<List<GetProjectDto>>> GetUserProject()
        {
            var response = new ServiceResponse<List<GetProjectDto>>();
            var projects = await _context.Projects
                .Include(p => p.User)
                .Include(p => p.Assignments)
                .Where(p => p.User.Id == GetUserId()).ToListAsync();
            response.Data = projects.Select(p => _mapper.Map<GetProjectDto>(p)).ToList();
            return response;
        }

        public async Task<ServiceResponse<GetProjectDto>> GetProject(int id)
        {
            var response = new ServiceResponse<GetProjectDto>();
            var projects = await _context.Projects
                .Include(p=>p.User)
                .Include (p => p.Assignments)
                .FirstOrDefaultAsync(  p => p.Id == id && p.User.Id == GetUserId());
            response.Data = _mapper.Map<GetProjectDto>(projects);
    
            return response;
        }

        public async Task<ServiceResponse<GetProjectDto>> UpdateProject(UpdateProjectDto updateProjectDto)
        {
            var response = new ServiceResponse<GetProjectDto>();
            try
            {
                Project project = await _context.Projects
                    .Include(p => p.Assignments)
                    .Include(p=>p.User)
                    .FirstOrDefaultAsync(p => p.Id == updateProjectDto.Id);

                if (project.User.Id == GetUserId())
                {
                    _mapper.Map(updateProjectDto, project);
                    await _context.SaveChangesAsync();
                    response.Data = _mapper.Map<GetProjectDto>(project);
                    return response;
                }
                else
                {
                    response.Success = false;
                    response.Message = "Project not found.";
                }
            }
            catch (Exception e)
            {
                response.Success = false;
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<ServiceResponse<List<GetProjectDto>>> DeleteProject(int id)
        {
            var response = new ServiceResponse<List<GetProjectDto>>();
            try
            {
                Project project = await _context.Projects
                    .Include(p => p.User)
                    .Include(p => p.Assignments)
                    .FirstOrDefaultAsync(p => p.Id == id && p.User.Id == GetUserId());

                if (project != null)
                {
                    _context.Projects.Remove(project);
                    await _context.SaveChangesAsync();
                    response.Data = await _context.Projects
                        .Include(p=>p.User)
                        .Include(p=>p.Assignments)
                        .Where(p=>p.User.Id == GetUserId())
                        .Select(p=> _mapper.Map<GetProjectDto>(p)).ToListAsync();
                }
                else
                {
                    response.Success = false;
                    response.Message = "Project not found.";
                }
            }
            catch (Exception e)
            {
                response.Success = false;
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<ServiceResponse<GetProjectDto>> AddAssignment( AddAssignmentDto newAssignment)
        {
            var response = new ServiceResponse<GetProjectDto>();
            try
            {
                Project project = await _context.Projects
                      .Include(p => p.User)
                      .Include(p => p.Assignments)
                      .FirstOrDefaultAsync(p => p.Id == newAssignment.ProjectId && p.User.Id == GetUserId());
                if (project == null)
                {
                    response.Success=false;
                    response.Message = "Project not found";
                    return response;
                }
                Assignment assignment = _mapper.Map<Assignment>(newAssignment);
                User user = await _context.Users.FirstOrDefaultAsync(u => u.Id == newAssignment.UserId);
                if (user == null)
                {
                    response.Success=false;
                    response.Message = "Assignee not found";
                    return response;
                }
                assignment.User = user;
                assignment.Project = project;
                _context.Add(assignment);
                await _context.SaveChangesAsync();  
                response.Data = _mapper.Map<GetProjectDto>(project);

            }
            catch (Exception e )
            {
                response.Success = false;
                response.Message = e.Message;
            }
 
            return response;
        }

        public async Task<ServiceResponse<GetProjectDto>> UdpateAssignment( UpdateAssignmentDto UpdatedAssignment)
        {
            var response = new ServiceResponse<GetProjectDto>();
            try
            {
                Assignment assignment = await _context.Assignments
                    .Include(a => a.Project)
                    .Include(a => a.User)
                    .FirstOrDefaultAsync(a => a.Id == UpdatedAssignment.Id && a.Project.User.Id == GetUserId() || a.User.Id == GetUserId());
                if (assignment == null)
                {
                    response.Success = false;
                    response.Message = "Assignment not found";
                    return response;
                }
                var project = assignment.Project;
                assignment = _mapper.Map(UpdatedAssignment,assignment);

                await _context.SaveChangesAsync();
                response.Data = _mapper.Map<GetProjectDto>(project);

            }
            catch (Exception e)
            {
                response.Success = false;
                response.Message = e.Message;
            }
            return response;
        }

        public async Task<ServiceResponse<GetProjectDto>> DeleteAssignment(int idAssignment)
        {
            var response = new ServiceResponse<GetProjectDto>();
            try
            {
                Assignment assignment = await _context.Assignments
                    .Include(a => a.User)
                    .Include (a => a.Project)
                    .Include(a=>a.Project.User)
                    .FirstOrDefaultAsync(a => a.Id == idAssignment && a.Project.User.Id == GetUserId());
                if (assignment == null)
                {
                    response.Success = false;
                    response.Message = "Assignment not found";
                    return response;
                }
                var project = assignment.Project;
                _context.Assignments.Remove(assignment);
                await _context.SaveChangesAsync();
                response.Data = _mapper.Map<GetProjectDto>(project);

            }
            catch (Exception e)
            {
                response.Success = false;
                response.Message = e.Message;
            }
            return response;
        }
    }
    
}
