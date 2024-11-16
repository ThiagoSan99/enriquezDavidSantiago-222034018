using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace ApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly string _connectionString = "Server=DESKTOP-PTPIER5\\MSSQLSERVER1;Database=Backend;User Id=sa;Password=12345678;TrustServerCertificate=true;";

        [HttpPost("Registrar")]
        public IActionResult Send([FromBody] Users user)
        {
            if (user == null)
            {
                return BadRequest("Invalid User data");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO Users (Username, Lastname, Email, Phone, Namegerente, Emailgerente, Dateinicio, Datefin, Notas) VALUES (@Username, @Lastname, @Email, @Phone, @Namegerente, @Emailgerente, @Dateinicio, @Datefin, @Notas)";
                var rowsAffected = connection.Execute(sql, new { user.Username, user.Lastname, user.Email, user.Phone, user.Namegerente, user.Emailgerente, user.Dateinicio, user.Datefin, user.Notas });

                if (rowsAffected > 0)
                {
                    return Ok("Information sent");
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the user");
                }
            }
        }
        

    }
}
