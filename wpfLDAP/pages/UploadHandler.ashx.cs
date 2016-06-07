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
namespace FileUPloadDocument
{
    /// <summary>
    /// Descripción breve de Handler1
    /// </summary>
    public class Handler1 : IHttpHandler, System.Web.SessionState.IRequiresSessionState
    {
      public  N_CuentaPUC objN_PlanUnicoCuentas = new N_CuentaPUC();

        public void ProcessRequest(HttpContext context)
        {


            int IdCliente = Convert.ToInt32(context.Session["idCliente"].ToString());
            int CentroCosto = Convert.ToInt32(context.Session["CentroCostoId"].ToString());
                                                                  

            System.IO.Stream MyStream;

          
         

            HttpFileCollection file = context.Request.Files;         


            HttpPostedFile Archivo = file[0];
            string ext = Path.GetExtension(Archivo.FileName);

            if (ext.ToLower() == ".txt")
            {

            int LineaInicio = Convert.ToInt32(context.Request["LineaInicio"]);
            int LineaFinal = Convert.ToInt32(context.Request["LineaFinal"]);

            LineaInicio = LineaInicio - 1 ;
            LineaFinal = LineaFinal - 1;

            string fileName = context.Server.MapPath("~/Uploads/" + Archivo.FileName);         
            
            Archivo.SaveAs(fileName);

            string[] lines = System.IO.File.ReadAllLines(fileName);
            string[] linesValor = System.IO.File.ReadAllLines(fileName);
            int separador = 0;
            int tamaño = lines.Length;
            int separadorCuenta = 0;
            int validacion = 0; 

            for (int i = 0; i <= lines.Length-1; i++) 
            {

            

                separador = lines[i].IndexOf('+');

                if (separador == -1) {

                    separador = lines[i].IndexOf('-');
                    
                }

                if (separador == -1) {

                    lines[i] = "";
                
                }

                if(separador != -1)
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


                    lines[i] = lines[i].Substring(separador-6, 6);
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
            int valorSigno = 1;

            for (int h = 0; h <= linesValor.Length-1; h++ ) {
                
                separadorCuenta = (linesValor[h].IndexOf('+')+1);

                valorSigno = 1;


                if (separadorCuenta == 0) {

                    separadorCuenta = (linesValor[h].IndexOf('-') + 1);

                    valorSigno = -1;
                
                }

                if (separadorCuenta != 0)
                {


                    valor = (linesValor[h].Length) - separadorCuenta;
                    prueba = linesValor[h];
                    linesValor[h] = linesValor[h].Substring(separadorCuenta, valor);
                    if (separadorCuenta == 0)
                    {
                        linesValor[h] = null;

                    }
                    else
                    {

                        if (validarNumero(linesValor[h]) == "bn")
                        {

                            double varAux = Convert.ToDouble(cambiarpuntosXcomas(eliminarCerosaLaizquierda(linesValor[h])));
                            varAux = varAux * valorSigno;
                            linesValor[h] = (varAux).ToString();
                            valorPrueba = validarNumero(linesValor[h]);


                        }
                        else
                        {

                            linesValor[h] = (eliminarCerosaLaizquierda(linesValor[h]));
                            valorPrueba = validarNumero(linesValor[h]);
                        }
                    }


                }

              
            }

 

           // IList<D_PUC> listadoPlanUnicoCuenta = new List<D_PUC>();
          IList<cuentasPuc> listadoPlanUnicoCuenta = new List<cuentasPuc>();
          IList<string> numerosEcuacionPatrimonial = new List<string>();
          string estadoValorCuenta = "";
        
            

            for (int variableCuenta = 0; variableCuenta <= lines.Length - 1;variableCuenta++) 
                {
              
                    cuentasPuc cuentaPlanUnicoCuenta = new cuentasPuc();

                    cuentaPlanUnicoCuenta.numCuenta = variableCuenta + 1;
                    cuentaPlanUnicoCuenta.cuenta = lines[variableCuenta];
                    //cuentaPlanUnicoCuenta.NombreCuenta = NombreCuentaXcuenta(li);
                    cuentaPlanUnicoCuenta.valorCuenta = linesValor[variableCuenta];
                    cuentaPlanUnicoCuenta.nombreCuenta = NombreCuentaXcuenta(lines[variableCuenta], IdCliente, CentroCosto);
                    estadoValorCuenta = validarNumero(linesValor[variableCuenta]);                

                    cuentaPlanUnicoCuenta.estadoValorCuenta = estadoValorCuenta;

                    try
                    {
                        listadoPlanUnicoCuenta.Add(cuentaPlanUnicoCuenta);
                    }
                    catch (Exception ex)
                    {
                        
                        throw new Exception("Error..",ex);
                    }
                    
            
                }




            IList<cuentasPuc> listResult = new List<cuentasPuc>();

           


            int finalLinea = LineaFinal;
            if (finalLinea == null) {

                finalLinea = lines.Length - 1;
                            
            }

            for (int i = LineaInicio  ; i <= finalLinea; i++)
            {
                if (validarNumero(listadoPlanUnicoCuenta[i].cuenta.ToString()) == "bn" )
                    
                {

                    if  (listadoPlanUnicoCuenta[i].estadoValorCuenta == "bn"){

                    listResult.Add(listadoPlanUnicoCuenta[i]);
                    
                    }

                }

            }

            string data = JsonConvert.SerializeObject(listResult, Formatting.Indented);
            context.Response.Write(data);

            }
            else
            {
                string nombreHojaS = context.Request["nombreHoja"];
                string FilaHoja = context.Request["fila"];
                string nombreCuenta = context.Request["nombreCuenta"];
                string cuenta = context.Request["cuenta"];
                string valorCuenta = context.Request["valorCuenta"];
                string nivelCuenta = context.Request["nivelCuenta"];
                int nivelCuentaInt=0;
                if (nivelCuenta == "undefined" || nivelCuenta == "")
                {

                    nivelCuentaInt = 6;


                }
                else {

                    nivelCuentaInt = Convert.ToInt32(nivelCuenta);
                
                }
                MyStream = Archivo.InputStream;

                IExcelDataReader excelDataReader = ExcelReaderFactory.CreateOpenXmlReader(MyStream);
                  
             

                int FilasTable = Convert.ToInt32(FilaHoja);
                int cuentaTable = Convert.ToInt32(cuenta);             
                int valorCuentaTable = Convert.ToInt32(valorCuenta);


         
                DataSet result = excelDataReader.AsDataSet();
                DataTable table = result.Tables[nombreHojaS];
               

                IList<string> Cuentas = new List<string>();
                IList<string> valorCuentas = new List<string>();
                IList<string> nombreCuentas = new List<string>();

                for (int i = FilasTable; i < table.Rows.Count; i++)
                {

                    string cuentaRsult = (table.Rows[i].ItemArray[cuentaTable]).ToString();

                    
                        Cuentas.Add((table.Rows[i].ItemArray[cuentaTable]).ToString());
                   
                }
             //pENDIENTE SACAR LAS CUENTAS
                for (int j = FilasTable; j < table.Rows.Count; j++)
                {

                    string cuentaTables = ((table.Rows[j].ItemArray[cuentaTable])).ToString();

                    string rsult = NombreCuentaXcuenta(cuentaTables.PadRight(nivelCuentaInt, '0'), IdCliente, CentroCosto);
                    nombreCuentas.Add(rsult);

                }

                for (int k = FilasTable; k < table.Rows.Count ; k++)
                {


                    valorCuentas.Add((table.Rows[k].ItemArray[valorCuentaTable]).ToString());

                }



                IList<cuentasPuc> listadoPlanUnicoCuenta = new List<cuentasPuc>();
                for (int variableCuentaValor = 0; variableCuentaValor <= Cuentas.Count - 1; variableCuentaValor++)
                {

                    if (Cuentas[variableCuentaValor] != " " && validarNumero(Cuentas[variableCuentaValor]) == "bn" && validarNumero(Cuentas[variableCuentaValor]) != "prueba")
                    {

                        cuentasPuc cuentaPlanUnicoCuenta = new cuentasPuc();
                        cuentaPlanUnicoCuenta.numCuenta = variableCuentaValor + 1;
                        cuentaPlanUnicoCuenta.cuenta = (Cuentas[variableCuentaValor]).PadRight(nivelCuentaInt, '0');
                        cuentaPlanUnicoCuenta.nombreCuenta = (nombreCuentas[variableCuentaValor]);
                        if (valorCuentas[variableCuentaValor] == "   ")
                        {

                            cuentaPlanUnicoCuenta.valorCuenta = "0";

                        }
                        else
                        {

                            cuentaPlanUnicoCuenta.valorCuenta = eliminarCerosaLaizquierda(valorCuentas[variableCuentaValor]);
                        }
                        listadoPlanUnicoCuenta.Add(cuentaPlanUnicoCuenta);

                    }

                }



                string data = JsonConvert.SerializeObject(listadoPlanUnicoCuenta, Formatting.Indented);
                context.Response.Write(data);

            }
        }

       

        public string NombreCuentaXcuenta(string cuenta , int IdCliente ,  int CentroCosto  ) {

            Int64 n;

            bool isNumeric = Int64.TryParse(cuenta, out n);

            if (isNumeric != false)
            {

                Int64  cuentaS = Convert.ToInt64(cuenta);
                string nombreCuenta = objN_PlanUnicoCuentas.NombreCuentaXcuenta(cuentaS, IdCliente, CentroCosto);

                return nombreCuenta;
            }

            return "Prueba";

        }


        public string cambiarpuntosXcomas(string numero) {


            return numero.Replace('.',',');
        
        }

        public string eliminarCerosaLaizquierda(string palabra) {


         
            string RsultBusque = "";
            string palabraFinal="";
            int longitudCadena = palabra.Length;

           for (int i = 0; i <= palabra.Length - 1; i++) {

               RsultBusque = palabra.ElementAt(i).ToString();
               if (RsultBusque != "0")
               {
                   palabraFinal = palabra.Substring(i,(palabra.Length)-i);
                   return palabraFinal;

               }
          
           }

                   return "0";
               
        }




        public string validarNumero(string numero) {

            decimal n;
            bool isNumeric = decimal.TryParse(numero, out n);

            if (isNumeric == true)
            {

                return "bn";

            }
            else {

                return "Mal";
            
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