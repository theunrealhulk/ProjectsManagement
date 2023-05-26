﻿namespace ProjectsManager.Dtos.Project
{
    public class UpdateProjectDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateOnly? DueDate { get; set; } 
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}