<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Ecuaciones.aspx.cs" Inherits="wpfLDAP.pages.Ecuaciones" %>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Cargar Archivo</title>

    <!-- Bootstrap Core CSS -->

 
    <link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css">
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
      
    <link href="../jqueryIntroLoader/introLoader.min.css" rel="stylesheet" />

    <script src="../jqueryIntroLoader/jquery.introLoader.pack.min.js"></script>
   
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>  
     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.2.61/jspdf.debug.js"></script>

    <script src="../dist/js/sb-admin-2.js"></script>  
    <script src="../js/IntroLoader.js"></script>
    
    <script src="../js/Ecuaciones.js"></script>

      
    <style type="text/css">

        th {            
            text-align: center;        
            }
    </style>
    <script>
        var query = [];
        var descripcionQuery = [];
        var RsultQuery = [];
        $(document).ready(function () {
           
            var btnPdf = $("#btnPdf");
            btnPdf.click(function () {
               
                demoFromHTML();

            });

        });

    </script>

</head>

<body>
      <div id="element" class="introLoading"></div>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
               <div>
                    <a class="navbar-brand" href="MenuPrincipal.aspx">
                        <img src="../img/logo-amezquita.png" alt="59px" width="157px" /></a>
                </div>
              
            </div>
              <br />
              <br />
           
             

            <!-- /.navbar-header -->
            <ul class="nav navbar-top-links navbar-right">
           
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i><asp:Label ID="LblUsuario" runat="server"></asp:Label></a>
                        </li>                        
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">                      
                        <li>
                                <a href="#"><i class="fa fa-file fa-fw"></i>Archivo<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="TablaClientes.aspx">Cargar Informacion de Archivo</a>
                                    </li>
                                    <li>
                                        <a href="morris.html">Eliminar Informacion Archivo</a>
                                    </li>
                                </ul>
                                <!-- /.nav-second-level -->
                        </li>
                         <li>
                                <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i>Variaciones<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="flot.html">Generar Variaciones</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                        </li>                       
                        <li>
                                <a href="#"><i class="fa fa-sort-numeric-asc fa-fw"></i>Sumarias<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="flot.html">Sumaria General</a>
                                    </li>
                                    <li>
                                        <a href="flot.html">Sumaria de Area</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                        </li>
                        <li>
                                <a href="#"><i class="fa fa-edit fa-fw"></i>Ecuaciones<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="flot.html">Ecuaciones Predefinidas</a>
                                    </li>
                                    <li>
                                        <a href="flot.html">Crear Ecuaciones</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                        </li>
                        <li>
                                <a href="#"><i class="fa fa-wrench fa-fw"></i>General<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="panels-wells.html">Indices</a>
                                    </li>
                                    <li>
                                        <a href="buttons.html">Alertas</a>
                                    </li>
                                    <li>
                                        <a href="notifications.html">Graficas</a>
                                    </li>
                                </ul>
                                <!-- /.nav-second-level -->
                        </li>
                        <li>
                                <a href="#"><i class="fa fa-sitemap fa-fw"></i>Administracioaacuten<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="#">Clientes</a>
                                    </li>
                                    <li>
                                        <a href="#">Usuarios</a>
                                    </li>
                                    <li>
                                        <a href="#">Perfiles y Permisos</a>
                                    </li>
                                    <li>
                                        <a href="#">PUCs Oficiales</a>
                                    </li>
                                    <li>
                                        <a href="#">Similitud entre PUCs</a>
                                    </li>
                                    <li>
                                        <a href="#">Gestion de nombres - Codigos PUCs</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                      
                    </div>

                      <div class="row">
                  <div class="col-lg-12">
                      <div class="panel-body">
                          <div>
                                 <h3 class="page-header" style="color: #4a7193">Panel Ecuaciones</h3>
                          </div>
                       
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" style="font-size:x-small">
                                    <thead>
                                        <tr>
                                            <th style="color: #4a7193 ; font-size:20px">Escriba la Ecuacion </th> 
                                            
                                        </tr>
                                       
                                    </thead>
                                    <tbody>
                                        <tr>  
                                             <td>
                                                   <div class="form-group input-group">
                                                        <input type="text" id="textEcuacion" class="form-control" style="height:42px" placeholder="Ejemplo:(a+b)-c">
                                                        <span class="input-group-btn" >
                                                           <button  class="btn btn-default" type="button" id="modalEcuacionBtn"><i class="fa fa-pencil fa-2x"></i></button>
                                                          <button  class="btn btn-default" type="button" id="BorrarEcuacion"><i class="fa fa-eraser fa-2x" ></i></button>
                                                          <button  class="btn btn-default" id="BuscarEcuacion"  type="button"><i class="fa fa fa-search fa-2x" ></i></button>
                                                        </span>
                                                    </div>
                                             </td>                            
                                       </tr>
                                    </tbody>
                                 </table>
                    <!-- /.panel -->
                              </div>
                <!-- /.col-lg-12 -->
                     </div>  
                      
                      <div id="panelEcuacionEscrita" style="display:none">
                              <div class="panel-body">   
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" style="font-size:x-small">
                                    <thead>
                                        <tr>
                                            <th style="color: #4a7193 ; font-size:20px">Ecuacion</th> 
                                            
                                        </tr>
                                       
                                    </thead>
                                    <tbody>
                                        <tr>  
                                             <td>
                                                   <div class="form-group input-group">
                                                        <input type="text" id="EcuacionEscrita" class="form-control" style="height:42px" placeholder="Ejemplo:(a+b)-c">
                                                        <span class="input-group-btn" >
                                                           
                                                           <button  class="btn btn-default" id="ResolverEcuacion" type="button"><i class="fa fa-pencil-square-o fa-2x" ></i></button>
                                                           <button  class="btn btn-default" id="btnguardarEcuacion"  type="button"><i class="fa fa-floppy-o fa-2x" ></i></button>
                                                       
                                                          
                                                        </span>
                                                    </div>
                                             </td>                            
                                       </tr>
                                    </tbody>
                                 </table>
                    <!-- /.panel -->
                              </div>
                <!-- /.col-lg-12 -->
                     </div>   

                      </div>
                       
                    
                        <div class="panel-body">
                         
                       
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" style="font-size:x-small">
                                    <thead>
                                      
                                    </thead>
                                    <tbody>
                                       <tr>
                                            <th>Cuenta A</th>
                                            <th>Cuenta B</th>
                                            <th>Cuenta C</th>
                                            <th>Cuenta D</th>
                                        </tr>
                                        <tr>
                                            <td><input type="text" class="form-control" id="variableA" placeholder="100000"></td>
                                            <td><input type="text" class="form-control" id="variableB" placeholder="200000"></td>
                                             <td><input type="text" class="form-control" id="variableC" placeholder="300000"></td>
                                             <td><input type="text" class="form-control" id="variableD" placeholder="400000"></td>
                                        </tr>
                                         <tr>
                                            <th>Cuenta w</th>
                                            <th>Cuenta x</th>
                                            <th>Cuenta y</th>
                                            <th>Cuenta z</th>
                                        </tr>
                                        <tr>
                                            <td><input type="text" class="form-control" id="variableW" placeholder="500000"></td>
                                            <td><input type="text" class="form-control" id="variableX" placeholder="600000"></td>
                                             <td><input type="text" class="form-control" id="variableY" placeholder="700000"></td>
                                             <td><input type="text" class="form-control" id="variableZ" placeholder="800000"></td>
                                        </tr>
                                    </tbody>
                                 </table>
                    <!-- /.panel -->
                              </div>
                <!-- /.col-lg-12 -->
                     </div>               
                    
        
                  </div>
                  </div>
                      
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalEcuacion" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Ecuacion</h4>
              </div>
              <div class="modal-body">
                <div id="TextEcuacion">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
            
        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" id="modalEcuaciones">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Eliminar Ecuacion</h4>
              </div>
              <div class="modal-body">
                <p>Desea Borrar la Ecuacion</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                <button type="button" id ="btnlimpiarEcuacion" class="btn btn-primary">Aceptar</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">Guardar Ecuacion</h4>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="control-label">Ecuacion:</label>
                    <input type="text" class="form-control" id="EcuacionGuardar" disabled>
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="control-label">Descripcion:</label>
                    <textarea class="form-control" id="descripcion"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="btnGuardarEcuaciones" class="btn btn-primary">Guardar Ecuacion</button>
              </div>
            </div>
          </div>
        </div>

                        <!-- /.panel-body -->

        <div class="modal fade bs-example-modal-lg" id="modalTraerEcuaciones" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Mi Ecuaciones</h4>
              </div>
              <div class="modal-body">
                   <div id="customers">
                   <table class="table table-striped table-bordered table-hover" style=" font-size: x-small ; text-align:center">
                        <thead>
                            <tr>
                                <td>Ecuacion</td>
                                <td>Descripcion Cuenta</td>
                                 <td colspan="2">Opciones</td>
                                  <td>Resultado</td>
                            </tr>
                        </thead>
                        <tbody id="MisEcuaciones">



                        </tbody>
                    </table>
                    </div>                   
       <div style="display:none">
             <div id="customerss" >
                    <table id="tab_customers" class="table table-striped" style="font-size:x-small">
                        
                        <thead>
                            <tr>
                                <th>Ecuacion</th>
                                <th>Nombre Ecuacion </th>
                                <th>Resultado</th>                              
                            </tr>
                        </thead>
                        <tbody id="bodyreportEcuaciones">                            
                      
                        </tbody>
                    </table>
                </div>
       </div>
               
                 
                      <button id="btnPdf">PDF</button>
                  </div>


              
             
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          ...
        </div>
      </div>
    </div>

                   
    <!-- /#wrapper -->

    <!-- jQuery -->


    <!-- Bootstrap Core JavaScript -->
  

</body>

    
       <script type="text/javascript">

         
         
           function demoFromHTML() {
               var img2 = new Image();
               var img = new Image();
               var doc = new jsPDF();


               img2.src = "../img/LogoAmezquitas.JPEG";
               doc.addImage(img2, 'JPEG', 20, 10, 50, 18);
               img.src = "../img/pkflogo2.JPEG";
               doc.addImage(img, 'JPEG', 180, 10, 20, 14); 
               doc.text(75, 40, 'REPORTE ECUACIONES ');
               doc.setDrawColor(56,111,254);
               doc.setLineWidth(0.2);
               doc.line(20, 42, 200, 42);
               doc.setFontSize(12);
               doc.text(20, 60, 'Ecuacion');
               doc.text(120, 60, 'Nombre Ecuacion');
               doc.text(170, 60, 'Resultado');

               var longitud = 20;
               var longitud2 = 120;
               var longitud3 = 170;


               var espacio = 68;

               doc.setFont("Hervetica");
               doc.setFontSize(10);
               var varPrueba = query[0];
               console.log(varPrueba);
               for (var i = 0 ; i <= query.length -1 ; i++) {

                   doc.text(longitud, espacio, query[i]);
                   doc.text(longitud2, espacio, descripcionQuery[i]);
                   doc.text(longitud3, espacio, RsultQuery[i]);

                   espacio = espacio + 5;



               }


           //    console.log(query);
           //    console.log(descripcionQuery);
           //    console.log(RsultQuery);



               doc.save('Test.pdf');

           }

    </script>


</html>