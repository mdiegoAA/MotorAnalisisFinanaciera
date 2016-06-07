<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Variaciones.aspx.cs" Inherits="MotorAnalisisFianaciera_Amezquita.pages.Variaciones" %>

<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
    <link href="../jqueryIntroLoader/introLoader.min.css" rel="stylesheet"/>
    <script src="../jqueryIntroLoader/jquery.introLoader.pack.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css">
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
      <link href="http://cdn.rawgit.com/davidstutz/bootstrap-multiselect/master/dist/css/bootstrap-multiselect.css"
        rel="stylesheet" type="text/css" />
    <script src="http://cdn.rawgit.com/davidstutz/bootstrap-multiselect/master/dist/js/bootstrap-multiselect.js"
        type="text/javascript"></script>
    <script src="../js/jquery.table2excel.js"></script>
    <script src="../dist/js/sb-admin-2.js"></script>   
    <script type="text/javascript" src="../js/Variaciones.js"></script>
 
     <script>
         $(function () {
             $("#datepicker").datepicker({
                 changeMonth: true,
                 changeYear: true,
                 changeDay: true,
                 showButtonPanel: true,
                 dateFormat: 'yy-mm-dd',
                 onClose: function (dateText, inst) {
                     var day = $("#ui-datepicker-div .ui-datepicker-day :selected").val();
                     var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                     var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                     $('#startDate').datepicker({ defaultDate: -30 });
                     $('#endDate').datepicker({ defaultDate: new Date() });
                 }
             });
         });

         $(function () {
             $("#datepicker2").datepicker({
                 changeMonth: true,
                 changeYear: true,
                 changeDay: true,
                 showButtonPanel: true,
                 dateFormat: 'yy-mm-dd',
                 onClose: function (dateText, inst) {
                     var day = $("#ui-datepicker-div .ui-datepicker-day :selected").val();
                     var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                     var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                     $('#startDate').datepicker({ defaultDate: -30 });
                     $('#endDate').datepicker({ defaultDate: new Date() });
                 }
             });
         });


    </script>

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

          <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Informacion Validacion del Archivo</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           <asp:Label ID="Informacion" runat="server" ></asp:Label>
                            
                         </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" style="font-size:x-small">
                                    <thead>
                                        <tr>
                                            <th>Centro Costo</th>
                                            <th>Fecha Inicial</th>
                                            <th>Fecha Final</th> 
                                            <th>Periodo</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>  
                                             <td>
                                            <div class="row" >                                                 
                                                  <div class="col-xs-12">
                                                   <select class="form-control input-sm" id="optionCentroCosto">
                                                                                                                                                               
                                                    </select>
                                                  </div>                                                                                          
                                             </div>                                              
                                            </td>                                         
                                            <td> <div id="Validardatepicker" class="col-xs-12"><div id="validacionErrordatepicker"><input type="text" placeholder="Fecha Archivo" id="datepicker" class="form-control"></div></div></td>
                                            <td> <div class="col-xs-12 "><div id="validacionErrordatepicker2"><input type="text" placeholder="Fecha Archivo" id="datepicker2" class="form-control"></div></div></td>
                                            <td>                                                                                       
                                                  <div class="col-xs-12">
                                                   <select class="form-control" id="Periodo"> 
                                                        <option value="M" selected="selected">Mensual</option>
                                                        <option value="T">Trimestral</option>
                                                        <option value ="S">Semestral</option> 
                                                        <option value="A">Anual</option>                                                                                                              
                                                    </select>                                                                            
                                             </div>       
                                         </td>
                                        </tr>  
                                        <tr>
                                           
                                                                             
                                           <th>Valores</th>
                                           <th>Salida</th>
                                            <th>Decimales</th>
                                           <th>Corte Contable</th>
                                            
                                        </tr>  
                                        <tr>
                                            <td>                                                                                       
                                                  <div class="col-xs-12">
                                                   <select class="form-control" id="cifras"> 
                                                        <option value="1" selected="selected">Pesos</option>
                                                        <option value="1000">Miles</option>
                                                        <option value ="1000000">Millones</option> 
                                                        <option value="1000000000">Miles Millones</option>                                                                                                              
                                                    </select>                                                                            
                                             </div>       
                                            </td>
                                             <td>
                                            <div class="row">                                                 
                                                  <div class="col-xs-12">
                                                   <select class="form-control" id="Saldos"> 
                                                        <option value="S" selected="selected">Saldos</option>
                                                        <option value="V">Variaciones</option>
                                                        <option value="P">Porcentuales</option>                                                                                                                                                                     
                                                    </select>
                                                  </div>                                                                                          
                                             </div>                                              
                                            </td>
                                            <td>
                                            <div class="col-xs-12">
                                                   <select class="form-control" id="Decimales"> 
                                                        <option value="0" >0</option>
                                                        <option value="1">1</option>
                                                        <option value ="2" selected="selected">2</option> 
                                                                                                                                                                 
                                                    </select>
                                                  </div>   
                                            </td>
                                             <td>
                                            <div class="col-xs-12">
                                                   <select class="form-control" id="Select6"> 
                                                        <option value="0" selected="selected">Anula</option>
                                                        <option value="1">Semestral</option>
                                                        <option value ="2">Trimestral</option> 
                                                                                                                                                                 
                                                    </select>
                                                  </div>   
                                            </td>
                                           
                                        </tr>
                                        <tr>
                                           
                                            <th>Cuentas Resultado</th>
                                            <th>Rango Inicial</th>
                                            <th>Rango Final</th>
                                            <th></th>

                                        </tr>
                                        <tr>
                                          <td>
                                                 <div class="col-xs-10">

                                                    <select id="lstFruits" multiple="multiple">
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                        <option value="3">6</option>
                                                        <option value="4">7</option>
                                                        <option value="5">8</option>
                                                        <option value="5">9</option>
                                                    </select>
                                                    </div>

                                            </td>
                                             <td>
                                             <div class="col-xs-12">                                                  
                                               
                                                <input type="text" class="form-control" id="Text1" placeholder="Jane Doe" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">                                           
                                            </div>
                                            </td>
                                             <td>
                                             <div class="col-xs-12">                                                  
                                               
                                                <input type="text" class="form-control" id="Text2" placeholder="Jane Doe" data-toggle="popover" data-trigger="hover" data-content="Rango final de las clases" data-placement="top" >                                           
                                            </div>
                                            </td>
                                            <td>
                                             <div class="col-xs-12">                                                  
                                               
                                                <button type="button" id="Buscar" class="btn btn-primary">Primary</button>                                          
                                            </div>
                                            </td>
                                           
                                        </tr>
                                                                        
                                    </tbody>
                                </table>
                            </div>
                           
                               

                          </div>

                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
            <!-- /#page-wrapper -->      


      
             <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">                          
                        <div class="row">
                        <div id="VariacionReporte" style="visibility:hidden" >
                            <div id="btnVariacion"  class="col-md-4">
                              <a>
                              <div><i class="fa fa-bar-chart"></i> Generar Variacion</div> 
                              </a>
                          </div>

                        </div>
                         
                         

                           <div id="Conjuntos" class="col-md-5">
                              <a href="#">
                              <div><i class="fa fa-spinner"></i> Generar Conjuntos</div> 
                              </a>
                          </div>


                              
                         
                            <div id="reporteExcelArchivo" style="visibility:hidden" class="col-md-3">
                              <a >
                              <div><i class="fa fa-file-excel-o"></i> Generar Reporte Excel</div> 
                              </a>
                            <a>
                                 <div><i class="fa fa-file-excel-o"></i> Generar Reporte PDF</div> 
                            </a>
                          </div>
                           
                           
                             
                          </div>
                        </div>

                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="dataTable_wrapper">
                                <div class="table-responsive">
                                <table class="table table-striped table-bordered  table-fixed table-hover centered" id="dataTables"  style="font-size:x-small">
                                    <thead id="nombreCuentas">
                                      
                                        <tr>                                                                                
                                                                                
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyResult">
                                        
                                        
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            <!-- /.table-responsive -->
                            
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /#page-wrapper -->

        
        
     
        
         
         <div class="modal fade" id="poppupValidacion" tabindex="-1" role="dialog" aria-labelledby="poppupValidacion">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H1">Modal title</h4>
              </div>
              <div class="modal-body">
                <div id="Lblvalidacion"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="BtnModificarDatos" class="btn btn-primary">Remplazar Datos</button>
              </div>
            </div>
          </div>
         </div>
        
        <div class="modal fade bs-example-modal-lg" tabindex="-1" id="conjuntos" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
                
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Gestión de Conjuntos </h4>
              </div>
              <div class="modal-body">
                  <form class="form-inline">
                      <div class="form-group">
                        <label for="exampleInputName2">Nombre Conjunto</label>
                        <input type="text" class="form-control" id="exampleInputName2" placeholder="Nombre Conjunto">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail2">Cuenta Inicial</label>
                        <input type="text" class="form-control" id="CuentaInicial" placeholder="Ej:100000">
                      </div>
                       <div class="form-group">
                        <label for="exampleInputEmail2">Cuenta Final</label>
                        <input type="text" class="form-control" id="CuentaFinal" placeholder="Ej:200000">
                      </div>
                      <button type="button" id="generarConjunto" class="btn btn-default">Generar</button> 
                      <button type="button" id="Excel" class="btn btn-default">Reporte Excel</button>                      
                  
                    </form>
                    <div class="panel-body">
                                <div class="dataTable_wrapper">
                                     <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover centered table-responsive" id="Table2"  style="font-size:x-small">
                                        <thead id="TheadConjuntos">
                                      
                                            <tr>
                                                                                 
                                                                                
                                            </tr>
                                        </thead>
                                        <tbody id="TbodyConjuntos">
                                        
                                        </tbody>
                                    </table>
                                </div>    
                            </div>

               </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Guardar Conjunto</button>
              </div>
            </div><!-- /.modal-content -->
         
          </div>
        </div>
          <div class="modal fade" id="myModalValidacion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

       
         <div class="modal fade" id="poppupMensajeCargarArchivo" tabindex="-1" role="dialog" aria-labelledby="poppupMensajeCargarArchivo">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H2">Modal title</h4>
              </div>
              <div class="modal-body">
                 No se encontraron Archivos cargado. Desea Cargar La informacion 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="BtnCargarDatos" class="btn btn-primary">Cargar Datos nuevos</button>
              </div>
            </div>
          </div>
         </div>
        <!-- Modal -->
        <div class="modal fade" id="ModalPrueba" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H3">Modal title</h4>
              </div>
              <div class="modal-body">
                  <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Seleccione Cliente que desea cargar el archivo
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="dataTable_wrapper">
                                <table class="table table-striped table-bordered table-hover centered" id="Table1" align="center">
                                    <thead>
                                        <tr>
                                            <th>Cuenta</th>             
                                            <th>Valor Cuenta</th>                                       
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyCuenta">
                                        
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                            
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>


    

       <!-- Metis Menu Plugin JavaScript -->
        <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

        <!-- Custom Theme JavaScript -->
        <script src="../dist/js/sb-admin-2.js"></script>


        <!-- jQuery -->


        <!-- Bootstrap Core JavaScript -->
        <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

  

    </form>

</body>


</html>
