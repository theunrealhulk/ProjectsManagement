using ProjectsManager.Dtos.AssignmentDTO;
using ProjectsManager.Dtos.Project;

namespace ProjectsManager.Services.ProjectService
{
    public interface IProjectService
    {
        Task<ServiceResponse<List<GetProjectDto>>> GetUserProject();
        Task<ServiceResponse<List<GetProjectDto>>> GetAllProject();
        Task<ServiceResponse<GetProjectDto>> GetProject(int id);
        Task<ServiceResponse<List<GetProjectDto>>> AddProject(AddProjectDto addProject);
        Task<ServiceResponse<GetProjectDto>> UpdateProject(UpdateProjectDto addProject);
        Task<ServiceResponse<List<GetProjectDto>>> DeleteProject(int id);
        Task<ServiceResponse<GetProjectDto>> AddAssignment(AddAssignmentDto newAssignment);
        Task<ServiceResponse<GetProjectDto>> UdpateAssignment( UpdateAssignmentDto UpdatedAssignment);
        Task<ServiceResponse<GetProjectDto>> DeleteAssignment(int id);

    }
}
