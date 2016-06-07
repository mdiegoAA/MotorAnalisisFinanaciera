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
    public partial class ValidarEcuacionesArchivo : System.Web.UI.Page
    {
       
        public D_Usuario d_usuario = new D_Usuario();
        public static D_PlanUnicoCuentas cuenta = new D_PlanUnicoCuentas();
        public static Page page = new Page();
        protected void Page_Load(object sender, EventArgs e)
        {
            int usuario = Convert.ToInt32(Session["idCliente"].ToString());
            string grupo = Session["grupoXUsuario"].ToString();
           // string infoUsuario = d_usuario.Traer_Nombre_Proyecto_añoXid_Grupo(usuario, grupo);
            NombreCliente.Text = "Prueba";
        }

        [WebMethod]
        public static bool CrearSessionCentroCosto(string IdCentroCosto)
        {
            Page paginaSession = new Page();
            paginaSession.Session["IdCentroCosto"] = IdCentroCosto.ToString();

            return true;

        }

        [WebMethod]
        public static string BuscarIdArchivoxCentroCosto_Fecha(string fechaInicio , string fechaFinal , string centroCosto)
        {

            int idCliente = Convert.ToInt32(page.Session["idCliente"].ToString());
            int centroCostos = Convert.ToInt32(centroCosto);
            string rSult = cuenta.BuscarIdArchivoxCentroCosto_Fecha(idCliente, centroCostos, fechaInicio, fechaFinal);
            return rSult;

        }
        [WebMethod]
        public static bool crearVariabledeSessionIdArchivo(string IdArchivo, string centroCosto)
        {

            try
            {

                page.Session["centroCosto"] = centroCosto;
                page.Session["IdArchivoss"] = IdArchivo;
                return true;

            }
            catch (Exception)
            {
                
                throw;
            }

           
        
        }

        [WebMethod]
        public static string TraerInformacionEcuacionXIdCliente() {

            int idCliente = Convert.ToInt32(page.Session["idCliente"].ToString());
            string rSult = cuenta.TraerInformacionEcuacionXIdCliente(idCliente);
            return rSult;
            


        }

    }
}