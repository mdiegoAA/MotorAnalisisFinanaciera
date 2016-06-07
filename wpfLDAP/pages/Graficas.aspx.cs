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
    public partial class Graficas : System.Web.UI.Page
    {
        public static N_CuentaPUC planUnicoCuenta = new N_CuentaPUC();
        public static D_PlanUnicoCuentas d_planUnicoCuenta = new D_PlanUnicoCuentas();
        protected void Page_Load(object sender, EventArgs e)
        {
            LblUsuario.Text = Session["NombreCliente"].ToString();
        }
        [WebMethod]
        public static string crearVariablesSession(string idCliente, string nombreCliente)
        {

            try
            {
                Page objp = new Page();
                objp.Session["idCliente"] = idCliente;
                objp.Session["nombreCliente"] = nombreCliente;
                return "bn";

            }
            catch (Exception)
            {

                throw;
            }

        }



        [WebMethod]
        public static string Amezquita_MAIF_Obtener_CentroCostos_Cliente()
        {
            Page page = new Page();
            int idCliente = (Convert.ToInt32(page.Session["idCliente"].ToString()));
            string nombreGrupo = page.Session["grupoXUsuario"].ToString();

            string Rsult = d_planUnicoCuenta.Amezquita_MAIF_Obtener_CentroCostos_Cliente(idCliente, nombreGrupo);

            return Rsult;

        }
       
        [WebMethod]
        public static string BuscarIdArchivoxCentroCosto_Fecha(string fechaInicio, string fechaFinal, string centroCosto)
        {
            Page page = new Page();
            int idCliente = Convert.ToInt32(page.Session["idCliente"].ToString());
            int centroCostos = Convert.ToInt32(centroCosto);
            string rSult = d_planUnicoCuenta.BuscarIdArchivoxCentroCosto_Fecha(idCliente, centroCostos, fechaInicio, fechaFinal);
            return rSult;

        }


        [WebMethod]
        public static string ListadoGraficaPIE(string idArchivo) {


            string rSult = d_planUnicoCuenta.Amezquita_ListadoGraficaPIE(Convert.ToInt32(idArchivo));

            return rSult;
        
        
        }


        [WebMethod]
        public static string traerInformacion(string fechaInicial, string fechaFinal, string CentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.informacion(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);


            }
            catch (Exception)
            {

                throw;
            }

        }
        [WebMethod]
        public static string InformacionCuentas(string fechaInicial, string fechaFinal, string CentroCosto)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.FechaArchivosVarianza(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);


            }
            catch (Exception)
            {

                throw;
            }

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