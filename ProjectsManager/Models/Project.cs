﻿namespace ProjectsManager.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateOnly? DueDate { get; set; } = DateOnly.FromDateTime(DateTime.Now);
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public User User { get; set; }
        public List<Assignment> Assignments { get; set; }

    }
}