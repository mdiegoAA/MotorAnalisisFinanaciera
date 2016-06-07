using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using Datos;

namespace MotorAnalisisFianaciera_Amezquita.pages
{
    public partial class InformacionValidacionSubirArchivo : System.Web.UI.Page
    {
        public  D_Usuario d_usuario = new D_Usuario();
        public static D_PlanUnicoCuentas d_planUnicoCuenta = new D_PlanUnicoCuentas();
        public static  Page  page = new Page();

        protected void Page_Load(object sender, EventArgs e)
        {


            LblUsuario.Text = Session["NombreCliente"].ToString();
            int usuario = Convert.ToInt32(Session["idCliente"].ToString());
            string grupo = Session["grupoXUsuario"].ToString();
            string añoCliente = Session["añoCliente"].ToString();
           // string infoUsuario = d_usuario.Traer_Nombre_Proyecto_añoXid_Grupo(usuario , grupo);
            Informacion.Text = grupo.ToString() + " - " + añoCliente ;


        }

        [WebMethod]
        public static string AgregarAmezquitaCentroCostos(string NuevoCentroCosto,string DescripcionNuevoCentroCosto)
        {

            Page pagina = new Page();


            int idCliente = (Convert.ToInt32(pagina.Session["idCliente"].ToString()));
            string nombreGrupo = pagina.Session["grupoXUsuario"].ToString();


            string rSult = d_planUnicoCuenta.AgregarAmezquita_MAIF_CentroCostos(idCliente, nombreGrupo, NuevoCentroCosto, DescripcionNuevoCentroCosto);

            return rSult;

        }
        
        [WebMethod]
        public static string Amezquita_MAIF_Obtener_CentroCostos_Cliente() {                    

              Page  pagina = new Page();

              int idCliente = (Convert.ToInt32(pagina.Session["idCliente"].ToString()));
              string nombreGrupo = pagina.Session["grupoXUsuario"].ToString();

            string Rsult = d_planUnicoCuenta.Amezquita_MAIF_Obtener_CentroCostos_Cliente(idCliente, nombreGrupo);

            return Rsult;
        
        }


        [WebMethod]
        public static bool validarArchivoXfecha_centro_Costo(string fechaArchivo, string CentroCosto)
        {
            Page pagina = new Page();

            string fecha = formatoFechas(fechaArchivo);
            int IdCentroCostoE = Convert.ToInt32(CentroCosto);
            int idCliente = (Convert.ToInt32(page.Session["idCliente"].ToString()));
         
            string rSult = d_planUnicoCuenta.validarArchivoXfecha_centro_Costo(fecha, IdCentroCostoE, idCliente);

            if (rSult == "-1")
            {
                page.Session["ValorIdCargarArchivo"] = rSult;              
                page.Session.Remove("ValorIdArchivoModificar");
             
                return false;

            }
            else
            {

                page.Session["ValorIdArchivoModificar"] = rSult;
                page.Session.Remove("ValorIdCargarArchivo");

                return true;

            
            
            }

           
        
        
        }

        [WebMethod]
        public static bool SeleccionarInformacionArchivo_idEstadoCreado(string fechaArchivo, string CentroCosto)
        {
            Page pagina = new Page();
            Page nuevaSession = new Page();

            string fecha = formatoFechas(fechaArchivo);
            int IdCentroCostoE = Convert.ToInt32(CentroCosto);
            int idCliente = (Convert.ToInt32(page.Session["idCliente"].ToString()));
           
            string rSult = d_planUnicoCuenta.GuardarInformacionArchivo_idEstadoCreado(fecha, IdCentroCostoE, idCliente);
            
            nuevaSession.Session["CentroCostoId"] = CentroCosto.ToString();
            page.Session["idArchivo"] = Convert.ToInt32(rSult).ToString();           

            return true;


        }


        public static string formatoFechas(string fecha)
        {


            DateTime fechaDatatime = Convert.ToDateTime(fecha);
            int dayDatatime = fechaDatatime.Day;
            int mesDatatime = fechaDatatime.Month;
            int yearDatatime = fechaDatatime.Year;
            string dayReturn = "";
            string mesReturn = "";

            if (dayDatatime <= 9)
            {
                dayReturn = "0" + dayDatatime;

            }
            else
            {

                dayReturn = dayDatatime.ToString();

            }


            if (mesDatatime <= 9)
            {
                mesReturn = "0" + mesDatatime;
            }
            else
            {
                mesReturn = mesDatatime.ToString();
            }

            string fechaInicialBusqueda = yearDatatime + "-" + mesReturn + "-" + dayReturn;

            return fechaInicialBusqueda;

        }



    }
}