<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CargarArchivo.aspx.cs" Inherits="MotorAnalisisFianaciera_Amezquita.pages.CargarArchivo" %>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>


     <!-- Jquery js -->
  <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
     <!-- Jquery min js -->
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <!-- Bootstrap Core CSS -->

    <script src="../js/bootstrap.min.js"></script>
    <link href="../css/bootstrap.min.css" rel="stylesheet" />

    

    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

      <link href="../css/jquery-filestyle.min.css" rel="stylesheet" />
       <script src="../js/jquery-filestyle.min.js"></script>

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
     <link href="../jqueryIntroLoader/introLoader.min.css" rel="stylesheet" />
    <script src="../jqueryIntroLoader/jquery.introLoader.pack.min.js"></script>    
     <script src="../js/IntroLoader.js"></script>
    <script src="../js/jquery.table2excel.js"></script>
    <script type="text/javascript" src="../js/CargarArchivo.js"></script>

    <style type="text/css">

        tr,td,th {            
            text-align: center;        
        }
        



    </style>
  

</head>
<body>
    <div id="element" class="introLoading"></div>

    <div class="header-background-color"> 
    <div class="blog-header">
      <div class="container ">
        <div class="header-bg-image">
          
   
        </div>
      </div>
    </div>

 
</div>

    <form id="form1" runat="server" role="form" data-toggle="validator">

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
                    <div>
                        <h3 class="page-header" style="color: #4a7193"><asp:Label ID="labelArchivo" runat="server"></asp:Label></h3>                            
                    </div>             
                </div>
           </div>
           <div class="row">
               <div class="col-lg-12">
                       <div class="col-sm-10">
                          <asp:FileUpload ID="FileUpload1" runat="server" class="jfilestyle" data-buttonText="Cargar Archivo" />
                            <input type="button" id="validarDocumento" class="btn btn-primary" value="Validar Archivo" />
                            
                        </div>                    
                </div>                   
            </div>  
           <div class="row" id="InformacionTables" style="display: none">
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
       
                     <div id="DocumentoExcel"  class="col-sm-12" style="display: none ; margin-bottom:3%">
                        <div class="form-group">                                                                                      
                                <div class="form-inline">                                                 
                                        <div class="form-group col-sm-12"> 
                                        <div class="form-group" style="margin-right:2%">
                                        <div><label>Nombre de la hoja</label></div>
                                        <div class="form-group input-group">
                                            <span class="input-group-addon"><i class="fa fa-file-excel-o"></i>
                                            </span>
                                            <div id="validacionNombreHoja"><input type="text" id="NombreHoja" class="form-control" placeholder="Nombre de la hoja" data-toggle="popover"  data-placement="top"></div>
                                        </div>                                                               
                                    </div>
                                    <div class="form-group">
                                        <div><label>Numero de la fila</label></div>
                                        <div class="form-group input-group">
                                        <span class="input-group-addon"><i class="fa fa-arrows-h"></i></>
                                        </span>
                                        <div id="validacionFilaHoja"><input type="text" id="FilaHoja" class="form-control" placeholder="Numero de la fila" data-toggle="popover"  data-placement="top"></div>
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
                                           <div id="validacionCuenta"><input type="text" id="cuenta" class="form-control" placeholder="Cuentas" data-toggle="popover"  data-placement="top"></div>
                                        </div>
                                                               
                                        </div>
                                                         
                                    <div class="form-group">
                                        <div><label>Columna del valor de las cuenta</label></div>
                                        <div class="form-group input-group">
                                            <span class="input-group-addon"><i class="fa fa-arrows-v"></i></>
                                            </span>
                                            <input type="text" id="valorCuenta" class="form-control" placeholder="Valor de las cuentas">
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
                              <div id="validacionLineaInicio"><input type="text" class="form-control" runat="server" id="LineaInicio" placeholder="Linea Inicio" data-toggle="popover"  data-placement="top" /></div>
    
                        </div>
                        <div style="float: left" class="col-sm-4">
                              <div id="validacionLineafinal"> <input type="text" class="form-control" runat="server" id="LineaFinal" placeholder="Linea Final"  data-toggle="popover"   data-placement="top" /></div>
                        <br />
                        </div>
                            <br />
                        </div>
                    </div>          
           </div>
           <br />
             <div class="panel-body" id="btnDisplay"  style="display: none">
                          
                            <p>
                                <button type="button" id='btnUpload' class="btn btn-outline btn-primary">Cargar Informacion</button>
                                <button type="button" id='btnNivelCuentas' class="btn btn-outline btn-primary">Nivel Cuentas</button>
                                <button type="button" id='GuardarInformacion' class="btn btn-outline btn-primary" data-toggle="modal" data-target="#modalGuardarInformacion">Validar y Guardar</button>
                               
                            <br>
                                   
            </div>

<%--           <div id="btnDisplay"  style="display: none" >
               <br />
               <br />
                
             <table  >

                 <tr>

                     <td>
                          <div class="col-md-2">
                                        <input type='button' id='btnUpload' class="btn btn-primary" value='Cargar Informacion' />
                           </div>


                     </td>
                     <td>
                          <div class="col-md-2">
                                        <input type='button' style="visibility:visible" id='btnNivelCuentas' class="btn btn-primary" value='Cambiar Nivel Cuentas' />
                           </div>
                     </td>
                     <td>
                          <div class="col-md-2">
                                    <button type="button" style="visibility:visible" id='GuardarInformacion' class="btn btn-primary" data-toggle="modal" data-target="#modalGuardarInformacion">Validar y Guardar</button>
                           </div>
                     </td>
                     <td>
                         <div class="col-md-2">
                                    <button type="button" style="visibility:visible" id='pruebasModal' class="btn btn-primary" data-toggle="modal">Cuentas no Registradas</button>                               
                            </div>
                     </td>

                 </tr>


            </table>


        </div>
          --%>



         <%--  <div class="row" id="btnDisplay" style="display: none">    
                    <br />
                                  
                    <div class="col-lg-12" >
                        <div class="row pull-left">                                             
                               <br />
                               <br />               
                                <div class="col-md-2">
                                        <input type='button' id='btnUpload' class="btn btn-primary" value='Cargar Informacion' />
                                </div>
                                           
                            <div class="col-md-1">
                                                 
                                </div>
                            <div class="col-md-2">
                                        <input type='button' style="visibility:visible" id='btnNivelCuentas' class="btn btn-primary" value='Cambiar Nivel Cuentas' />
                                </div>
                                           
                            <div class="col-md-1">
                                                 
                                </div>
                                <div class="col-md-2">
                                    <button type="button" style="visibility:visible" id='GuardarInformacion' class="btn btn-primary" data-toggle="modal" data-target="#modalGuardarInformacion">Validar y Guardar</button>
                                </div>
                            <div class="col-md-1">
                                                 
                                </div>
                               
                            
                             <div class="col-md-2">
                                    <button type="button" style="visibility:visible" id='pruebasModal' class="btn btn-primary" data-toggle="modal">Cuentas no Registradas</button>                               
                            </div>  


                            
                                                  
                            <br />
                           
                          
                            
                        </div>                                    
                  
                    </div>  
                 
       
        </div>--%>
           <br />
           <div class="row">
                    <div class="">
                        <div class="col-lg-12 container">
                            <div class="panel panel-default">
                                <!-- /.panel-heading -->
                                <div class="panel-body">
                                    <div class="dataTable_wrapper">
                                        <div class="table-responsive">
                                            <table class="table table table-striped table table-hover table table-bordered" style="font-size:x-small">

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
            <div class="modal fade" id="AgregarCuenta" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="H5">Agregar Cuenta</h4>
                      </div>
                      <div class="modal-body">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Codigo Cuenta</label>
                        <input type="text" id="InputCodigoCuenta" class="form-control" placeholder="Text input">
                      </div>
                       <div class="form-group">
                        <label for="exampleInputEmail1">Descripcion Cuenta</label>
                        <input type="text" id="DescripcionCuenta" class="form-control" placeholder="Text input">
                      </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" id="AgregarCuentaUsuario" class="btn btn-primary">Agregar Cuenta</button>
                      </div>
                    </div>
                  </div>
                </div>
            <div class="modal fade" tabindex="-1" role="dialog" id="modalNivelCuenta">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Nivel Cuenta</h4>
              </div>
              <div class="modal-body">
                   <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Nivel Cuenta</label>
                        <input type="email" class="form-control" id="nivelCuenta" placeholder="Email">
                      </div>
                   </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div>
            <div class="modal fade" id="CargarFinalizacionArchivo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H3"></h4>
              </div>
              <div class="modal-body">
               Informacion guardad Correctamente desea guardar otro Archivo..
              </div>
              <div class="modal-footer">
                <button type="button" id="btnCerrar" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button type="button" id="btnGuarNuevoArchivo" class="btn btn-primary">GuardarArchivo</button>
              </div>
            </div>
          </div>
        </div>
            <div class="modal fade" id="myModalDescargaDocumento" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="H4">Modal title</h4>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
         <%--   <asp:Button ID="btnDescargarArchivo" runat="server" OnClick="btnDescargarArchivo_Click" class="btn btn-default" text="DescargarDocumento" />--%>
            </div>
        </div>
        </div>
    </div>
             <div class="modal fade" tabindex="-1" id="modalRepetidos" role="dialog" data-backdrop="static"  data-keyboard="false">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">  
                <div class="row">
                  <div class="col-md-8"> <h4 class="modal-title">Cuentas Reptidas</h4></div>  
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>           
               
              </div>
              <div class="modal-body">
                    <table class="table table table-striped table table-hover table table-bordered">
                        <thead>
                            <th>Cuenta Repetida</th>
                             <th>Valor Cuenta</th>
                             <th>Opciones</th>
                        </thead>
                        <tbody id="TbodyModal">

                        </tbody>


                    </table>
              </div>
              <div class="modal-footer">
               
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
           <div class="modal fade" tabindex="-1" id="modalnoRepetidos" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal title</h4>
              </div>
              <div class="modal-body">
                <p>no se encontraron cuentas repetidas</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.moda --->
           <div class="modal fade" id="modalPrueba"  data-keyboard="false"  data-backdrop="static"   tabindex="-1" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Modal title</h4>
                  </div>
                  <div class="modal-body">
                    <table class="table table-hover">
                        <thead></thead>
                        <tbody id="CuentasNoRegistradas">



                        </tbody>
                        <tfoot></tfoot>
                    </table>
                  </div>

                  <div class="modal-body" style="display:none">
                    <table id="tableExcelCuentaNoRegistradas" class="table table-hover">
                        <thead></thead>
                        <tbody id="CuentasNoRegistradasExcel">



                        </tbody>
                        <tfoot></tfoot>
                    </table>
                  </div>

                  <div class="modal-footer">
                     <button type="button" id="generarReorteExcel" class="btn btn-default" data-dismiss="modal">Generar Excel</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div><!-- /.modal-content -->
              </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->

                <div class="modal fade bs-example-modal-lg " id="BlanceCuentas" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                    <div class="modal-dialog modal-lg" role="document">
                       <div class="modal-content panel-primary">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="H2">Guardar Informacion</h4>
                            </div>
                             <div class="modal-body">
                               
                              
                                 <table class="table table table-striped table table-hover table table-bordered">  
                                    <thead>
                                       <tr>
                                        <td class="center-table" colspan="4"><strong>Ecuacion Patrimonial</strong></td>                                        
                                      </tr>
                                      <tr>
                                        <td>Cuentas</td>
                                        <td>Valor Cuentas</td>
                                        <td>Cuentas</td>
                                        <td>Valor Cuentas</td>
                                      </tr>
                                    </thead>                             
                                   <tbody id="TbodyEcuacionPatrimonial"></tbody>                                  
                               </table>                             
                               <br />
                               <br />
                     
                      
                          
                                 <table class="table table table-striped table table-hover table table-bordered">  
                                    <thead>
                                       <tr>
                                        <td class="center-table" colspan="4"><strong>Validacion Clase</strong></td>                                        
                                      </tr>
                                      <tr>
                                        <td>Grupos</td>
                                        <td>Sumatoria Grupos</td>
                                        <td>Clase</td>
                                        <td>Valor Clase</td>
                                      </tr>
                                    </thead>                             
                                   <tbody id="informeAcumuladoBalance"></tbody>                                  
                               </table>                             
                               <br />
                               <br />
                              <table class="table table table-striped table table-hover table table-bordered">  
                                    <thead>
                                       <tr>
                                        <td class="center-table" colspan="4"><strong>Validacion Grupo</strong></td>                                        
                                      </tr>
                                      <tr>
                                        <td>Cuentas</td>
                                        <td>Sumatoria Cuentas</td>
                                        <td>Grupo</td>
                                        <td>Valor Grupo</td>
                                      </tr>
                                    </thead>                                
                                   <tbody id="InformacionValidacionGrupo" ></tbody>                                  
                               </table>
                                 <br />
                               <br />
                              <table class="table table table-striped table table-hover table table-bordered">  
                                    <thead>
                                       <tr>
                                        <td class="center-table" colspan="4"><strong>Validacion Cuenta</strong></td>                                        
                                      </tr>
                                      <tr>
                                        <td>Subcuentas</td>
                                        <td>Sumatoria Subcuentas</td>
                                        <td>Cuenta</td>
                                        <td>Valor Cuenta</td>
                                      </tr>
                                    </thead>                                
                                   <tbody id="SubCuenta"></tbody>                                  
                               </table>                                                          
                               
                                <div class='col-md-5'>
                                    <div class="form-group">
                                    </div>
                                </div>
                            </div> 
                             <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" id="guarInformacionCuentas" class="btn btn-primary">Guardar Informacion p</button>
                            </div>                        
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

