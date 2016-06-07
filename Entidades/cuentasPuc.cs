using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
   public  class cuentasPuc
   {
       #region atributos
       public int numCuenta;
       public string cuenta;
       public string valorCuenta;
       public string estadoValorCuenta;
       public string nombreCuenta;

      

       #endregion

       #region constructor

       public cuentasPuc() {

           numCuenta = 0;
           cuenta = string.Empty;
           valorCuenta = string.Empty;
           estadoValorCuenta = string.Empty;
           nombreCuenta = string.Empty;


       }

       #endregion


      

    }
}
