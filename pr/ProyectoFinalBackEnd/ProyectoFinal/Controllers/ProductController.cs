using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace ProyectoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly string _connectionString = "Server=DESKTOP-DC51TB0\\MSSQLSERVER1;Database=products;User Id=sa;Password=12345;TrustServerCertificate=true;";

        [HttpPost("Agregar")]
        public IActionResult Send([FromBody] AddProducts product)
        {
            if (product == null)
            {
                return BadRequest("Invalid Products data");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "INSERT INTO product (comercialname, genericname, quantity, lote, price, description, pharmaceuticform, cum, finaldate) VALUES " +
                "(@comercialname, @genericname, @quantity, @lote, @price, @description, @pharmaceuticform, @cum, @finaldate)";

                var rowsAffected = connection.Execute(sql, new
                {
                    product.ComercialName,
                    product.GenericName,
                    product.Quantity,
                    product.Lote,
                    product.Price,
                    product.Description,
                    product.PharmaceuticForm,
                    product.Cum,
                    product.FinalDate
                });

                if (rowsAffected > 0)
                {
                    return Ok(new { message = "Information sent" });
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the product");
                }
            }
        }

        // Metodo update nos permite actualizar los registros de un usuario existente

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, [FromBody] Products product)
        {
            if (product == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "UPDATE product SET comercialname=@comercialname, genericname=@genericname, quantity=@quantity, lote=@lote, price=@price, " +
                    "description=@description, pharmaceuticform=@pharmaceuticform, cum=@cum, finaldate=@finaldate WHERE id=@id";

                var rowsAffected = connection.Execute(sql, new
                {
                    Id = id,
                    product.ComercialName,
                    product.GenericName,
                    product.Quantity,
                    product.Lote,
                    product.Price,
                    product.Description,
                    product.PharmaceuticForm,
                    product.Cum,
                    product.FinalDate
                });

                if (rowsAffected > 0)
                {
                    return Ok(new { message = "Information sent" });
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the user");
                }
            }
        }

        // Metodo delete nos permite eliminar

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = "DELETE FROM product WHERE id = @id";

                var rowsAffected = connection.Execute(sql, new{Id = id});

                if (rowsAffected > 0)
                {
                    return Ok(new { message = "Information sent" });
                }
                else
                {
                    return StatusCode(500, "An error ocurred while registering the user");
                }
            }
        }

        // Metodo que nos permite obtener los productos

        [HttpGet("getProducts")]
        public IActionResult GetProducts()
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    // Consulta SQL para obtener los usuarios
                    var sql = "SELECT * FROM product";

                    // Usamos Dapper para ejecutar la consulta y mapear los resultados
                    var products = connection.Query<Products>(sql).ToList();

                    if (products == null || products.Count == 0)
                    {
                        return NotFound("No products found");
                    }
                    return Ok(products);
                }
            }
            catch (Exception ex) {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // Metodo para buscar

        [HttpGet("getProductById/{id}")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    // Consulta SQL para obtener los usuarios
                    var sql = "SELECT * FROM product WHERE id = @Id";

                    // Usamos Dapper para ejecutar la consulta y mapear los resultados
                    var products = connection.QuerySingleOrDefault<Products>(sql, new { Id = id});

                    if (products == null)
                    {
                        return NotFound("No products found");
                    }
                    return Ok(products);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // Metodo para buscar por medicamento

        [HttpGet("getProductByName/{name}")]
        public IActionResult GetProductByName(string name)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    // Consulta SQL para obtener los usuarios
                    var sql = "SELECT * FROM product WHERE comercialname LIKE @Name";

                    // Usamos Dapper para ejecutar la consulta y mapear los resultados
                    var products = connection.Query<Products>(sql, new { Name = "%" + name + "%" }).ToList();

                    if (products == null)
                    {
                        return NotFound("No products found");
                    }
                    return Ok(products);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}