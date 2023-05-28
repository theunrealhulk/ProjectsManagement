namespace ProjectsManager.Models
{
    public class Assignment
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public Project Project { get; set; }
        public Status Status { get; set; } = Status.todo;
        public User User { get; set; }
        public DateTime DueDate { get; set; } = DateTime.Now;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now; 
    }
}
