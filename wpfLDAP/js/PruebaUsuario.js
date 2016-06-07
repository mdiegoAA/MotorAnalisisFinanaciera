$(document).ready(function () {
    cargarDatosUsuarios();
});

function cargarDatosUsuarios() {

    $.ajax({
        url: "Pruebaspx.aspx/ObtenerGruposUsuarioXID",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {


            var data = JSON.parse(result.d);
            var temp = "";
            for (var i = 0; i < data.length; i++) {


                var grupos = data[i].Title.toString();

                temp += "<tr>";
                temp += "<td>" + [i] + "</td>";
                temp += "<td>" + data[i].Title + "</td>";
                temp += "<td ><a onclick=myFunction('" + grupos + "')><button type='button' class='btn btn-default btn-circle'><i class='fa fa-check'></i></button></a></td>"
                temp += "</tr>";
            };



            var idGrupos = $("#idGrupos");
            idGrupos.append(temp);

        }

    });
}


function myFunction(prueba) {

    var grupos = {

        grupo:prueba

    }
   

    $.ajax({
        url: "Pruebaspx.aspx/crearVariablesSessionGrupo",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(grupos),
        success: function (result) {

        

            if (result.d == true) {

                window.location.href = 'InformacionValidacionSubirArchivo.aspx';
                

            }

        },
        error: function(err){
    
        }
     
    });

}