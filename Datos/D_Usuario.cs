using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Newtonsoft.Json;

namespace Datos
{
  public   class D_Usuario:D_Conexion
    {


        public string obtenerIdUsuarioXidlogin(string login) {
            string data = "";

            SqlCommand cmd = new SqlCommand("SP_AmezquitaTraer_tp_IDX_tp_Login", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@tp_Login",login);
            try
            {
                abrirConexion();
                SqlDataReader rdr = cmd.ExecuteReader();
                rdr.Read();

                if (rdr["tp_ID"] != null)
                {

                    data = rdr["tp_ID"].ToString();

                }
                else {

                    data = "FALSE";
                    
                
                }

               
                cerrarConexion();
                return data;

            }
            catch (Exception)
            {

                return "False";
            }

        
        }

        public string ObtenerNombreUusarioXid(int idlogin)
        {
            string data = "";

            SqlCommand cmd = new SqlCommand("SP_Amezquita_ObtenerNombreUusarioXid", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@usuario", idlogin);
            try
            {
                abrirConexion();
                SqlDataReader rdr = cmd.ExecuteReader();
                rdr.Read();
                data = rdr["nombreUsuario"].ToString();
                cerrarConexion();
                return data;

            }
            catch (Exception)
            {

                throw;
            }




        }

        public string ObtenerGruposUsuarioXID(int id) {

            SqlCommand cmd = new SqlCommand("SP_Amezquita_ObtenerGruposUsuarioXID",conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@IdUsuario",id);
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




        public string obtenerClientesXgrupo(string grupo)
        {
                                           
            SqlCommand cmd = new SqlCommand("SP_Amezquita_obtenerClientesXgrupo", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Name_Grupo", grupo);
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


        public string Traer_Nombre_Proyecto_añoXid_Grupo(int id, string grupo)
        {
            SqlCommand cmd = new SqlCommand("sp_AmezquitaTraer_Nombre_Proyecto_añoXid_Grupo", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@id", id);
            cmd.Parameters.AddWithValue("@grupo", grupo);

            string CLIENTE = "";
            string NOMBREPROYECTO = "";
            string AÑO = "";
            string rSult = "";
            
            try
            {
                abrirConexion();
                SqlDataReader rdr = cmd.ExecuteReader();
                rdr.Read();
                CLIENTE = rdr["CLIENTE"].ToString();
                NOMBREPROYECTO = rdr["NOMBREPROYECTO"].ToString();

               


                AÑO = rdr["AÑO"].ToString();
             
                cerrarConexion();

                rSult = CLIENTE + " - " + NOMBREPROYECTO + " - " + AÑO;


                return rSult;
              
            }
            catch (Exception)
            {

                throw;
            }
        
            
        
        }

    }
}
