using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using Negocios;
using Datos;

namespace wpfLDAP.pages
{
    public partial class Ecuaciones : System.Web.UI.Page
    {
        public static D_PlanUnicoCuentas d_cuenta = new D_PlanUnicoCuentas();
        public static D_Usuario d_usuario = new D_Usuario();
        public static N_CuentaPUC N_cuenta = new N_CuentaPUC();
        public static Page pagina = new Page();
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                string idArchivo = pagina.Session["IdArchivoss"].ToString();
                LblUsuario.Text = Session["NombreCliente"].ToString();
                int usuario = Convert.ToInt32(Session["idCliente"].ToString());
                string grupo = Session["grupoXUsuario"].ToString();
              //  string infoUsuario = "prueba";//d_usuario.Traer_Nombre_Proyecto_añoXid_Grupo(usuario, grupo);
              //  labelPrueba.Text = Session["IdCentroCosto"].ToString();

            }
        }

        [WebMethod]
        public static string MetodoConsultaArchivosEcuacion(string fechaInicial , string fechaFinal ) 
        {
            Page page = new Page();
            
            int centroCosto = Convert.ToInt32(page.Session["IdCentroCosto"].ToString());
            string rSult = N_cuenta.TraerInformacionArchivoEcuaciones(fechaInicial, fechaFinal, centroCosto);
            return rSult;
        
        }

        [WebMethod]
        public static bool GuardarEcuacion(string centroCosto , string ecuacion, string descripcionEcuacion, string queryEcuacion)
        {
            Page page = new Page();
            int usuario = Convert.ToInt32(page.Session["idCliente"].ToString());
            int centroCostos = Convert.ToInt32(centroCosto);

            bool Rsult = d_cuenta.GuardarEcuacion(usuario, centroCostos, ecuacion, descripcionEcuacion, queryEcuacion);

            return Rsult;
        }



        [WebMethod]
        public static string TraerInformacionEcuacionXIdCliente()
        {
            Page page = new Page();
            int usuario = Convert.ToInt32(page.Session["idCliente"].ToString());
           

            string Rsult = d_cuenta.TraerInformacionEcuacionXIdCliente(usuario);

            return Rsult;
        }




        [WebMethod]
        public static string ResoverEcuacion(string query) {
          
            string idArchivo = pagina.Session["IdArchivoss"].ToString();

            query = query.Replace("@idArchivo",idArchivo);

            string Rsult = d_cuenta.resolverEcuacion(query);

            return Rsult;

        
        }


    }
}