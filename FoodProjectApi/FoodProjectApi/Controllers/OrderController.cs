using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodProjectApi.Models;

namespace FoodProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        fooddbContext db;
        public OrderController(fooddbContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<OrderTbl> GetFoods()
        {
            return db.OrderTbls;
        }
        [HttpPost]
        public string Post([FromBody] OrderTbl food)
        {
            db.OrderTbls.Add(food);
            db.SaveChanges();
            return "success";
        }

        [HttpPut]
        public string Put([FromBody] OrderTbl food)
        {
            var tblsampleObj = db.OrderTbls.Where(x => x.Id == food.Id);
            if (tblsampleObj != null)
            {
                db.OrderTbls.Update(food);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }

        [HttpDelete]
        public string Delete([FromBody] int Id)
        {
            var tblsampleObj = db.OrderTbls.Where(x => x.Id == Id).FirstOrDefault();
            if (tblsampleObj != null)
            {
                db.OrderTbls.Remove(tblsampleObj);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }
    }
}
