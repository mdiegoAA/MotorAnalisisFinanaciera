using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Datos;
using System.Web.Services;


namespace MotorAnalisisFianaciera_Amezquita.pages
{
    public partial class ClientesProyecto : System.Web.UI.Page
    {
        public static D_Usuario usuarios = new D_Usuario();
        protected void Page_Load(object sender, EventArgs e)
        {

            LblUsuario.Text = Session["NombreCliente"].ToString();

        }

        [WebMethod]
        public static string obtenerClientesXgrupo()
        {

            Page pag = new Page();
            string grupo = pag.Session["grupoXUsuario"].ToString();
            return usuarios.obtenerClientesXgrupo(grupo);

        }

        [WebMethod]
        public static bool cerarVariableSessionCliente( string id , string año) {


            Page pag = new Page();
            pag.Session["añoCliente"] = año.ToString();
            pag.Session["idCliente"] = id.ToString();
            return true;
        
            
        
        }



    }
}