using ProjectsManager.Dtos.AssignmentDTO;

namespace ProjectsManager.Dtos.Project
{
    public class AddProjectDto
    {
        public string Name { get; set; } = string.Empty;
        public DateTime DueDate { get; set; } = DateTime.Now;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public int userId { get; set; }
        public List<GetAssignmentDto>? Assignments { get; set; }
    }
}
