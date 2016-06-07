using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.DirectoryServices;
using Datos;
using Newtonsoft.Json;

namespace MotorAnalisisFianaciera_Amezquita
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        public D_Usuario Usuarios = new D_Usuario();

        protected void Page_Load(object sender, EventArgs e)
        {

            lblArchivo.Visible = false;


        }

        protected void Button1_Click(object sender, EventArgs e)
        {


           
            string path = @"LDAP://10.0.0.2";
            string dominio = @"aa.amezquita.com.co";
            string usuario = TextBox1.Text;
            string pass = TextBox2.Text;
            string domUsu = dominio + @"\" + usuario;
            string usuarioSinteg = @"AA\" + usuario;

            string idUsuario = Usuarios.obtenerIdUsuarioXidlogin(usuarioSinteg);

            if (idUsuario != "False")
            {

                lblArchivo.Visible = false;

                Session["IDCLIENTE"] = idUsuario;
                Response.Redirect("UnidadProyecto.aspx");

            }
            else {

                lblArchivo.Visible = true;
                
            
            }

 

        }


        private bool AutenticacionUsuario(string path, string user, string pass) {

            DirectoryEntry de = new DirectoryEntry(path,user,pass,AuthenticationTypes.Secure);
            try
            {
                DirectorySearcher ds = new DirectorySearcher(de);
                ds.FindOne();

                return true;
            }
            catch (Exception e)
            {

                return false;
            }
        
        }

    }
}