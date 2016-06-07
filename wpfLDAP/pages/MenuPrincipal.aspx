<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MenuPrincipal.aspx.cs" Inherits="wpfLDAP.MenuPrincipal" %>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
     <!-- Jquery min js -->
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

    <link href="../jqueryIntroLoader/introLoader.min.css" rel="stylesheet" />
    <script src="../jqueryIntroLoader/jquery.introLoader.pack.min.js"></script>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

 

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script src="../js/IntroLoader.js"></script>  
    <script>

           $(document).ready(function () {

               animacion();

               var Variaciones = $("#Variaciones");
               Variaciones.click(
                  function () {
                      window.location.href = "Variaciones.aspx";
                  }

                  );



               var Usuario = $("#CargarArchivo");
               Usuario.click(
                   function () {
                       window.location.href = "InformacionValidacionSubirArchivo.aspx";
                   }

                   );



               var busqueda = $("#EliminarArchivo");
               busqueda.click(
                   function () {
                       window.location.href = "TablaClientesEliminarInformacion.aspx";
                   }

                   );

               var mapa = $("#CargarPlanUnicoCuentas");
               mapa.click(
                   function () {
                       window.location.href = "ValidarSubirPlanUnicoCuenta.aspx";
                   }

                   );


               var Graficas = $("#Graficas");
               Graficas.click(
                   function () {
                       window.location.href = "Graficas.aspx";
                   }

                   );




               var ecuaciones = $("#ecuaciones");
               ecuaciones.click(
                   function () {
                       window.location.href = "ValidarEcuacionesArchivo.aspx";
                   }

                   );


           })

      </script>
  

     
  </head>
  <body>
   <%-- <h1>Register User</h1>--%>
        <div id="element" class="introLoading"></div>
               
           <div class="col-md-3"></div>
            <div class="col-md-6">
                <div>
                  <footer><h5> <p class="text-right"> <asp:Label ID="label1" runat="server" Text="Username"/></p></h5></footer>
                  <h5> <p class="text-right"><asp:Label ID="DestruirSession"  runat="server"><a href="#">Cerra Session</a></asp:Label></p></h5>
                </div>   
                 <p><br/></p>
                 <div class="panel panel-default">
                    <div class="panel-body">
                    <div>       
               
                    <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">
                                           <i class="fa fa-files-o fa-5x"></i>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="CargarArchivo">
                                <div class="panel-footer">
                                    <span class="pull-center"> Cargar Archivo</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">                                          
                                            <i class="fa fa-floppy-o fa-5x"></i>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="CargarPlanUnicoCuentas">
                                <div class="panel-footer">
                                    <span class="pull-center">Cargar Cuentas</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>
                       <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">
                                            <i class="fa fa-trash-o fa-5x"></i>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="EliminarArchivo">
                                <div class="panel-footer">
                                    <span class="pull-center">Eliminar Archivo</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>
                    <br />
                    <br />                    
                    <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">                                         
                                            <i class="fa fa-bar-chart-o fa-fw fa-5x"></i> 
                                                                                  
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="Variaciones">
                                <div class="panel-footer">
                                    <span class="pull-center">Variaciones</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div> 
                       <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">                                         
                                            <i class="fa fa-edit fa-fw fa-fw fa-5x"></i> 
                                                                                  
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="ecuaciones">
                                <div class="panel-footer">
                                    <span class="pull-center">Ecuaciones</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>   
                       <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">                                         
                                            <i class="fa fa-line-chart fa-fw fa-fw fa-5x"></i> 
                                                                                  
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="Graficas">
                                <div class="panel-footer">
                                    <span class="pull-center">Graficas</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>                      

                    </div>
                    </div>
                  </div>

           
      
            
      
    
</html>

