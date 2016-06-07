using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data.OleDb;
using Excel;
using System.Data;
using Microsoft.VisualBasic;
using Entidades;
using Negocios;
using System.Data.SqlClient;
using Newtonsoft.Json;
using System.Collections;

namespace FileUPloadDocument
{
    /// <summary>
    /// Descripción breve de ValidacionArchivo
    /// </summary>
    public class ValidacionArchivo : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {


            System.IO.Stream MyStream;
            HttpFileCollection file = context.Request.Files;

            HttpPostedFile Archivo = file[0];
           
            string ext = Path.GetExtension(Archivo.FileName);
            string nombreArchivo = Archivo.FileName;
            string fileName = context.Server.MapPath("~/Uploads/" + Archivo.FileName);

            Archivo.SaveAs(fileName);
            IList<string> informacionArchivo = new List<string>();
            if (ext.ToLower() == ".txt")
            {
                  
                string[] lines = System.IO.File.ReadAllLines(fileName);
                string valorLineas = (lines.Length).ToString();


                informacionArchivo.Add(ext);               
                informacionArchivo.Add(Archivo.FileName);
                informacionArchivo.Add(valorLineas);
            
            

            }
            else if (ext.ToLower() == ".xls" || ext.ToLower() == ".xlsx")
            {
                MyStream = Archivo.InputStream;
                IExcelDataReader excelDataReader = ExcelReaderFactory.CreateOpenXmlReader(MyStream);
                DataSet result = excelDataReader.AsDataSet();

                string rSult = result.Tables[0].ToString();

                int numerosHOjasEXcel = 0;



                List<string> nombreHojas = new List<string>();

                for (numerosHOjasEXcel = 0; numerosHOjasEXcel <= result.Tables.Count -1; numerosHOjasEXcel++) {


                    string rsultHoja = result.Tables[numerosHOjasEXcel].ToString();
                    int columnas = result.Tables[0].Columns.Count;


                    nombreHojas.Add(rsultHoja);
                
                }

                string nombreHojasJson = JsonConvert.SerializeObject(nombreHojas, Formatting.Indented);

                    // DataTable table = result.Tables[nombreHojaS];
                    informacionArchivo.Add(ext);
                    informacionArchivo.Add(Archivo.FileName);
                    informacionArchivo.Add(nombreHojasJson);
             

            }

            string data = JsonConvert.SerializeObject(informacionArchivo, Formatting.Indented);
            context.Response.Write(data);

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