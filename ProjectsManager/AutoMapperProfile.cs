using AutoMapper;
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
        }
    }
}
