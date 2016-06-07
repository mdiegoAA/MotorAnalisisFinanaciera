using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using Datos;



namespace Negocios
{
  public  class N_CuentaPUC
    {

      D_PlanUnicoCuentas objPlanUnicoCuentas = new D_PlanUnicoCuentas();

        public void guardarInformacion(DataTable informacionPUC , int valorId) {

            

            objPlanUnicoCuentas.guarInformacionPlanUnicoCuenta(informacionPUC,valorId);

        }
        public void guardarTipoArchivo(int idstring, string nombreTipoArchivo, string descripcionTipoArchivo)
        {

            objPlanUnicoCuentas.guardarTipoArchivo(idstring,nombreTipoArchivo,descripcionTipoArchivo);
        
        }

        public string cargartipoArchivoXcliente(int id) {

           return  objPlanUnicoCuentas.listadotipoArchivoXclientes(id);

        }

        public void guardarArchivoValidacion(DateTime fecha, int tipoArchivo, int idEstado, int idUsuario, int idCliente)
        {

             objPlanUnicoCuentas.guardarArchivoValidacion(fecha,tipoArchivo,idEstado,idUsuario,idCliente);
        
        }

        public string validarArchivoInformacionArchivo(string fecha, int idCentroCosto, int idEstado, int idUsuario, int idCliente) {

            return objPlanUnicoCuentas.validarArchivoInformacionArchivo(fecha,idCentroCosto,idEstado,idUsuario,idCliente);

        }

        public string guardarArchivoPrimeraVez(string fecha, int idCentroCosto, int idEstado, int idUsuario, int idCliente)
        {

            return objPlanUnicoCuentas.guardarArchivoPrimeraVez(fecha,idCentroCosto,idEstado,idUsuario,idCliente);        
        }

        public void EliminarInformacionIdCuenta(int idstring)
        {
             objPlanUnicoCuentas.EliminarInformacionIdCuenta(idstring);        
        }

       public string buscarArchivoFechas_Cliente_CentroCosto(string fechaInicial , string fechaFinal , int cliente , int centroCosto) 
        {
           return objPlanUnicoCuentas.buscarArchivoFechas_Cliente_CentroCosto(fechaInicial, fechaFinal, cliente, centroCosto);
        }

       public string BuscarInformacionId(int id)
       {
           return objPlanUnicoCuentas.BuscarInformacionId(id);
       }

       public bool AgregarPlanUnicoCuentaXcentroCosto(DataTable planUnicoCuentas, int idCliente, int centroCosto) {

         return  objPlanUnicoCuentas.AgregarPlanUnicoCuentaXcentroCosto(planUnicoCuentas,idCliente,centroCosto);
       }

       public string NombreCuentaXcuenta(Int64 cuenta, int idCliente, int idCentroCosto)
       {

            return objPlanUnicoCuentas.NombreCuentaXcuenta(cuenta, idCliente, idCentroCosto);       
       }

        public bool RegistoCuentasXclienteNoregistradas(int cliente, int centroCosto, int cuenta, string nombreCuenta) {

            return objPlanUnicoCuentas.RegistoCuentasXclienteNoregistradas(cliente,centroCosto,cuenta,nombreCuenta);
        }

        public string informacion(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes,int  idCentroCosto , string RangoCuentaInicial , string RangoCuentaFinal ) {



            return objPlanUnicoCuentas.informacion(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);

        }

        public string informacionTrimestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {



            return objPlanUnicoCuentas.informacionTrimestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);

        }



        public string varicionTrimestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {
            return objPlanUnicoCuentas.varicionTrimestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);
        }

        public string varicionSemstral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {
            return objPlanUnicoCuentas.varicionSemestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);
        }

        public string varicionAnual(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto, string RangoCuentaInicial, string RangoCuentaFinal)
        {
            return objPlanUnicoCuentas.varicionAnual(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto, RangoCuentaInicial, RangoCuentaFinal);
        }


        public string varicionMesTrimestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
        {
            return objPlanUnicoCuentas.obtenerMesTrimestrales(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);
        }

        public string varicionMesSemestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
        {
            return objPlanUnicoCuentas.obtenerMesSemestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);
        }

        public string varicionMesAnual(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
        {
            return objPlanUnicoCuentas.obtenerMesAnual(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);
        }
      

        public string FechaArchivosVarianza(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
        {

            return objPlanUnicoCuentas.FechaArchivosVarianza(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);
        
        }
        public string FechaArchivosVarianzaTrimestral(string fechaInicialBusqueda, string fechaFinalBusqueda, int idClientes, int idCentroCosto)
        {

            return objPlanUnicoCuentas.FechaArchivosVarianzaTrimestral(fechaInicialBusqueda, fechaFinalBusqueda, idClientes, idCentroCosto);

        }

        public bool registrarcuentaNoRegistrada(int cuenta, string nombreCuenta, int idcliente, int centroCosto) {

            return objPlanUnicoCuentas.registrarcuentaNoRegistrada(cuenta,nombreCuenta,idcliente,centroCosto);
        
        }
        public string TraerInformacionArchivoEcuaciones(string fechaInicial, string fechaFinal, int IdCentroCosto) {

            return objPlanUnicoCuentas.TraerInformacionArchivoEcuaciones(fechaInicial,fechaFinal,IdCentroCosto);
        
        }
       
    }
}
