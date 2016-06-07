<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ValidarEcuacionesArchivo.aspx.cs" Inherits="wpfLDAP.pages.ValidarEcuacionesArchivo" %>

<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Cargar Archivo</title>
    <!-- Bootstrap Core CSS -->
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
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script> 
    <script src="../dist/js/sb-admin-2.js"></script>   
    <link href="../jqueryIntroLoader/introLoader.min.css" rel="stylesheet" />
    <script src="../jqueryIntroLoader/jquery.introLoader.pack.min.js"></script>    
    <script src="../js/IntroLoader.js"></script> 
    <script src="../js/ValidarEcuacionArchivo.js"></script>

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
    </script>
     <script>
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

        th,tr {            
            text-align: center;        
        }





    </style>

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
                        <h3 class="page-header" style="color: #4a7193">Ecuaciones</h3>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
              <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"> 
                           <div class="col-sm-8"><asp:Label runat="server" ID="NombreCliente"></asp:Label></div>                    
                        <div class="row">
                        <div id="VariacionReporte" style="visibility:visible" >
                            <div id="btnVariacion"  class="col-md-2">
                              <a class="btn btn-block btn-social btn-bitbucket">
                              <div><asp:Label ID="Informacion" runat="server" ></asp:Label></div> 
                              </a>
                          </div>

                        </div>
                         
                           <div class="col-md-7">
                              
                          </div>
                            <div id="reporteExcelArchivo" style="visibility:visible" class="col-md-3">
                              <a class="btn btn-block btn-social btn-bitbucket">
                             
                              </a>
                          </div>
                        </div>

                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="dataTable_wrapper">
                                <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover centered" id="dataTables"  style="font-size:x-small">
                                   <thead>
                                        
                                    </thead>
                                     <tbody>
                                        <tr>
                                      </tr>
                                         <tr>
                                             <th>Centro de Costo</th>
                                             <th>Fecha Inicial</th>
                                             <th>Fecha Final</th>
                                              <th>Opciones</th>
                                         </tr>

                                             <tr>  
                                            <td>
                                            <div class="row">                                                 
                                                  <div class="col-xs-10">
                                                   <select class="form-control" id="optionCentroCosto">                                                                                                            
                                                    </select>
                                                  </div>
                                                                                                 
                                             </div>
                                            </td> 
                                            <td><div id="Validardatepicker" class="col-xs-12"><div id="validacionErrordatepicker"><input type="text" placeholder="Fecha Archivo" id="datepicker" class="form-control"></div></div></td>
                                                <td><div id="Div1" class="col-xs-12"><div id="Div2"><input type="text" placeholder="Fecha Archivo" id="datepicker2" class="form-control"></div></div></td>
                                            <td>
                                               <button type="button" id="validarArchivo"class="btn btn-primary col-sm-12">Validar</button>
                                            </td>
                                        </tr>                                       
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            <!-- /.table-responsive -->
                            
                        </div>




                         </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
                
            <!-- /.container-fluid -->
        </div>

          <div id="Div3">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                       <div class="panel panel-default">
                          <div class="panel-heading">
                            <h3 class="panel-title">Seleccione Archivo</h3>
                          </div>
                          <div class="panel-body">
                                <table class="table table-striped table-bordered table-hover centered"  style="font-size:small" >
                                    <thead>
                                          <tr>
                                            <th>#</th>
                                             <th>Fecha Del Archivo</th>
                                            <th>Opciones</th>
                                          </tr>
                                    </thead>
                                    <tbody id="Tbody">

                                    </tbody>
                                  
                                </table>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        <!-- /#page-wrapper -->

    </div>
     </div>
</body>

</html>



