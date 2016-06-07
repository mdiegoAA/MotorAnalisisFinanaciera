
$(document).ready(function () {
    animacion();

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
            
           

            var data = JSON.parse(result.d);
            var temp = "";
            for (var i = 0; i < data.length; i++) {


                var grupos = data[i].CLIENTE.toString();
                grupos = grupos.replace(/ /g,"_");

               
            
                temp += "<tr>";
                temp += "<td>" + [i] + "</td>";
                temp += "<td>" + data[i].CLIENTE + "</td>";              
                temp += "<td ><button type='button' onclick=myFunction('" + grupos + "') class='btn btn-outline btn-primary btn-xs'>Seleccionar</button></td>"
                temp += "</tr>";

               
            };

            var idGrupos = $("#idGrupos");
            idGrupos.append(temp);

        }

    });

  

}


function myFunction(prueba) {

    prueba = prueba.replace(/_/g, " ");

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
