<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="wpfLDAP.pages.index" %>

<!DOCTYPE html>
<html>
<head>
<script type='text/javascript'
  src='http://code.jquery.com/jquery-1.9.1.js'></script>
<link rel="stylesheet" type="text/css"
  href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
<script type='text/javascript'
  src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script type='text/javascript'>
    $(window).load(function(){
        $('#mytext').popover();
    });
</script>
</head>
<body style='margin:30px'>
  <div id="container">
    <label for="mytext">My Text:</label> 
    <input id="mytext" type="text"
      data-toggle="popover" data-trigger="hover"
      data-content="Rango Final.">
  </div>
</body>
</html>
