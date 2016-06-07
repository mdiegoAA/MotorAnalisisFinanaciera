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
    public partial class UnidadProyecto : System.Web.UI.Page
    {

        public static D_Usuario usuarios = new D_Usuario();
        protected void Page_Load(object sender, EventArgs e)
        {

            
            string usuario = Session["IDCLIENTE"].ToString();
            LblUsuario.Text = " "+usuarios.ObtenerNombreUusarioXid(Convert.ToInt32(usuario));
            Session["NombreCliente"] = LblUsuario.Text;

        }

        [WebMethod]
        public static string ObtenerGruposUsuarioXID()
        {
            Page prueba = new Page();
            int idCliente = Convert.ToInt32(prueba.Session["IDCLIENTE"]);
            string gruposCliente = usuarios.ObtenerGruposUsuarioXID(idCliente);
            return gruposCliente;


        }


        [WebMethod]
        public static bool crearVariablesSessionGrupo(string grupo)
        {
            try
            {
                Page pag = new Page();
                pag.Session["grupoXUsuario"] = grupo;
                return true;

            }
            catch (Exception)
            {

                throw;
            }

        }

    }
}