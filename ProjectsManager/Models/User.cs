﻿namespace ProjectsManager.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public List<Project> Projects  { get; set; }
        public List<Assignment> Assignments { get; set; }
    }
}
