using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
 using System.DirectoryServices;

namespace Datos
{
    public class D_Autenticacion:D_Conexion
    {
        public bool AutenticacionUsuario(string userInfo , string pass) {

            string path = @"LDAP://10.0.0.2";
            string dominio = @"aa.amezquita.com.co";
            string domUsu = dominio + @"\" + userInfo;

            bool autenticacion = AutenticacionUsuarioDirectorioActivo(path, domUsu, pass);

            if (autenticacion)
            {
                return true;

            }
            else {

                return false;
            }
        
        
        }
       
        private bool AutenticacionUsuarioDirectorioActivo(string path, string user, string pass)
        {

            DirectoryEntry de = new DirectoryEntry(path, user, pass, AuthenticationTypes.Secure);
            try
            {
                DirectorySearcher ds = new DirectorySearcher(de);
                ds.FindOne();

                return true;
            }
            catch (Exception e)
            {

                throw new Exception("", e);
            }

        }

    }
}
