
$(document).ready(function () {

    cargarDatosUsuarios();

    pararAnimacion();


});


function cargarDatosUsuarios() {

    $.ajax({
        url: "UnidadProyecto.aspx/ObtenerGruposUsuarioXID",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            
            animacion();

            var data = JSON.parse(result.d);
            var temp = "";
            for (var i = 0; i < data.length; i++) {


                var grupos = data[i].Title.toString();

                temp += "<tr>";
                temp += "<td>" + [i] + "</td>";
                temp += "<td>" + data[i].ID + "</td>";
                temp += "<td>" + data[i].Title + "</td>";
                temp += "<td ><button type='button' onclick=myFunction('" + grupos + "') class='btn btn-outline btn-primary btn-xs'>Seleccionar</button></td>"
                temp += "</tr>";

               
            };

            var idGrupos = $("#idGrupos");
            idGrupos.append(temp);

        }

    });

  

}


function myFunction(prueba) {


    var grupos = {

        grupo: prueba

    }


    $.ajax({
        url: "UnidadProyecto.aspx/crearVariablesSessionGrupo",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(grupos),
        success: function (result) {



            if (result.d == true) {
               
                window.location.href = 'ClientesProyecto.aspx';


            }

        },
        error: function (err) {

        }

    });


}
