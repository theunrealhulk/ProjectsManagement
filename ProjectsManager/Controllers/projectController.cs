using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectsManager.Dtos.AssignmentDTO;
using ProjectsManager.Dtos.Project;
using ProjectsManager.Models;
using ProjectsManager.Services;
using ProjectsManager.Services.ProjectService;

namespace ProjectsManager.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {

        private Project project = new Project();
        private Assignment assignment = new Assignment();
        private readonly IProjectService _projectService;
        public ProjectController(IProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet("UserProjects")]
        public async Task<ActionResult<ServiceResponse<List<GetProjectDto>>>> Getproject()
        {
            return Ok(await _projectService.GetUserProject());
        }
        [HttpGet("AllProjects")]
        public async Task<ActionResult<ServiceResponse<List<GetProjectDto>>>> GetAllProjects()
        {
            return Ok(await _projectService.GetAllProject());
        }
        [HttpGet("AllAssignments")]
        public async Task<ActionResult<ServiceResponse<List<GetProjectDto>>>> GetAllAssignments()
        {
            return Ok(await _projectService.GetAllAssignments());
        }
        [HttpGet("AllUsers")]
        public async Task<ActionResult<ServiceResponse<List<GetProjectDto>>>> GetAllUsers()
        {
            return Ok(await _projectService.GetUsers());
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ServiceResponse<List<GetProjectDto>>>> GetSingle(int id)
        {
            return Ok(await _projectService.GetProject(id));
        }
        [HttpPost("AddProject")]
        public async Task<ActionResult<ServiceResponse<List<GetProjectDto>>>> AddProject(AddProjectDto newProject)
        {
            return Ok(await _projectService.AddProject(newProject));
        }
        [HttpPut("UpdateProject")]
        public async Task<ActionResult<ServiceResponse<GetProjectDto>>> UpdateProject(UpdateProjectDto UpdatedProject)
        {
            var response = await _projectService.UpdateProject(UpdatedProject);
            if (response.Data ==null)
            {
                return NotFound();
            }
            return Ok(await _projectService.UpdateProject(UpdatedProject));
        }
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<ServiceResponse<List<GetProjectDto>>>> Delete(int id)
        {

            var response = await _projectService.DeleteProject(id);
            if (response.Data == null)
            {
                return NotFound();
            }
            return Ok(response);

        }
        [HttpPost("addAssignment")]
        public async Task<ActionResult<ServiceResponse<GetProjectDto>>> AddAssignment(AddAssignmentDto newAssignment)
        {
            return Ok(await _projectService.AddAssignment(newAssignment));
        }
        [HttpPut("assignment")]
        public async Task<ActionResult<ServiceResponse<GetProjectDto>>> UpdateAssignment(UpdateAssignmentDto updateAssignment)
        {
            var response = await _projectService.UdpateAssignment(updateAssignment);
            if (response.Data == null)
            {
                return NotFound();
            }
            return Ok(response);
        }
        [HttpDelete("assignment/{id:int}")]
        public async Task<ActionResult<ServiceResponse<GetProjectDto>>> DeleteAssignment(int id)
        {
            var response = await _projectService.DeleteAssignment(id);
            if (response.Data == null)
            {
                return NotFound();
            }
            return Ok(response);
        }
        [HttpGet("UserAssignment/{id:int}")]
        public async Task<ActionResult<ServiceResponse<GetProjectDto>>> getUserAssignments(int id)
        {
            var response = await _projectService.GetUserAssignments(id);
            if (response.Data == null)
            {
                return NotFound();
            }
            return Ok(response);
        }
    }
}
