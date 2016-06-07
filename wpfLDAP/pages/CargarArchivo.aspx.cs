using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Datos;
using System.Web.Services;

using Negocios;
namespace MotorAnalisisFianaciera_Amezquita.pages
{
    public partial class CargarArchivo : System.Web.UI.Page
    {

        public D_Usuario d_usuario = new D_Usuario();
        public static N_CuentaPUC n_planunicoCuenta = new N_CuentaPUC();

        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {



                string value = Request.QueryString["id"];

                LblUsuario.Text = Session["NombreCliente"].ToString();
                int usuario = Convert.ToInt32(Session["idCliente"].ToString());


                int CentroCosto = Convert.ToInt32(Context.Session["CentroCostoId"].ToString());
                string grupo = Session["grupoXUsuario"].ToString();
                string infoUsuario = grupo + " ";
                string labelModificarArchivo = Convert.ToString(Session["ValorIdArchivoModificar"]);
                string labelAgregarArchivo = Convert.ToString(Session["ValorIdCargarArchivo"]);



                if (labelModificarArchivo != "")
                {

                    labelArchivo.Text = "Modificar Archivo Informacion: " + infoUsuario;

                }
                else
                {

                    labelArchivo.Text = "Agregar Archivo Informacion: " + infoUsuario;

                }

            }

        }

        [WebMethod]
        public static bool registrarcuentaNoRegistrada(string cuenta, string nombreCuenta) 
        {


            Page pagina = new Page();

            int idCliente = Convert.ToInt32(pagina.Session["idCliente"].ToString());
            int CentroCosto = Convert.ToInt32(pagina.Session["CentroCostoId"].ToString());
            int cuentaEntera = Convert.ToInt32(cuenta);

            return n_planunicoCuenta.registrarcuentaNoRegistrada(cuentaEntera, nombreCuenta, idCliente,CentroCosto);

        
        }
            
           
        
    }
}