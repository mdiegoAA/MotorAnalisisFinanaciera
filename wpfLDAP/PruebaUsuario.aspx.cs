using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using Datos;
namespace wpfLDAP
{
    public partial class PruebaUsuario : System.Web.UI.Page
    {
      public static  D_Usuario usuarios = new D_Usuario();

        protected void Page_Load(object sender, EventArgs e)
        {
           

        }

        [WebMethod]
        public static string ObtenerGruposUsuarioXID() {
            Page prueba = new Page();
            int idCliente = Convert.ToInt32(prueba.Session["IDCLIENTE"]);
            string gruposCliente = usuarios.ObtenerGruposUsuarioXID(idCliente);
            return gruposCliente;
                   
        
        }
    }
}