using AutoMapper;
using ProjectsManager.Dtos.AssignmentDTO;
using ProjectsManager.Dtos.Project;

namespace ProjectsManager
{
    public class AutoMapperProfile:Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Project, GetProjectDto>();
            CreateMap<AddProjectDto, Project>();
            CreateMap<UpdateProjectDto, Project>();
            CreateMap<Assignment, GetAssignmentDto>();
            CreateMap<AddAssignmentDto, Assignment>();
            CreateMap<UpdateAssignmentDto, Assignment>();
        }
    }
}
