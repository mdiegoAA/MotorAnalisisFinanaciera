$(document).ready(function () {
    animacion();
    obtenerClientesXgrupo();

});

function obtenerClientesXgrupo() {

  

    $.ajax({

        url: "ClientesProyecto.aspx/obtenerClientesXgrupo",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (result) {


            var data = JSON.parse(result.d);

            var temp = "";
            for (var i = 0; i < data.length; i++) {

                temp += "<tr>";
                temp += "<td>" + data[i].ID + "</td>";
                temp += "<td>" + data[i].TITULO + "</td>";
                temp += "<td>" + data[i].CLIENTE + "</td>";
                temp += "<td>" + data[i].NOMBREPROYECTO + "</td>";
                temp += "<td>" + data[i].AÑO + "</td>";
                temp += "<td>" + data[i].Gerente + "</td>";
                temp += "<td>" + data[i].Director + "</td>";
                temp += "<td>" + data[i].ESTADOCIERRE + "</td>";
                temp += "<td>" + data[i].ESTADOEJECUCION + "</td>";
                temp += "<td>" + data[i].ESTADOPLANEACION + "</td>";
                temp += "<td>" + data[i].UNIDADDESARROLLO + "</td>";
                temp += "<td ><button type='button' onclick=myFunction('" +data[i].ID + "') class='btn btn-outline btn-primary btn-xs'>Seleccionar</button></td>"
                temp += "</tr>";
            };

            var Grupos = $("#Grupos");
            Grupos.append(temp);

        },
        error: function (err) {


        }

    });

    pararAnimacion();

}

function myFunction(id) {

    var idCliente = {

        id:id
    }

    $.ajax({
        
        url: "ClientesProyecto.aspx/cerarVariableSessionCliente",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(idCliente),
        success: function (result) {



            if (result.d == true) {

                window.location.href="MenuPrincipal.aspx";
            }

        },
        error: function (err) {
        }
    })

}