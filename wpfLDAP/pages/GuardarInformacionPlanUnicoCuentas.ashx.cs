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
    /// Descripción breve de GuardarInformacionPlanUnicoCuentas
    /// </summary>
    public class GuardarInformacionPlanUnicoCuentas : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {

        N_CuentaPUC objN_PlanUnicoCuentas = new N_CuentaPUC();

        public void ProcessRequest(HttpContext context)
        {


            string listadoCuentasPUC = (context.Request["datas"]);
            int IdCliente = Convert.ToInt32(context.Session["idCliente"].ToString());
            int IdCentroCosto = Convert.ToInt32(context.Session["IdCentroCosto"].ToString());

            DataTable tester = (DataTable)JsonConvert.DeserializeObject(listadoCuentasPUC, (typeof(DataTable)));
            bool rSult = objN_PlanUnicoCuentas.AgregarPlanUnicoCuentaXcentroCosto(tester, IdCliente, IdCentroCosto);

            context.Response.Write(rSult);


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