using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectsManager.Models;

namespace ProjectsManager.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private Project project = new Project();
        private Assignment assignment = new Assignment();
        [HttpGet("proj")]
        public ActionResult<Project> Getproject()
        {
            return Ok(project);
        }
        [HttpGet("ass")]
        public ActionResult<Assignment> GetAssignment()
        {
            return Ok(assignment);
        }
    }
}
