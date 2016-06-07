using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;
using Entidades;
using ExcelFiles = Microsoft.Office.Interop.Excel;
using Negocios;


namespace MotorAnalisisFinanciera_Amezquita
{
    public partial class CargueArchivo : System.Web.UI.Page
    {
        
        public static N_CuentaPUC N_PlanUnicoCuenta = new N_CuentaPUC();
        public List<cuentasPuc> cuentas = new List<cuentasPuc>();      
        protected void Page_Load(object sender, EventArgs e)
        {

           
            string labelModificarArchivo = Convert.ToString(Session["ValorIdArchivoModificar"]);
            string labelAgregarArchivo = Convert.ToString(Session["ValorIdCargarArchivo"]);
            string FechaCargarArchivo = Convert.ToString(Session["FechaCargarArchivo"]);
            string nombreCliente = Convert.ToString(Session["nombreCliente"]);
            string textoCentroCosto = Convert.ToString(Session["textoCentroCosto"]);
            
       
           
        
            if (labelModificarArchivo != "")
            {

                labelArchivo.Text = "Modificar Archivo Informacion: " + FechaCargarArchivo + " " + nombreCliente + " " + textoCentroCosto;

            }
            else 
            {

                labelArchivo.Text = "Agregar Archivo Informacion: " + FechaCargarArchivo + " " + nombreCliente + " " + textoCentroCosto;
            
            }
            


        }

        [WebMethod]
        public static bool DescargarDocumentoExcel(string EcuacionPatrimonial)
        {
            


            try
            {

                Page obj = new Page();
                string files = obj.Server.MapPath("excel\\test.xlsx");

                if (File.Exists(files))
                {

                    File.Delete(files);

                }


                ExcelFiles.Application oApp;
                ExcelFiles.Worksheet oSheet;
                ExcelFiles.Workbook oBook;

                oApp = new ExcelFiles.Application();
                oBook = oApp.Workbooks.Add();
                oSheet = (ExcelFiles.Worksheet)oBook.Worksheets.get_Item(1);
                oSheet.Cells[1, 1] = "Name";


                for (int i = 1; i <= 5; i++)
                {

                    oSheet.Cells[i, 1] = i;

                }


                oBook.SaveAs(files);
                oBook.Close();
                oApp.Quit();

                return true;


            }
            catch (Exception)
            {
                
                throw;
            }
         


          

          
        
        }


        protected void btnDescargarArchivo_Click(object sender, EventArgs e)
        {
           
            string files = Server.MapPath("excel\\ValidacionArchivos.xlsx");
            byte[] content = File.ReadAllBytes(files);
            HttpContext contex = HttpContext.Current;

            contex.Response.ContentType = "application/vnd.ms-excel";
            contex.Response.AppendHeader("Content-Disposition", "attachment; filename=ValidacionArchivos.xlsx");
            contex.Response.TransmitFile(files);
            contex.Response.End();
        
        }


        protected void Button3_Click(object sender, EventArgs e)
        {
           
            
           

            

          
        }

       [WebMethod]
        public static bool RegistoCuentasXclienteNoregistradas(string cuenta , string nombreCuenta){


            
            Page context = new Page();
            int cuentaNoRegistrada = Convert.ToInt32(cuenta);
            int IdCliente = Convert.ToInt32(context.Session["idCliente"].ToString());
            int IdCentroCosto = Convert.ToInt32(context.Session["CentroCostoId"].ToString());
            return N_PlanUnicoCuenta.RegistoCuentasXclienteNoregistradas(IdCliente, IdCentroCosto, cuentaNoRegistrada, nombreCuenta);


             
         

       
       }

       [WebMethod]
       public static bool registrarcuentaNoRegistrada(string cuenta, string nombreCuenta)
       {

           Page pagina = new Page();
           int idCliente = Convert.ToInt32(pagina.Session["idCliente"].ToString());
           int CentroCosto = Convert.ToInt32(pagina.Session["CentroCostoId"].ToString());
           int cuentaEntera = Convert.ToInt32(cuenta);

           return N_PlanUnicoCuenta.registrarcuentaNoRegistrada(cuentaEntera, nombreCuenta, idCliente, CentroCosto);


       }

      


    }
}