<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CargarPlanUnicoCuenta.aspx.cs" Inherits="wpfLDAP.pages.CargarPlanUnicoCuenta" %>

<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>


    <script src="../dist/js/sb-admin-2.js"></script>   
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    <link href="../css/jquery-filestyle.min.css" rel="stylesheet" />
    <script src="../js/jquery-filestyle.min.js"></script>    
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">    
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href="../jqueryIntroLoader/introLoader.min.css" rel="stylesheet" />
    <script src="../jqueryIntroLoader/jquery.introLoader.pack.min.js"></script>    
     <script src="../js/IntroLoader.js"></script>
    <script type="text/javascript" src="../js/CargarPlanUnicoCuenta.js"></script>

    <style type="text/css">

        th {            
            text-align: center;        
        }


    </style>
  

</head>

<body>

     <div id="element" class="introLoading"></div>
     <form id="form" runat="server">
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
        
           <div class="row">
                <div class="col-lg-12">
                    <div>
                        <h3 class="page-header" style="color: #4a7193"><asp:Label ID="labelArchivo" runat="server"></asp:Label></h3>                            
                    </div>             
                </div>
           </div>
            <div class="row">
                <div class="col-lg-12">
                        <div class="col-sm-12">
                            <asp:FileUpload ID="FileUpload1" runat="server" class="jfilestyle" data-buttonText="Cargar Archivo" />
                            <input type="button" id="btnValidarArchivo" class="btn btn-primary" value="Validar Archivo" />
                            
                        </div>                    
                </div>                   
            </div>   
        <br />          

     
          <div class="row" id="InformacionTables" style="display:none">
                    <div>
                        <div class="col-lg-12">
                            <div class="panel panel-default">
                                <!-- /.panel-heading -->
                                <div class="panel-body bg-primary ">                                   
                                            <div id="InformacionTabla"></div>
                                 </div>
                             </div>
                          </div>
                      </div>
                 </div>
                 <div>
       
                     <div id="DocumentoExcel" class="col-sm-12" style="display:none">
                        <div class="form-group">                                                                                      
                                <div class="form-inline">                                                 
                                        <div class="form-group col-sm-12"> 
                                        <div class="form-group" >
                                        <div><label>Nombre de la hoja</label></div>
                                        <div class="form-group input-group">
                                            <span class="input-group-addon"><i class="fa fa-file-excel-o"></i>
                                            </span>
                                            <input type="text" id="NombreHoja" class="form-control" placeholder="Nombre de la hoja">
                                        </div>                                                               
                                    </div>
                                    <div class="form-group">
                                        <div><label>Numero de la fila</label></div>
                                        <div class="form-group input-group">
                                        <span class="input-group-addon"><i class="fa fa-arrows-h"></i></>
                                        </span>
                                        <input type="text" id="FilaHoja" class="form-control" placeholder="Numero de la fila">
                                        </div>  
                                    </div>
                                </div>   
                                                                                                                                                             
                                        <div class="form-group col-sm-12"> 
                                        <br />
                                                         
                                        <div class="form-group" style="margin-right:2%">
                                        <div><label>Columna de la cuentas</label></div>
                                        <div class="form-group input-group">
                                            <span class="input-group-addon"><i class="fa fa-arrows-v"></i>
                                            </span>
                                            <input type="text" id="codigoCuenta" class="form-control" placeholder="Cuentas">
                                        </div>
                                                               
                                        </div>
                                                         
                                    <div class="form-group">
                                        <div><label>Columna del valor de las cuenta</label></div>
                                        <div class="form-group input-group">
                                            <span class="input-group-addon"><i class="fa fa-arrows-v"></i></>
                                            </span>
                                            <input type="text" id="nombreCuenta" class="form-control" placeholder="Valor de las cuentas">
                                        </div>                                                        
                                    </div>                                                 
                                                      
                                </div>
                                </div>
                            </div>  
                        </div>        
                    <div id="ArchivoTxt" class="col-sm-12" style="display:none">
                    <br />
                        <div class="form-group">

                        <div class="col-sm-4">
                                <input type="text" class="form-control" runat="server" id="LineaInicio" placeholder="Linea Inicio" required/>
                        </div>
                        <div style="float: left" class="col-sm-4">
                                <input type="text" class="form-control" runat="server" id="LineaFinal" placeholder="Linea Final" />
                        <br />
                        </div>
                            <br />
                        </div>
                    </div> 
               </div>
                    
                    <br />
                     <br />                   
                    <div class="col-lg-12" id="btnDisplay" style="display:none" >
                        <div class="row pull-left">                                             
                               <br />
                               <br />               
                                <div class="col-md-1">
                                        <input type='button' id='btnUpload' class='btn btn-primary' value='Upload Files' />
                                </div>
                                           
                            <div class="col-md-2">
                                                 
                                </div>
                            <div class="col-md-1">
                                        <input type='button' style="visibility:visible" id='btnNivelCuentas' class='btn btn-primary' value='Nivel Cuentas' />
                                </div>
                                           
                            <div class="col-md-2">
                                                 
                                </div>
                                <div class="col-md-2">
                                    <button type="button" style="visibility:visible" id='GuardarInformacion' class="btn btn-primary" data-toggle="modal" data-target="#modalGuardarInformacion">Guardar Informacion</button>
                                </div>
                            <div class="col-md-2">
                                                 
                                </div>
                            <div class="col-md-2">
                                    <button type="button" style="visibility:visible" id='Button1' class="btn btn-primary" data-toggle="modal" data-target="#BlanceCuentas">Informacion</button>                               
                            </div>                           
                       <br />
                        <br />
                          
                            
                        </div>
                                     
                  
                </div> 
            
                
                <div class="row">
                    <div>
                        <div class="col-lg-12 container">
                            <div class="panel panel-default">
                                <!-- /.panel-heading -->
                                <div class="panel-body">
                                    <div class="dataTable_wrapper">
                                        <div class="table-responsive">
                                            <table class="table table table-striped table table-hover table table-bordered">

                                                <thead>

                                                </thead>

                                                <tbody id="tbody">
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <div class="modal fade" id="CargarFinalizacionArchivo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H3"></h4>
              </div>
              <div class="modal-body">
                     <asp:Label ID="GuardarInformacionServer" runat="server" ></asp:Label>
              </div>
              <div class="modal-footer">
                <button type="button" id="btnCerrar" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" id="btnGuarNuevoArchivo" class="btn btn-primary">GuardarArchivo</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="modalArchivoGuardado" tabindex="-1" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal title</h4>
              </div>
              <div class="modal-body">
                <p>One fine body&hellip;</p>
              </div>
              <div class="modal-footer">
          
                <button type="button" class="btn btn-primary" id="btnMenuPrincipal">Regresar Menu</button>
                <button type="button" class="btn btn-primary" id="GuardarCuenta">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
                

               
    </form>

    <!-- /#wrapper -->

    <!-- jQuery -->


    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>

