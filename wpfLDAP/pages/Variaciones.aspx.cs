using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using Negocios;
using Datos;

namespace MotorAnalisisFianaciera_Amezquita.pages
{
    public partial class Variaciones : System.Web.UI.Page

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
        public static string traerInformacionTrimestral(string fechaInicial, string fechaFinal, string CentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.informacionTrimestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);


            }
            catch (Exception)
            {

                throw;
            }

        }


        [WebMethod]
        public static string varicionTrimestral(string fechaInicial, string fechaFinal, string CentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.varicionTrimestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);


            }
            catch (Exception)
            {

                throw;
            }

        }

        [WebMethod]
        public static string varicionSmestral(string fechaInicial, string fechaFinal, string CentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.varicionSemstral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);


            }
            catch (Exception)
            {

                throw;
            }

        }


        [WebMethod]
        public static string varicionAnual(string fechaInicial, string fechaFinal, string CentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.varicionAnual(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);


            }
            catch (Exception)
            {

                throw;
            }

        }

        
        [WebMethod]
        public static string varicionMesTrimestral(string fechaInicial, string fechaFinal, string CentroCosto)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.varicionMesTrimestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);


            }
            catch (Exception)
            {

                throw;
            }

        }

        [WebMethod]
        public static string varicionMesSmestral(string fechaInicial, string fechaFinal, string CentroCosto)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {
                string rSult =planUnicoCuenta.varicionMesSemestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);
                return rSult;


            }
            catch (Exception)
            {

                throw;
            }

        }

        [WebMethod]
        public static string varicionMesAnual(string fechaInicial, string fechaFinal, string CentroCosto)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.varicionMesAnual(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);


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

        [WebMethod]
        public static string InformacionCuentasTrimestral(string fechaInicial, string fechaFinal, string CentroCosto)
        {

            Page objp = new Page();
            string fechaInicialBusqueda = formatoFechas(fechaInicial);
            string fechaFinalBusqueda = formatoFechas(fechaFinal);
            int idClientes = Convert.ToInt32(objp.Session["idCliente"]);
            int idCentroCosto = Convert.ToInt32(CentroCosto);

            try
            {

                return planUnicoCuenta.FechaArchivosVarianzaTrimestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);


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