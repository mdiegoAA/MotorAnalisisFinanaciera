using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Datos;
using System.Web.Services;

namespace wpfLDAP.pages
{
    public partial class ValidarSubirPlanUnicoCuenta : System.Web.UI.Page
    {
        public D_Usuario d_usuario = new D_Usuario();
        public static Page page = new Page();
        protected void Page_Load(object sender, EventArgs e)
        {
            int usuario = Convert.ToInt32(Session["idCliente"].ToString());
            string grupo = Session["grupoXUsuario"].ToString();
            string año = Session["añoCliente"].ToString();
            string infoUsuario = grupo + " - " + año;
            NombreCliente.Text = infoUsuario.ToString();
        }
        [WebMethod]
        public static bool CrearSessionCentroCosto(string IdCentroCosto)
        {
            Page paginaSession = new Page();
            paginaSession.Session["IdCentroCosto"] = IdCentroCosto.ToString();

            return true;
        
        }

    }
}