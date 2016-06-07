using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Data.OleDb;
using System.Data;
using Excel;
using Microsoft.VisualBasic;
using Entidades;
using System.Data.SqlClient;
using Newtonsoft.Json;
namespace MotorAnalisisFinanciera_Amezquita
{
    /// <summary>
    /// Descripción breve de Handler1
    /// </summary>
    public class AgregarPlanUnicoCuentas : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {


            System.IO.Stream MyStream;




            HttpFileCollection file = context.Request.Files;


            HttpPostedFile Archivo = file[0];
            string ext = Path.GetExtension(Archivo.FileName);

            if (ext.ToLower() == ".txt")
            {

                int LineaInicio = Convert.ToInt32(context.Request["LineaInicio"]);
                int LineaFinal = Convert.ToInt32(context.Request["LineaFinal"]);

                string fileName = context.Server.MapPath("~/Uploads/" + Archivo.FileName);

                Archivo.SaveAs(fileName);

                string[] lines = System.IO.File.ReadAllLines(fileName);
                string[] linesValor = System.IO.File.ReadAllLines(fileName);
                int separador = 0;
                int tamaño = lines.Length;
                int separadorCuenta = 0;

                for (int i = 0; i <= lines.Length - 1; i++)
                {



                    separador = lines[i].IndexOf('+');
                    if (separador == -1) {

                        separador = lines[i].IndexOf('-');
                        
                    }
                    if (separador != -1)
                    {

                        if (separador <= 0)
                        {

                            lines[i] = lines[i].Substring(0, lines[i].Length);
                            if (lines[i] == "")
                            {

                            }
                            else
                            {
                                lines[i] = lines[i];
                            }
                        }
                        else
                        {


                            lines[i] = lines[i].Substring(separador - 6, 6);
                            if (lines[i] == "")
                            {

                            }
                            else
                            {
                                string valorPtt = validarNumero(lines[i]);
                                lines[i] = lines[i];
                            }
                        }

                    }
                }

                int valorf = 0;
                int valor = 0;
                string prueba = "";
                string valorPrueba = "";

                for (int h = 0; h <= linesValor.Length - 1; h++)
                {

                    separadorCuenta = (linesValor[h].IndexOf('+') + 1);
                    valor = (linesValor[h].Length) - separadorCuenta;
                    prueba = linesValor[h];
                    linesValor[h] = linesValor[h].Substring(separadorCuenta, valor);
                    if (separadorCuenta == 0)
                    {
                        linesValor[h] = null;

                    }
                    else
                    {


                        linesValor[h] = eliminarCerosaLaizquierda(linesValor[h]);
                        valorPrueba = validarNumero(linesValor[h]);
                    }


                }

                // IList<D_PUC> listadoPlanUnicoCuenta = new List<D_PUC>();
                IList<cuentasPuc> listadoPlanUnicoCuenta = new List<cuentasPuc>();
                IList<string> numerosEcuacionPatrimonial = new List<string>();
                string estadoValorCuenta = "";



                for (int variableCuenta = 0; variableCuenta <= lines.Length - 1; variableCuenta++)
                {

                    cuentasPuc cuentaPlanUnicoCuenta = new cuentasPuc();
                    cuentaPlanUnicoCuenta.cuenta = lines[variableCuenta];
                    cuentaPlanUnicoCuenta.valorCuenta = linesValor[variableCuenta];
                    estadoValorCuenta = validarNumero(linesValor[variableCuenta]);



                    cuentaPlanUnicoCuenta.estadoValorCuenta = estadoValorCuenta;

                    if (validarNumero(cuentaPlanUnicoCuenta.cuenta) == "bn")
                    {

                        listadoPlanUnicoCuenta.Add(cuentaPlanUnicoCuenta);

                    }

                }




                IList<cuentasPuc> listResult = new List<cuentasPuc>();




                int finalLinea = LineaFinal;
                if (finalLinea == null)
                {

                    finalLinea = lines.Length - 1;

                }

                for (int i = LineaInicio; i <= finalLinea; i++)
                {

                    listResult.Add(listadoPlanUnicoCuenta[i]);

                }

                string data = JsonConvert.SerializeObject(listResult, Formatting.Indented);
                context.Response.Write(data);

            }
            else
            {
                string nombreHoja = context.Request["nombreHoja"];
                string FilaHoja = context.Request["fila"];
                string nombreCuenta = context.Request["nombreCuenta"];
                string codigoCuenta = context.Request["codigoCuenta"];
                string nivelCuenta = context.Request["nivelCuenta"];
                int nivelCuentaInt = 0;
                if (nivelCuenta == "undefined" || nivelCuenta == "")
                {
                    nivelCuentaInt = 6;
                }
                else
                {
                    nivelCuentaInt = Convert.ToInt32(nivelCuenta);
                }




                MyStream = Archivo.InputStream;

                IExcelDataReader excelDataReader = ExcelReaderFactory.CreateOpenXmlReader(MyStream);


                int FilasTable = Convert.ToInt32(FilaHoja);
                int cuentaTable = Convert.ToInt32(nombreCuenta);
                int codigoCuentaTable = Convert.ToInt32(codigoCuenta);
                




                DataSet result = excelDataReader.AsDataSet();
                DataTable table = result.Tables[nombreHoja];


                IList<string> Cuentas = new List<string>();
                IList<string> valorCuentas = new List<string>();
                IList<string> nombreCuentas = new List<string>();

                for (int i = FilasTable; i < table.Rows.Count; i++)
                {
                   

                    Cuentas.Add((table.Rows[i].ItemArray[codigoCuentaTable]).ToString());

                }

                for (int j = FilasTable; j < table.Rows.Count; j++)
                {


                    nombreCuentas.Add((table.Rows[j].ItemArray[cuentaTable]).ToString());

                }

               


                IList<cuentasPuc> listadoPlanUnicoCuenta = new List<cuentasPuc>();
                for (int variableCuentaValor = 0; variableCuentaValor <= Cuentas.Count - 1; variableCuentaValor++)
                {

                    if (Cuentas[variableCuentaValor] != " " && validarNumero(Cuentas[variableCuentaValor]) == "bn")
                    {


                        cuentasPuc cuentaPlanUnicoCuenta = new cuentasPuc();



                            cuentaPlanUnicoCuenta.numCuenta = variableCuentaValor + 1;
                            cuentaPlanUnicoCuenta.cuenta = (Cuentas[variableCuentaValor]).PadRight(nivelCuentaInt, '0');
                            cuentaPlanUnicoCuenta.nombreCuenta = nombreCuentas[variableCuentaValor];
                            listadoPlanUnicoCuenta.Add(cuentaPlanUnicoCuenta);
                      
                    }

                }



                string data = JsonConvert.SerializeObject(listadoPlanUnicoCuenta, Formatting.Indented);
                context.Response.Write(data);

            }
        }


        public string validarNumero(string numero)
        {

            decimal n;
            bool isNumeric = decimal.TryParse(numero, out n);

            if (isNumeric == true)
            {

                return "bn";

            }
            else
            {

                return "Mal";

            }


        }


        public string eliminarCerosaLaizquierda(string palabra)
        {



            string RsultBusque = "";
            string palabraFinal = "";
            int longitudCadena = palabra.Length;

            for (int i = 0; i <= palabra.Length - 1; i++)
            {

                RsultBusque = palabra.ElementAt(i).ToString();
                if (RsultBusque != "0")
                {
                    palabraFinal = palabra.Substring(i, (palabra.Length) - i);
                    return palabraFinal;

                }

            }

            return "0";

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