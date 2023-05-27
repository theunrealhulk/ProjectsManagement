using ProjectsManager.Data;
using ProjectsManager.Dtos.UserDTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectsManager.Services;

namespace ProjectsManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authRepo;

        public AuthController(IAuthRepository authRepo)
        {
            _authRepo = authRepo;
        }
        [HttpPost("register")]
        public async Task<ActionResult<ServiceResponse<int>>> Register(UserRegisterDto request)
        {
            var respons = await _authRepo.Register(new User { Username = request.Username }, request.Password);
            if (!respons.Success)
            {
                return BadRequest(respons);
            }
            return Ok(respons);
        }
        [HttpPost("login")]
        public async Task<ActionResult<ServiceResponse<string>>> login(UserLoginDto request)
        {
            var respons = await _authRepo.Login(request.Username, request.Password);
            if (!respons.Success)
            {
                return BadRequest(respons);
            }
            return Ok(respons);
        }

    }
}
