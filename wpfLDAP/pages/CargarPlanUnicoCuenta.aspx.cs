using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Datos;

namespace wpfLDAP.pages
{
    public partial class CargarPlanUnicoCuenta : System.Web.UI.Page
    {
        public D_Usuario d_usuario = new D_Usuario();

        protected void Page_Load(object sender, EventArgs e)
        {
            int usuario = Convert.ToInt32(Session["idCliente"].ToString());
            string grupo = Session["grupoXUsuario"].ToString();
            string año = Session["añoCliente"].ToString();
            string infoUsuario = grupo + " - " + año;
            labelArchivo.Text = infoUsuario.ToString();
            GuardarInformacionServer.Text = "Desea guardar la Informacion  " + labelArchivo.Text;
        }
    }
}