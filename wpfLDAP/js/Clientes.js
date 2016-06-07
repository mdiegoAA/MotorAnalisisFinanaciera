$(document).ready(function () {
    animacion();   
    obtenerClientesXgrupo();

});

function obtenerClientesXgrupo() {

   

    $.ajax({

        url: "Clientes.aspx/obtenerClientesXgrupo",
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
                temp += "<td ><a onclick=idCliente('" + data[i].ID + "')><span class='glyphicon glyphicon-ok'>Seleccionar</a></span></td>"
                temp += "</tr>";
            };

            var Grupos = $("#Grupos");
            Grupos.append(temp);

           

        },
        error:function(err){
        
        
        }

        
    });

    pararAnimacion();
}

function idCliente(idClientes) {

    alert(idClientes);



}