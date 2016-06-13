using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;
using Entidades;
using System.Configuration;





namespace Datos
{
  public  class D_PlanUnicoCuentas:D_Conexion
    {
         

      public void guarInformacionPlanUnicoCuenta(DataTable informacionPlanUnicoCuenta, int valorId) {

        


          for (int i = 0; i <= informacionPlanUnicoCuenta.Rows.Count-1; i++)
          {
              string valorDecimal = Convert.ToString(remplazarValorPunatoXcoma((informacionPlanUnicoCuenta.Rows[i].ItemArray[2]).ToString()));
            

              abrirConexion();
              SqlCommand cmd = new SqlCommand("SP_Amezquita_GuardarInformacionArchivo", conn);
              cmd.CommandType = CommandType.StoredProcedure;
              cmd.Parameters.AddWithValue("@idArchivo",valorId);
              cmd.Parameters.AddWithValue("@CodigoPlanUnicoCuenta", Convert.ToInt32(informacionPlanUnicoCuenta.Rows[i].ItemArray[1]));
              cmd.Parameters.AddWithValue("@valorPlanUnicoCuenta", valorDecimal);

              try
              {
                  abrirConexion();
                  cmd.ExecuteNonQuery();
                  cerrarConexion();
              }
              catch (Exception)
              {
                  
                  throw;
              }

          }

          ActualizarEstadoArchivo(valorId);
      
      }

      public void ActualizarEstadoArchivo(int idArchivo) {

          abrirConexion();
          SqlCommand cmd = new SqlCommand("SP_Amezquita_ActualizarEstadoArchivo", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idArchivo", idArchivo);
          

          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();
          }
          catch (Exception)
          {

              throw;
          }
      
      
      }

      public void guardarTipoArchivo(int idstring ,string nombreTipoArchivo , string descripcionTipoArchivo ) 
      {


          SqlCommand cmd = new SqlCommand("guardarCentroCostoxCliente", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idcliente",idstring);
          cmd.Parameters.AddWithValue("@nombreCentroCosto", nombreTipoArchivo);
          cmd.Parameters.AddWithValue("@descripcion", descripcionTipoArchivo);
          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();
          }
          catch (Exception)
          {
              
              throw;
          }

      
      }

      public string listadotipoArchivoXclientes(int idCliente) {

          SqlCommand cmd = new SqlCommand("[listadoCentroCostoXcliente]", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idCliente", idCliente);
          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {
              
              throw;
          }


      }

      public void EliminarInformacionIdCuenta(int idstring)
      {


          SqlCommand cmd = new SqlCommand("[SP_Amezquita_EliminarInformacionPlaunicoCuentaXidArchivo]", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idArchivo", idstring);
          
          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();
          }
          catch (Exception)
          {

              throw;
          }


      }

      public string buscarArchivoFechas_Cliente_CentroCosto(string fechaInicial , string fechaFinal , int cliente , int centroCosto) {

          SqlCommand cmd = new SqlCommand("FechaBusquedadEliminar",conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@fechaInicial", fechaInicial);
          cmd.Parameters.AddWithValue("@fechaFinal", fechaFinal);
          cmd.Parameters.AddWithValue("@Cliente", cliente);
          cmd.Parameters.AddWithValue("@centroCosto", centroCosto);

          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {
              
              throw;
          }

      
      }

      public void guardarArchivoValidacion(DateTime fecha,int idCentroCosto , int idEstado , int idUsuario , int idCliente) {

          SqlCommand cmd = new SqlCommand("insertarArchivo", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@fechaArchivo", fecha);
          cmd.Parameters.AddWithValue("@IdcentroCosto", idCentroCosto);
          cmd.Parameters.AddWithValue("@idEstado",idEstado);
          cmd.Parameters.AddWithValue("@idUsuario", idUsuario);
          cmd.Parameters.AddWithValue("@idCliente", idCliente);

          try
          {
              abrirConexion();
              int valor = cmd.ExecuteNonQuery();
              cerrarConexion();
          }
          catch (Exception)
          {
              
              throw;
          }
        

      
      }

      public string  validarArchivoInformacionArchivo(string fecha, int idCentroCosto, int idEstado, int idUsuario, int idCliente) {

          SqlCommand cmd = new SqlCommand("verificacionRegistro", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@fechacuenta", fecha);
          cmd.Parameters.AddWithValue("@centroCosto", idCentroCosto);
          cmd.Parameters.AddWithValue("@idEstado", idEstado);
          cmd.Parameters.AddWithValue("@idUsuario", idUsuario);
          cmd.Parameters.AddWithValue("@idCliente", idCliente);

          try
          {
              abrirConexion();
             string  dato = cmd.ExecuteScalar().ToString();
             
              cerrarConexion();


              return dato;

              
          }
          catch (Exception)
          {

              throw;
          }
        

      
      }

      public string guardarArchivoPrimeraVez(string fecha, int idCentroCosto, int idEstado, int idUsuario, int idCliente)
      {
     
          SqlCommand cmd = new SqlCommand("insertarArchivoNuevo", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@fechaArchivo", fecha);
          cmd.Parameters.AddWithValue("@IdcentroCosto", idCentroCosto);
          cmd.Parameters.AddWithValue("@idEstado", idEstado);
          cmd.Parameters.AddWithValue("@idUsuario", idUsuario);
          cmd.Parameters.AddWithValue("@idCliente", idCliente);

          try
          {
              abrirConexion();
              string valor = cmd.ExecuteScalar().ToString();
              cerrarConexion();
              return valor;

          }
          catch (Exception)
          {

              throw;
          }



      }

      public string BuscarInformacionId(int id)
      {

          SqlCommand cmd = new SqlCommand("BuscarPlanUnicoCuentXid", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@variable", id);


          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {

              throw;
          }


      }

      public bool AgregarPlanUnicoCuentaXcentroCosto(DataTable planUnicoCuentas, int idCliente, int centroCosto) {

         
              for (int i = 0; i <= planUnicoCuentas.Rows.Count - 1; i++)
              {

                 
                  SqlCommand cmd = new SqlCommand("SP_AmezquitaAgregarPlanUnicoCuentaXcentroCosto", conn);
                  cmd.CommandType = CommandType.StoredProcedure;
                  cmd.Parameters.AddWithValue("@idCliente", idCliente);
                  cmd.Parameters.AddWithValue("@idCentroCosto", centroCosto);
                  Int64  valorRsult = Convert.ToInt64(planUnicoCuentas.Rows[i].ItemArray[1]);

                  cmd.Parameters.AddWithValue("@cuenta", valorRsult);
                  cmd.Parameters.AddWithValue("@nombreCuenta", (planUnicoCuentas.Rows[i].ItemArray[4]).ToString());

                 
                  try
                  {
                      abrirConexion();
                      cmd.ExecuteNonQuery();
                      cerrarConexion();

                  }
                  catch (Exception e )
                  {

                      throw new Exception("Problemas al cargar el archivo" ,e);
                      return false;
                  }


              }

              return true;

         

        
      
      }

      public string NombreCuentaXcuenta(Int64 cuenta, int idCliente, int idCentroCosto)
      {
          string data = "";
          SqlCommand cmd = new SqlCommand("SP_AmezquitaTraerNombreCuentaXcuenta",conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@cuenta",cuenta);
          cmd.Parameters.AddWithValue("@idCliente",idCliente);
          cmd.Parameters.AddWithValue("@idCentroCosto",idCentroCosto);

          try
          {
              abrirConexion();
              SqlDataReader rdr = cmd.ExecuteReader();
              rdr.Read();
             

                   data = rdr["nombreCuenta"].ToString();
              
              

             
              cerrarConexion();
            
            
          }
          catch (Exception)
          {

              throw;
            
                
          }


          return data;


      
      }

      public bool RegistoCuentasXclienteNoregistradas(int cliente , int centroCosto , int cuenta , string nombreCuenta) {


          SqlCommand cmd = new SqlCommand("sp_AmezquitaRegistoCuentasXclienteNoregistradas",conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idCliente",cliente);
          cmd.Parameters.AddWithValue("@idCentroCosto",centroCosto);
          cmd.Parameters.AddWithValue("@cuenta",cuenta);
          cmd.Parameters.AddWithValue("@nombreCuenta",nombreCuenta);

          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();
              return true;

          }
          catch (Exception)
          {
              
              throw;

          }


      
      
      }

      public string informacion(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto , string RangoCuentaInicial, string RangoCuentaFinal)
      {
          
          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerArchivosVarianza",conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);
       
          SqlCommand cmdCuenta = new SqlCommand("sp_amezquita_obtenerCuentas",conn);
          cmdCuenta.CommandType = CommandType.StoredProcedure;
          cmdCuenta.Parameters.AddWithValue("@idcentrocosto", idCentroCosto);

          int columnasData = 0;

          try
          {
 
             

              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();

              abrirConexion();
              cmdCuenta.ExecuteReader();
              cerrarConexion();

              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);
              SqlDataAdapter cuentas = new SqlDataAdapter(cmdCuenta);            
              DataTable datasetCuenta = new DataTable();
              DataTable dataset = new DataTable();
              DataTable archivo = new DataTable();
              DataSet ds = new DataSet();
              DataSet dsRulst = new DataSet();
              dsRulst.Tables.Add("prueba");


              ds.Tables.Add("prueba");
            ds.Tables["prueba"].Rows.Add();
             ds.Tables["prueba"].Columns.Add();

           
              archivos.Fill(archivo);
             
              cuentas.Fill(datasetCuenta);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              DataTable tester = (DataTable)JsonConvert.DeserializeObject(data, (typeof(DataTable)));

              ds.Tables["prueba"].Columns.Add();


              List<string> ArraycodigoCuentas = new List<string>();



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {

                  if (i != datasetCuenta.Rows.Count - 1) {

                      ds.Tables["prueba"].Rows.Add();
                    
                    
                  
                  }

               

                  string codigoCuentas = datasetCuenta.Rows[i].ItemArray[0].ToString();
                  ArraycodigoCuentas.Add(codigoCuentas);

                  if (codigoCuentas != null) {

                      ds.Tables["Prueba"].Rows[i][0] = i + 1;
                      ds.Tables["Prueba"].Rows[i][1] = codigoCuentas;
                  
                  }


              

              }

              ds.Tables["prueba"].Columns.Add();
           
              columnasData = columnasData + 1;



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {
                

                  string descripcionCuentas = datasetCuenta.Rows[i].ItemArray[1].ToString();

                  ds.Tables["Prueba"].Rows[i][2] = descripcionCuentas;

              }


              columnasData = columnasData + 1;

              for (int j = 0; j <= archivo.Rows.Count - 1; j++)
              {

                  string archivoParametro = archivo.Rows[j].ItemArray[0].ToString();
                  SqlCommand cmd = new SqlCommand("sp_amezquita_ObtenerInformacionCuenta", conn);
                  cmd.CommandType = CommandType.StoredProcedure;
                  cmd.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
                  cmd.Parameters.AddWithValue("@idarchivo", archivoParametro);
                  abrirConexion();
                  cmd.ExecuteReader();
                  cerrarConexion();

                  SqlDataAdapter da = new SqlDataAdapter(cmd);
                  da.Fill(dataset);

                  ds.Tables["prueba"].Columns.Add();
               
                  columnasData = columnasData + 1;
                  int pruebaS = dataset.Rows.Count;
                  string ValorCuentas = "";
                  string mesObtener = "";
                  string valorCuentas = "0";
                  for (int inicio = 0; inicio <= ArraycodigoCuentas.Count-1; inicio++)
                  {
                     
                      for (int aj = 0; aj <= dataset.Rows.Count - 1; aj++)
                      {
                         
                              if (ArraycodigoCuentas[inicio] == dataset.Rows[aj].ItemArray[2].ToString())
                              {

                                 valorCuentas = dataset.Rows[aj].ItemArray[0].ToString();
                                 ValorCuentas = valorCuentas.ToString();
                                  mesObtener = obtenerMesArchivoCargado(dataset.Rows[aj].ItemArray[1].ToString());

                              }

                      }

                      try
                      {
                           
                            ds.Tables["Prueba"].Rows[inicio][columnasData] = ValorCuentas + "_" + mesObtener;
                            valorCuentas = "0";
                            ValorCuentas = "0";
                      }
                      catch (Exception)
                      {
                          
                          throw;
                      }

                  }

                  dataset.Clear();


              }

              ds.Tables["prueba"].Columns[0].ColumnName = "IdColumna";
              ds.Tables["prueba"].Columns[1].ColumnName = "CodigoCuenta";
              ds.Tables["prueba"].Columns[2].ColumnName = "DescripcionCuenta";




            

             


              string datas = JsonConvert.SerializeObject(ds, Formatting.Indented);
            //  var dict = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(datas);

              return datas;
             
          }
          
          catch (Exception)
          {
              
              throw;
          }

      
      }

      public string informacionTrimestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerArchivosVarianzaTrimestral", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);

          SqlCommand cmdCuenta = new SqlCommand("sp_amezquita_obtenerCuentas", conn);
          cmdCuenta.CommandType = CommandType.StoredProcedure;
          cmdCuenta.Parameters.AddWithValue("@idcentrocosto", idCentroCosto);

          int columnasData = 0;

          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();

              abrirConexion();
              cmdCuenta.ExecuteReader();
              cerrarConexion();

              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);
              SqlDataAdapter cuentas = new SqlDataAdapter(cmdCuenta);
              DataTable datasetCuenta = new DataTable();
              DataTable dataset = new DataTable();
              DataTable archivo = new DataTable();
              DataSet ds = new DataSet();
              DataSet dsRulst = new DataSet();
              dsRulst.Tables.Add("prueba");


              ds.Tables.Add("prueba");
              ds.Tables["prueba"].Rows.Add();
              ds.Tables["prueba"].Columns.Add();


              archivos.Fill(archivo);

              cuentas.Fill(datasetCuenta);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              DataTable tester = (DataTable)JsonConvert.DeserializeObject(data, (typeof(DataTable)));

              ds.Tables["prueba"].Columns.Add();


              List<string> ArraycodigoCuentas = new List<string>();



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {

                  if (i != datasetCuenta.Rows.Count - 1)
                  {

                      ds.Tables["prueba"].Rows.Add();



                  }



                  string codigoCuentas = datasetCuenta.Rows[i].ItemArray[0].ToString();
                  ArraycodigoCuentas.Add(codigoCuentas);

                  if (codigoCuentas != null)
                  {

                      ds.Tables["Prueba"].Rows[i][0] = i + 1;
                      ds.Tables["Prueba"].Rows[i][1] = codigoCuentas;

                  }




              }

              ds.Tables["prueba"].Columns.Add();

              columnasData = columnasData + 1;



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {


                  string descripcionCuentas = datasetCuenta.Rows[i].ItemArray[1].ToString();

                  ds.Tables["Prueba"].Rows[i][2] = descripcionCuentas;

              }


              columnasData = columnasData + 1;

              for (int j = 0; j <= archivo.Rows.Count - 1; j++)
              {

                  string archivoParametro = archivo.Rows[j].ItemArray[0].ToString();
                  SqlCommand cmd = new SqlCommand("sp_amezquita_ObtenerInformacionCuenta", conn);
                  cmd.CommandType = CommandType.StoredProcedure;
                  cmd.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
                  cmd.Parameters.AddWithValue("@idarchivo", archivoParametro);
                  abrirConexion();
                  cmd.ExecuteReader();
                  cerrarConexion();

                  SqlDataAdapter da = new SqlDataAdapter(cmd);
                  da.Fill(dataset);

                  ds.Tables["prueba"].Columns.Add();

                  columnasData = columnasData + 1;
                  int pruebaS = dataset.Rows.Count;
                  string ValorCuentas = "";
                  string mesObtener = "";
                  string valorCuentas = "0";
                  for (int inicio = 0; inicio <= ArraycodigoCuentas.Count - 1; inicio++)
                  {

                      for (int aj = 0; aj <= dataset.Rows.Count - 1; aj++)
                      {

                          if (ArraycodigoCuentas[inicio] == dataset.Rows[aj].ItemArray[2].ToString())
                          {

                              valorCuentas = dataset.Rows[aj].ItemArray[0].ToString();
                              ValorCuentas = valorCuentas.ToString();
                              mesObtener = obtenerMesArchivoCargado(dataset.Rows[aj].ItemArray[1].ToString());

                          }

                      }

                      try
                      {

                          ds.Tables["Prueba"].Rows[inicio][columnasData] = ValorCuentas + "_" + mesObtener;
                          valorCuentas = "0";
                          ValorCuentas = "0";
                      }
                      catch (Exception)
                      {

                          throw;
                      }

                  }

                  dataset.Clear();


              }

              ds.Tables["prueba"].Columns[0].ColumnName = "IdColumna";
              ds.Tables["prueba"].Columns[1].ColumnName = "CodigoCuenta";
              ds.Tables["prueba"].Columns[2].ColumnName = "DescripcionCuenta";









              string datas = JsonConvert.SerializeObject(ds, Formatting.Indented);
              //  var dict = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(datas);

              return datas;

          }

          catch (Exception)
          {

              throw;
          }


      }

      public string varicionTrimestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerVariacionTrimestral", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);

          SqlCommand cmdCuenta = new SqlCommand("sp_amezquita_obtenerCuentas", conn);
          cmdCuenta.CommandType = CommandType.StoredProcedure;
          cmdCuenta.Parameters.AddWithValue("@idcentrocosto", idCentroCosto);

          int columnasData = 0;

          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();

              abrirConexion();
              cmdCuenta.ExecuteReader();
              cerrarConexion();

              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);
              SqlDataAdapter cuentas = new SqlDataAdapter(cmdCuenta);
              DataTable datasetCuenta = new DataTable();
              DataTable dataset = new DataTable();
              DataTable archivo = new DataTable();
              DataSet ds = new DataSet();
              DataSet dsRulst = new DataSet();
              dsRulst.Tables.Add("prueba");


              ds.Tables.Add("prueba");
              ds.Tables["prueba"].Rows.Add();
              ds.Tables["prueba"].Columns.Add();


              archivos.Fill(archivo);

              cuentas.Fill(datasetCuenta);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              DataTable tester = (DataTable)JsonConvert.DeserializeObject(data, (typeof(DataTable)));

              ds.Tables["prueba"].Columns.Add();


              List<string> ArraycodigoCuentas = new List<string>();



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {

                  if (i != datasetCuenta.Rows.Count - 1)
                  {

                      ds.Tables["prueba"].Rows.Add();



                  }



                  string codigoCuentas = datasetCuenta.Rows[i].ItemArray[0].ToString();
                  ArraycodigoCuentas.Add(codigoCuentas);

                  if (codigoCuentas != null)
                  {

                      ds.Tables["Prueba"].Rows[i][0] = i + 1;
                      ds.Tables["Prueba"].Rows[i][1] = codigoCuentas;

                  }




              }

              ds.Tables["prueba"].Columns.Add();

              columnasData = columnasData + 1;



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {


                  string descripcionCuentas = datasetCuenta.Rows[i].ItemArray[1].ToString();

                  ds.Tables["Prueba"].Rows[i][2] = descripcionCuentas;

              }


              columnasData = columnasData + 1;

              for (int j = 0; j <= archivo.Rows.Count - 1; j++)
              {

                  string archivoParametro = archivo.Rows[j].ItemArray[0].ToString();
                  SqlCommand cmd = new SqlCommand("sp_amezquita_ObtenerInformacionCuenta", conn);
                  cmd.CommandType = CommandType.StoredProcedure;
                  cmd.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
                  cmd.Parameters.AddWithValue("@idarchivo", archivoParametro);
                  abrirConexion();
                  cmd.ExecuteReader();
                  cerrarConexion();

                  SqlDataAdapter da = new SqlDataAdapter(cmd);
                  da.Fill(dataset);

                  ds.Tables["prueba"].Columns.Add();

                  columnasData = columnasData + 1;
                  int pruebaS = dataset.Rows.Count;
                  string ValorCuentas = "";
                  string mesObtener = "";
                  string valorCuentas = "0";
                  for (int inicio = 0; inicio <= ArraycodigoCuentas.Count - 1; inicio++)
                  {

                      for (int aj = 0; aj <= dataset.Rows.Count - 1; aj++)
                      {

                          if (ArraycodigoCuentas[inicio] == dataset.Rows[aj].ItemArray[2].ToString())
                          {

                              valorCuentas = dataset.Rows[aj].ItemArray[0].ToString();
                              ValorCuentas = valorCuentas.ToString();
                              mesObtener = obtenerMesArchivoCargado(dataset.Rows[aj].ItemArray[1].ToString());

                          }

                      }

                      try
                      {

                          ds.Tables["Prueba"].Rows[inicio][columnasData] = ValorCuentas + "_" + mesObtener;
                          valorCuentas = "0";
                          ValorCuentas = "0";
                      }
                      catch (Exception)
                      {

                          throw;
                      }

                  }

                  dataset.Clear();


              }

              ds.Tables["prueba"].Columns[0].ColumnName = "IdColumna";
              ds.Tables["prueba"].Columns[1].ColumnName = "CodigoCuenta";
              ds.Tables["prueba"].Columns[2].ColumnName = "DescripcionCuenta";









              string datas = JsonConvert.SerializeObject(ds, Formatting.Indented);
              //  var dict = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(datas);

              return datas;

          }

          catch (Exception)
          {

              throw;
          }


      }

     
      public string varicionSemestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerVariacionSemestral", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);

          SqlCommand cmdCuenta = new SqlCommand("sp_amezquita_obtenerCuentas", conn);
          cmdCuenta.CommandType = CommandType.StoredProcedure;
          cmdCuenta.Parameters.AddWithValue("@idcentrocosto", idCentroCosto);

          int columnasData = 0;

          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();

              abrirConexion();
              cmdCuenta.ExecuteReader();
              cerrarConexion();

              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);
              SqlDataAdapter cuentas = new SqlDataAdapter(cmdCuenta);
              DataTable datasetCuenta = new DataTable();
              DataTable dataset = new DataTable();
              DataTable archivo = new DataTable();
              DataSet ds = new DataSet();
              DataSet dsRulst = new DataSet();
              dsRulst.Tables.Add("prueba");


              ds.Tables.Add("prueba");
              ds.Tables["prueba"].Rows.Add();
              ds.Tables["prueba"].Columns.Add();


              archivos.Fill(archivo);

              cuentas.Fill(datasetCuenta);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              DataTable tester = (DataTable)JsonConvert.DeserializeObject(data, (typeof(DataTable)));

              ds.Tables["prueba"].Columns.Add();


              List<string> ArraycodigoCuentas = new List<string>();



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {

                  if (i != datasetCuenta.Rows.Count - 1)
                  {

                      ds.Tables["prueba"].Rows.Add();



                  }



                  string codigoCuentas = datasetCuenta.Rows[i].ItemArray[0].ToString();
                  ArraycodigoCuentas.Add(codigoCuentas);

                  if (codigoCuentas != null)
                  {

                      ds.Tables["Prueba"].Rows[i][0] = i + 1;
                      ds.Tables["Prueba"].Rows[i][1] = codigoCuentas;

                  }




              }

              ds.Tables["prueba"].Columns.Add();

              columnasData = columnasData + 1;



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {


                  string descripcionCuentas = datasetCuenta.Rows[i].ItemArray[1].ToString();

                  ds.Tables["Prueba"].Rows[i][2] = descripcionCuentas;

              }


              columnasData = columnasData + 1;

              for (int j = 0; j <= archivo.Rows.Count - 1; j++)
              {

                  string archivoParametro = archivo.Rows[j].ItemArray[0].ToString();
                  SqlCommand cmd = new SqlCommand("sp_amezquita_ObtenerInformacionCuenta", conn);
                  cmd.CommandType = CommandType.StoredProcedure;
                  cmd.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
                  cmd.Parameters.AddWithValue("@idarchivo", archivoParametro);
                  abrirConexion();
                  cmd.ExecuteReader();
                  cerrarConexion();

                  SqlDataAdapter da = new SqlDataAdapter(cmd);
                  da.Fill(dataset);

                  ds.Tables["prueba"].Columns.Add();

                  columnasData = columnasData + 1;
                  int pruebaS = dataset.Rows.Count;
                  string ValorCuentas = "";
                  string mesObtener = "";
                  string valorCuentas = "0";
                  for (int inicio = 0; inicio <= ArraycodigoCuentas.Count - 1; inicio++)
                  {

                      for (int aj = 0; aj <= dataset.Rows.Count - 1; aj++)
                      {

                          if (ArraycodigoCuentas[inicio] == dataset.Rows[aj].ItemArray[2].ToString())
                          {

                              valorCuentas = dataset.Rows[aj].ItemArray[0].ToString();
                              ValorCuentas = valorCuentas.ToString();
                              mesObtener = obtenerMesArchivoCargado(dataset.Rows[aj].ItemArray[1].ToString());

                          }

                      }

                      try
                      {

                          ds.Tables["Prueba"].Rows[inicio][columnasData] = ValorCuentas + "_" + mesObtener;
                          valorCuentas = "0";
                          ValorCuentas = "0";
                      }
                      catch (Exception)
                      {

                          throw;
                      }

                  }

                  dataset.Clear();


              }

              ds.Tables["prueba"].Columns[0].ColumnName = "IdColumna";
              ds.Tables["prueba"].Columns[1].ColumnName = "CodigoCuenta";
              ds.Tables["prueba"].Columns[2].ColumnName = "DescripcionCuenta";









              string datas = JsonConvert.SerializeObject(ds, Formatting.Indented);
              //  var dict = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(datas);

              return datas;

          }

          catch (Exception)
          {

              throw;
          }


      }

      public string varicionAnual(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerVariacionAnual", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);

          SqlCommand cmdCuenta = new SqlCommand("sp_amezquita_obtenerCuentas", conn);
          cmdCuenta.CommandType = CommandType.StoredProcedure;
          cmdCuenta.Parameters.AddWithValue("@idcentrocosto", idCentroCosto);

          int columnasData = 0;

          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();

              abrirConexion();
              cmdCuenta.ExecuteReader();
              cerrarConexion();

              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);
              SqlDataAdapter cuentas = new SqlDataAdapter(cmdCuenta);
              DataTable datasetCuenta = new DataTable();
              DataTable dataset = new DataTable();
              DataTable archivo = new DataTable();
              DataSet ds = new DataSet();
              DataSet dsRulst = new DataSet();
              dsRulst.Tables.Add("prueba");


              ds.Tables.Add("prueba");
              ds.Tables["prueba"].Rows.Add();
              ds.Tables["prueba"].Columns.Add();


              archivos.Fill(archivo);

              cuentas.Fill(datasetCuenta);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              DataTable tester = (DataTable)JsonConvert.DeserializeObject(data, (typeof(DataTable)));

              ds.Tables["prueba"].Columns.Add();


              List<string> ArraycodigoCuentas = new List<string>();



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {

                  if (i != datasetCuenta.Rows.Count - 1)
                  {

                      ds.Tables["prueba"].Rows.Add();



                  }



                  string codigoCuentas = datasetCuenta.Rows[i].ItemArray[0].ToString();
                  ArraycodigoCuentas.Add(codigoCuentas);

                  if (codigoCuentas != null)
                  {

                      ds.Tables["Prueba"].Rows[i][0] = i + 1;
                      ds.Tables["Prueba"].Rows[i][1] = codigoCuentas;

                  }




              }

              ds.Tables["prueba"].Columns.Add();

              columnasData = columnasData + 1;



              for (int i = 0; i <= datasetCuenta.Rows.Count - 1; i++)
              {


                  string descripcionCuentas = datasetCuenta.Rows[i].ItemArray[1].ToString();

                  ds.Tables["Prueba"].Rows[i][2] = descripcionCuentas;

              }


              columnasData = columnasData + 1;

              for (int j = 0; j <= archivo.Rows.Count - 1; j++)
              {

                  string archivoParametro = archivo.Rows[j].ItemArray[0].ToString();
                  SqlCommand cmd = new SqlCommand("sp_amezquita_ObtenerInformacionCuenta", conn);
                  cmd.CommandType = CommandType.StoredProcedure;
                  cmd.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
                  cmd.Parameters.AddWithValue("@idarchivo", archivoParametro);
                  abrirConexion();
                  cmd.ExecuteReader();
                  cerrarConexion();

                  SqlDataAdapter da = new SqlDataAdapter(cmd);
                  da.Fill(dataset);

                  ds.Tables["prueba"].Columns.Add();

                  columnasData = columnasData + 1;
                  int pruebaS = dataset.Rows.Count;
                  string ValorCuentas = "";
                  string mesObtener = "";
                  string valorCuentas = "0";
                  for (int inicio = 0; inicio <= ArraycodigoCuentas.Count - 1; inicio++)
                  {

                      for (int aj = 0; aj <= dataset.Rows.Count - 1; aj++)
                      {

                          if (ArraycodigoCuentas[inicio] == dataset.Rows[aj].ItemArray[2].ToString())
                          {

                              valorCuentas = dataset.Rows[aj].ItemArray[0].ToString();
                              ValorCuentas = valorCuentas.ToString();
                              mesObtener = obtenerMesArchivoCargado(dataset.Rows[aj].ItemArray[1].ToString());

                          }

                      }

                      try
                      {

                          ds.Tables["Prueba"].Rows[inicio][columnasData] = ValorCuentas + "_" + mesObtener;
                          valorCuentas = "0";
                          ValorCuentas = "0";
                      }
                      catch (Exception)
                      {

                          throw;
                      }

                  }

                  dataset.Clear();


              }

              ds.Tables["prueba"].Columns[0].ColumnName = "IdColumna";
              ds.Tables["prueba"].Columns[1].ColumnName = "CodigoCuenta";
              ds.Tables["prueba"].Columns[2].ColumnName = "DescripcionCuenta";









              string datas = JsonConvert.SerializeObject(ds, Formatting.Indented);
              //  var dict = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(datas);

              return datas;

          }

          catch (Exception)
          {

              throw;
          }


      }

      public string obtenerMesTrimestrales(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerFechaTrimestral", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);


          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();



              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);


              DataTable archivo = new DataTable();

              List<string> ListaMeses = new List<string>();


              archivos.Fill(archivo);
              string prueba = "";
              for (int i = 0; i <= archivo.Rows.Count - 1; i++)
              {

                  prueba = obtenerFormatoFechas(archivo.Rows[i].ItemArray[0].ToString());
                  ListaMeses.Add(prueba);


              }


              string datas = JsonConvert.SerializeObject(ListaMeses, Formatting.Indented);
              return datas;


          }

          catch (Exception)
          {

              throw;
          }


      }

      public string obtenerMesSemestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerFechaSemestral", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);


          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();



              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);


              DataTable archivo = new DataTable();

              List<string> ListaMeses = new List<string>();


              archivos.Fill(archivo);
              string prueba = "";
              for (int i = 0; i <= archivo.Rows.Count - 1; i++)
              {

                  prueba = obtenerFormatoFechas(archivo.Rows[i].ItemArray[0].ToString());
                  ListaMeses.Add(prueba);


              }


              string datas = JsonConvert.SerializeObject(ListaMeses, Formatting.Indented);
              return datas;


          }

          catch (Exception)
          {

              throw;
          }


      }

      public string obtenerMesAnual(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerFechaAnual", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);


          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();



              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);


              DataTable archivo = new DataTable();

              List<string> ListaMeses = new List<string>();


              archivos.Fill(archivo);
              string prueba = "";
              for (int i = 0; i <= archivo.Rows.Count - 1; i++)
              {

                  prueba = obtenerFormatoFechas(archivo.Rows[i].ItemArray[0].ToString());
                  ListaMeses.Add(prueba);


              }


              string datas = JsonConvert.SerializeObject(ListaMeses, Formatting.Indented);
              return datas;


          }

          catch (Exception)
          {

              throw;
          }


      }

      public string FechaArchivosVarianza(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerFechaArchivosVarianza", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);

  
          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();

             

              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);
             
             
              DataTable archivo = new DataTable();

              List<string> ListaMeses = new List<string>();


              archivos.Fill(archivo);
              string prueba = "";
              for (int i = 0; i <= archivo.Rows.Count - 1; i++) {

                  prueba = obtenerFormatoFechas(archivo.Rows[i].ItemArray[0].ToString());
                  ListaMeses.Add(prueba);
                   
              
              }


              string datas = JsonConvert.SerializeObject(ListaMeses, Formatting.Indented);
              return datas;

          
          }

          catch (Exception)
          {

              throw;
          }


      }

      public string FechaArchivosVarianzaTrimestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
      {

          SqlCommand cmdArchivos = new SqlCommand("sp_AmezquitaTraerFechaArchivosVarianzaTrimestral", conn);
          cmdArchivos.CommandType = CommandType.StoredProcedure;
          cmdArchivos.Parameters.AddWithValue("@idCliente", idClientes);
          cmdArchivos.Parameters.AddWithValue("@idCentroCosto", idCentroCosto);
          cmdArchivos.Parameters.AddWithValue("@fechaInicial", fechaInicialBusqueda);
          cmdArchivos.Parameters.AddWithValue("@fechaFinal", fechaFinalBusqueda);


          try
          {



              abrirConexion();
              cmdArchivos.ExecuteReader();
              cerrarConexion();



              SqlDataAdapter archivos = new SqlDataAdapter(cmdArchivos);


              DataTable archivo = new DataTable();

              List<string> ListaMeses = new List<string>();


              archivos.Fill(archivo);
              string prueba = "";
              for (int i = 0; i <= archivo.Rows.Count - 1; i++)
              {

                  prueba = obtenerFormatoFechas(archivo.Rows[i].ItemArray[0].ToString());
                  ListaMeses.Add(prueba);


              }


              string datas = JsonConvert.SerializeObject(ListaMeses, Formatting.Indented);
              return datas;


          }

          catch (Exception)
          {

              throw;
          }


      }

      public string remplazarValorPunatoXcoma(string valor) {

          string rSult = valor.Replace(",",".");
          return rSult;
      
      }

      public string AgregarAmezquita_MAIF_CentroCostos(int idCliente, string nombreGrupo, string nombreCentroCosto, string descripcionCentroCosto)
      {

          SqlCommand cmd = new SqlCommand("SP_Amezquita_AgregarAmezquita_MAIF_CentroCostos", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idCliente", idCliente);
          cmd.Parameters.AddWithValue("@grupoCentroCosto", nombreGrupo);
          cmd.Parameters.AddWithValue("@nombreCentroCosto", nombreCentroCosto);
          cmd.Parameters.AddWithValue("@descripcionCentroCosto", descripcionCentroCosto);

          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();
              string rSult = ObtenerId_Nombre_CentroCostoAgregado();
              return rSult;

          }
          catch (Exception)
          {

              throw;
          }





      }

      public string Amezquita_MAIF_Obtener_CentroCostos_Cliente(int idCliente, string nombreGrupo)
      {

          SqlCommand cmd = new SqlCommand("SP_Amezquita_MAIF_Obtener_CentroCostos_Cliente", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idCliente", idCliente);
          cmd.Parameters.AddWithValue("@grupoCentroCosto", nombreGrupo);


          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {

              throw;
          }





      }

      public string GuardarInformacionArchivo_idEstadoCreado(string fechaArchivo, int centroCosto, int idCliente)
      {

          SqlCommand cmd = new SqlCommand("SP_Amezquita_MAIF_GuardarInformacionArchivo_idEstadoCreado", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@fechaArchivo", fechaArchivo);
          cmd.Parameters.AddWithValue("@idCentroCosto", centroCosto);
          cmd.Parameters.AddWithValue("@idCliente", idCliente);


          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();
              string rSult = SP_Amezquita_MAIF_SeleccionarInformacionArchivo_idEstadoCreado();
              return rSult;

          }
          catch (Exception)
          {

              throw;
          }



      }
      
      public string ObtenerId_Nombre_CentroCostoAgregado()
      {

          SqlCommand cmd = new SqlCommand("SP_AMEZQUITA_ObtenerId_Nombre_CentroCostoAgregado", conn);
          cmd.CommandType = CommandType.StoredProcedure;



          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {

              throw;
          }



      }

      public string validarArchivoXfecha_centro_Costo(string fechaArchivo, int centroCosto, int idCliente)
      {
          string data = "";
          SqlCommand cmd = new SqlCommand("SP_Amezquita_MAIF_validarArchivoXfecha_centro_Costo", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@fechaArchivo", fechaArchivo);
          cmd.Parameters.AddWithValue("@idCentroCosto", centroCosto);
          cmd.Parameters.AddWithValue("@idCliente", idCliente);



          try
          {
              abrirConexion();
              SqlDataReader rdr = cmd.ExecuteReader();
              rdr.Read();
              data = rdr["idArchivo"].ToString();
              cerrarConexion();
              return data;

          }
          catch (Exception)
          {

              throw;
          }



      }

      public string SP_Amezquita_MAIF_SeleccionarInformacionArchivo_idEstadoCreado()
      {

          SqlCommand cmd = new SqlCommand("SP_Amezquita_MAIF_SeleccionarInformacionArchivo_idEstadoCreado", conn);
          cmd.CommandType = CommandType.StoredProcedure;

          string data = "";


          try
          {
              abrirConexion();
              SqlDataReader rdr = cmd.ExecuteReader();
              rdr.Read();
              data = rdr["IdArchivo"].ToString();
              cerrarConexion();
              return data;

          }
          catch (Exception)
          {

              throw;
          }



      }

      public string obtenerMesArchivoCargado(string data) {

          DateTime fechaObtener = Convert.ToDateTime(data);
          string result = fechaObtener.Month.ToString();
          return result;
            
      
      }

      public string obtenerFormatoFechas(string data) {

          DateTime fecha = Convert.ToDateTime(data);
          int mes = Convert.ToInt32(fecha.Month);
          string rsultMes = "";
          string ano = fecha.Year.ToString();

          switch (mes) { 
          
              case 1:

                  rsultMes = "Ene-";

              break;
              case 2:

              rsultMes = "Feb-";

              break;
              case 3:

              rsultMes = "Mar-";

              break;
              case 4:

              rsultMes = "Abr-";

              break;
              case 5:

              rsultMes = "May-";

              break;
              case 6:

              rsultMes = "Jun-";

              break;
              case 7:

              rsultMes = "Jul-";

              break;
              case 8:

              rsultMes = "Ago-";

              break;
              case 9:

              rsultMes = "Sep-";

              break;
              case 10:

              rsultMes = "Oct-";

              break;
              case 11:

              rsultMes = "Nov-";

              break;
              case 12:

              rsultMes = "Dic-";

              break;
              default:

              rsultMes = "Error";

              break;
                 
             

          
          }

          string rSult = rsultMes + ano +"_"+mes;

          return rSult;


      
      }

      public bool registrarcuentaNoRegistrada(int cuenta, string nombreCuenta, int idcliente, int centroCosto) {

          SqlCommand cmd = new SqlCommand("SP_AMEZQUITA_registrarcuentaNoRegistrada", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@Cuenta",cuenta);
          cmd.Parameters.AddWithValue("@nombreCuenta",nombreCuenta);
          cmd.Parameters.AddWithValue("@IdCliente",idcliente);
          cmd.Parameters.AddWithValue("@centroCosto",centroCosto);

          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();

              return true;

          }
          catch (Exception ex)
          {
              
              throw new Exception("Problemas al agregar la cuenta",ex);
             
          }

      
      
      }

      public string TraerInformacionArchivoEcuaciones(string  fechaInicial , string fechaFinal , int IdCentroCosto)
      {

          SqlCommand cmd = new SqlCommand("SP_AMEZQUITA_MAIF_TraerInformacionArchivoEcuaciones", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@IdCentroCosto", IdCentroCosto);
          cmd.Parameters.AddWithValue("@fechaInicial", fechaInicial);
          cmd.Parameters.AddWithValue("@fechaFinal", fechaFinal);
          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {

              throw;
          }


      }

      public bool GuardarEcuacion(int idCliente, int centroCosto, string ecuacion, string descripcionEcuacion, string query)
      {

          SqlCommand cmd = new SqlCommand("sp_amezquita_GuardarEcuacion", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idCliente", idCliente);
          cmd.Parameters.AddWithValue("@idCentroCosto", centroCosto);
          cmd.Parameters.AddWithValue("@ecuacion", ecuacion);
          cmd.Parameters.AddWithValue("@descripcionEcuacion", descripcionEcuacion);
          cmd.Parameters.AddWithValue("@query", query);


          try
          {
              abrirConexion();
              cmd.ExecuteNonQuery();
              cerrarConexion();

              return true;

          }
          catch (Exception ex)
          {

              throw new Exception("Problemas al agregar la cuenta", ex);

          }
        
      
      }
      
      public string BuscarIdArchivoxCentroCosto_Fecha(int idCliente , int centroCosto , string fechaInicio , string fechaFinal){

          SqlCommand cmd = new SqlCommand("SP_Amezquita_BuscarIdArchivoxCentroCosto_Feche", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idCliente", idCliente);
          cmd.Parameters.AddWithValue("@centroCosto", centroCosto);
          cmd.Parameters.AddWithValue("@fechaInicio", fechaInicio);
          cmd.Parameters.AddWithValue("@fechaFinal", fechaFinal);


          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {

              throw;
          }
      
      }
   
      public string TraerInformacionEcuacionXIdCliente(int idCliente){

          SqlCommand cmd = new SqlCommand("sp_amezquita_TraerInformacionEcuacionXIdCliente", conn);
          cmd.CommandType = CommandType.StoredProcedure;
          cmd.Parameters.AddWithValue("@idCliente", idCliente);
         


          try
          {
              abrirConexion();
              cmd.ExecuteReader();
              cerrarConexion();
              SqlDataAdapter da = new SqlDataAdapter(cmd);
              DataTable dataset = new DataTable();
              da.Fill(dataset);
              string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
              return data;

          }
          catch (Exception)
          {

              throw;
          }
      
      }
      
      public string Amezquita_ListadoGraficaPIE(int IdArchivo)
          {

              SqlCommand cmd = new SqlCommand("SP_Amezquita_ListadoGraficaPIE", conn);
              cmd.CommandType = CommandType.StoredProcedure;
              cmd.Parameters.AddWithValue("@IdArchivo", IdArchivo);

              try
              {
                  abrirConexion();
                  cmd.ExecuteReader();
                  cerrarConexion();
                  SqlDataAdapter da = new SqlDataAdapter(cmd);
                  DataTable dataset = new DataTable();
                  da.Fill(dataset);
                  string data = JsonConvert.SerializeObject(dataset, Formatting.Indented);
                  return data;

              }
              catch (Exception)
              {

                  throw;
              }

          }

      public string resolverEcuacion(string query) {

          SqlConnection sql = new SqlConnection(ConfigurationManager.ConnectionStrings["WSS_Content_SintegConnectionString"].ConnectionString);
          SqlCommand cmd = new SqlCommand();
          SqlDataReader reader;

          cmd.CommandText = query;
          cmd.CommandType = CommandType.Text;
          cmd.Connection = sql;

       
          

          try
          {

              sql.Open();
              reader = cmd.ExecuteReader();
              reader.Read();


              string Rsult = reader["rSult"].ToString();

            

              sql.Close();

             
              return Rsult;

          }
          catch (Exception e)
          {
              
            

              return "Problemas con la ecuacion";
          }

      
      
      }

    }
}
