using HajosTeszt.IdezetModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/Idezet")]
    [ApiController]
    public class IdezetController : ControllerBase
    {
        // GET: api/Idezet
        [HttpGet]
        public IEnumerable<Idezet> Get()
        {
            IdezetContext context = new IdezetContext();
            return context.Idezets.ToList();
        }

        // GET api/Idezet/5
        [HttpGet("{id}")]
        public Idezet Get(int id)
        {
            IdezetContext context = new IdezetContext();
            var keresettIdezet = (from x in context.Idezets
                                  where x.IdezetSk == id
                                  select x).FirstOrDefault();
            return keresettIdezet;
        }

        // POST api/Idezet
        [HttpPost]
        public void Post([FromBody] Idezet ÚjIdezet)
        {
            IdezetContext context = new IdezetContext();
            context.Idezets.Add(ÚjIdezet);
            context.SaveChanges();
        }

        // PUT api/<IdezetController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/Idezet/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            IdezetContext context = new IdezetContext();
            var törlendőIdezet = (from x in context.Idezets
                                  where x.IdezetSk == id
                                  select x).FirstOrDefault();
            context.Remove(törlendőIdezet);
            context.SaveChanges();
        }
    }
}
