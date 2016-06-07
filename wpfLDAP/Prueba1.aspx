<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Prueba1.aspx.cs" Inherits="wpfLDAP.Prueba1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script>

    $(document).ready(function () {

        var evaluar = $("#evaluar");
        evaluar.click(function () {



            var prueba = $("#prueba").val();
            var rSult = numberWithCommas(prueba);
            alert(rSult);

            
        });
       

    });

    function numberWithCommas(x) {

        var decimales = "";
        var valores = $("#valores option:selected").val();
        valores = parseFloat(valores);

        x = parseFloat(x / valores);

        x = x.toString();

        var index = x.indexOf(".");

        if (index != -1) {

            var palabraEntera = x.substring(0, index);
            decimales = x.substring(index + 1, x.length);
            decimales = x.substring(0,1);

            console.log(decimales);



        } else {

            var palabraEntera = x.substring();

        }


       


        palabraEntera = palabraEntera.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(palabraEntera))
            palabraEntera = palabraEntera.replace(pattern, "$1,$2");
        if (decimales != "") {

            return palabraEntera + "." + decimales;

        }

        return palabraEntera ;
    }


</script>
<body>
    <form id="form1" runat="server">
    <div>

        <input type="text" id="prueba" />

        <input type="button" id="evaluar" value="evaluar" />

        <select id="valores">
            <option value="1000" selected="selected">Miles</option>
              <option value="1000000">Miles</option>
              <option value="1000000000">Miles</option>
        </select>
    
    </div>
    </form>
</body>
</html>
