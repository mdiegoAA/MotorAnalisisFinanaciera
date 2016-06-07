<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="MotorAnalisisFianaciera_Amezquita.WebForm1" %>



<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    

    <title>SB Admin 2 - Bootstrap Admin Theme</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

   

</head>

<body style="background-color:white">
  
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                      <a> <img src="../img/logo-amezquita.png" alt="59px" width="157px"/></a>
                    </div>
                    <div class="panel-body">
                        <form runat="server">
                            <fieldset>
                                <div class="form-group">
                                    <asp:TextBox ID="TextBox1" class="form-control" runat="server"></asp:TextBox>
                                   
                                </div>
                                <div class="form-group">
                                      <asp:TextBox ID="TextBox2" class="form-control" runat="server"></asp:TextBox>
                                </div>
                               
                                <!-- Change this to a button or input when using this as a form -->
                                <asp:Button ID="Button1" class="btn btn-lg btn-primary btn-block"  runat="server" OnClick="Button1_Click" Text="Ingresar" />
                            </fieldset>
                        </form>
                        <div id="lblNoValido">
                            <asp:Label ID="lblArchivo" Text="Usuario No Valido" runat="server"  ></asp:Label>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>

 
    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>




