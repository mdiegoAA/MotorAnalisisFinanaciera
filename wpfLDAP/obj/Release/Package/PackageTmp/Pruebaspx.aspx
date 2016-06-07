<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Pruebaspx.aspx.cs" Inherits="wpfLDAP.Pruebaspx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
        <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
        <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <link href="css/bootstrap.min.css" rel="stylesheet"/>
        <script type="text/javascript" src="js/PruebaUsuario.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
          <div class="modal-body">
                <table class="table table table-striped table table-hover table table-bordered">  
                    <thead>
                        <tr>
                        <td class="center-table" colspan="4"><strong>Grupos</strong></td>                                        
                        </tr>
                        <tr>
                        <td>#</td>
                        <td>Grupo</td> 
                        <td>Seleccione grupo</td>                                     
                        </tr>
                    </thead>                             
                    <tbody id="idGrupos"></tbody>                                  
                </table>     
            </div>
    </div>
    </form>
</body>
</html>



