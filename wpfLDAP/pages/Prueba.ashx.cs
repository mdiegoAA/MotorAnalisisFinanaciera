using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;
using System.Web.Script.Serialization;
using Newtonsoft.Json;
using Entidades;
using System.Data;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;
using Negocios;





namespace MotorAnalisisFinanciera_Amezquita
{
    /// <summary>
    /// Descripción breve de Prueba
    /// </summary>
    public class Prueba : IHttpHandler, IRequiresSessionState , System.Web.SessionState.IReadOnlySessionState 
    {

        
        public void ProcessRequest(HttpContext context)
        {
            N_CuentaPUC objPlanUnicoCuenta = new N_CuentaPUC();
        

                if (context.Session["ValorIdCargarArchivo"] != null)
                {
                    int ValorId = Convert.ToInt32(context.Session["idArchivo"].ToString());




                    List<cuentasPuc> listadoCuentas = new List<cuentasPuc>();
                    string listadoCuentasPUC = (context.Request["informacion"]);
                    string fechaInicialPeriodo = (context.Request["fechaInicialPeriodo"]);

                    DataTable tester = (DataTable)JsonConvert.DeserializeObject(listadoCuentasPUC, (typeof(DataTable)));

                    for (int i = 0; i <= tester.Rows.Count - 1; i++)
                    {

                        tester.Rows[i].ItemArray[1] = 2;

                    }


                    try
                    {
                        objPlanUnicoCuenta.guardarInformacion(tester, ValorId);

                    }
                    catch (Exception)
                    {

                        throw;
                    }


                    context.Response.ContentType = "text/json";

                }

                if (context.Session["ValorIdArchivoModificar"] != null)
                {
                    int valorIdModificar = Convert.ToInt32(context.Session["ValorIdArchivoModificar"].ToString());
                    objPlanUnicoCuenta.EliminarInformacionIdCuenta(valorIdModificar);
                    List<cuentasPuc> listadoCuentas = new List<cuentasPuc>();
                    string listadoCuentasPUC = (context.Request["informacion"]);
                    DataTable tester = (DataTable)JsonConvert.DeserializeObject(listadoCuentasPUC, (typeof(DataTable)));
                    objPlanUnicoCuenta.guardarInformacion(tester, valorIdModificar);


                


            }     

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}