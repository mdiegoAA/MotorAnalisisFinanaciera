
var datas = "";
$(document).ready(function () {

    var btnNivelCuentas = $("#btnNivelCuentas");
    btnNivelCuentas.click(function () {
        nivelCuenta();
    });

    animacion();

    var btnGuarNuevoArchivo = $("#btnGuarNuevoArchivo");
    btnGuarNuevoArchivo.click(function () {
      //  alert("Pruebas");
        guardarArchivoInformacion();

    });

    var GuardarInformacion = $("#GuardarInformacion");
    GuardarInformacion.click(function () {


        var repetidos = repetivos(datas);


        if (repetidos != "") {


            var TbodyModal = $("#TbodyModal");
            TbodyModal.empty();
            TbodyModal.append(repetidos);

            var modalRepetidos = $("#modalRepetidos");
            modalRepetidos.modal("show");

        } else {

            var CargarFinalizacionArchivo = $("#CargarFinalizacionArchivo");
            CargarFinalizacionArchivo.modal('show');

        }

      
    });


    var btnUpload = $("#btnUpload");

    btnUpload.click(function () {

        cargarInformacionArchivo();

    });

    var btnArchivo = $("#btnValidarArchivo");
    btnArchivo.click(function () {
        validarDocumento();

    });

});

function nivelCuenta() {

    var modalNivelCuenta = $("#modalNivelCuenta");
    modalNivelCuenta.modal("show");

}

function guardarArchivoInformacion() {

    var formData = new FormData();
    datas = JSON.stringify(datas);
    formData.append("datas", datas);

    $.ajax({
        url: 'GuardarInformacionPlanUnicoCuentas.ashx',
        method: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function (rsult) {

            var CargarFinalizacionArchivo = $("#CargarFinalizacionArchivo");
            CargarFinalizacionArchivo.modal('hide');
            
            var modalArchivoGuardado = $("#modalArchivoGuardado");
            modalArchivoGuardado.modal("show");

            var btnMenuPrincipal = $("#btnMenuPrincipal");
            btnMenuPrincipal.click(function () {

                window.location.href = "MenuPrincipal.aspx";

            });

        },
        error: function (err) {



        }

    });
}



function cargarInformacionArchivo() {

    animacion();
    var valFiles = $('#FileUpload1').val();

    if (valFiles == "") {

        // var errorCargarArchivo = $("#errorCargarArchivo");
        //errorCargarArchivo.css("display", "block");

    } else {

        //var ArchivoInvalido = $("#ArchivoInvalido");
        //ArchivoInvalido.css("display", "block");

        //var errorCargarArchivo = $("#errorCargarArchivo");
        //errorCargarArchivo.css("display", "none");

    }
    var files = $('#FileUpload1')[0].files;


    if (files.length > 0) {

        var formData = new FormData();
        for (var i = 0 ; i < files.length; i++) {
            formData.append(files[i].name, files[i]);
        }

        var nombreHoja = $("#NombreHoja").val();
        var fila = $("#FilaHoja").val();
        var Codigocuenta = $("#codigoCuenta").val();
        var nombreCuenta = $("#nombreCuenta").val();
        var nivelCuenta = $("#nivelCuenta").val();



        formData.append("nombreHoja", nombreHoja);
        formData.append("fila", fila);
        formData.append("Codigocuenta", Codigocuenta);
        formData.append("nombreCuenta", nombreCuenta);
        formData.append("nivelCuenta", nivelCuenta);


        var LineaInicio = $("#LineaInicio").val();
        var LineaFinal = $("#LineaFinal").val();

        formData.append("LineaInicio", LineaInicio);
        formData.append("LineaFinal", LineaFinal);


        $.ajax({
            url: 'AgregarPlanUnicoCuentas.ashx',
            method: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (result) {

     

                datas = JSON.parse(result);;
                var data = JSON.parse(result);

             
                var repetidos = repetivos(data);


                if (repetidos != "") {

                    var TbodyModal = $("#TbodyModal");
                    TbodyModal.append(repetidos);

                    var modalRepetidos = $("#modalRepetidos");
                    modalRepetidos.modal("show");

                }
          


                var MyArray = data.Table;
                var temp = "";
                temp += "<tr>";
                temp += "<td>#</td>";             
                temp += "<td>Cuenta</td>";
                temp += "<td>Descripcion</td>";
                temp += "<td>Opciones</td>";
                temp += "</tr>";

                for (var i = 0; i < data.length ; i++) {

                    temp += "<tr id=" + data[i].numCuenta + " >";
                    temp += "<td>" + data[i].numCuenta + "</td>";
                    temp += "<td>" + data[i].cuenta + "</td>";
                    temp += "<td>" + data[i].nombreCuenta + "</td>";
                    temp += "<td id='" + data[i].cuenta + "_Icono'  onclick='elminarRepetidos(" + i + "," + data[i].numCuenta + ")'><a><button type='button' class='btn btn-outline btn-danger btn-xs'>Eliminar Cuenta</button></a></td>";
                   

                    temp += "</tr>";


                }



                var informe = $("#tbody");
                informe.append(temp);
                //      console.log("----------------------------------------------------------------------------------------------");





            },
            error: function (err) {
                var ArchivoInvalido = $("#ArchivoInvalido");
                ArchivoInvalido.css("display", "block");

            }

        });

    }

    pararAnimacion();



}

function animacion() {

    $("#element").introLoader();
}

function pararAnimacion() {
    var loader = $('#element').data('introLoader');
    loader.stop();

}

function subirArchivo() {



    animacion();
    var valFiles = $('#FileUpload1').val();

    if (valFiles == "") {

        // var errorCargarArchivo = $("#errorCargarArchivo");
        //errorCargarArchivo.css("display", "block");

    } else {

        //var ArchivoInvalido = $("#ArchivoInvalido");
        //ArchivoInvalido.css("display", "block");

        //var errorCargarArchivo = $("#errorCargarArchivo");
        //errorCargarArchivo.css("display", "none");

    }
    var files = $('#FileUpload1')[0].files;


    if (files.length > 0) {

        var formData = new FormData();
        for (var i = 0 ; i < files.length; i++) {
            formData.append(files[i].name, files[i]);
        }

        var nombreHoja = $("#NombreHoja").val();
        var fila = $("#FilaHoja").val();
        var cuenta = $("#cuenta").val();
        var nombreCuenta = $("#nombreCuenta").val();
        var valorCuenta = $("#valorCuenta").val();


        formData.append("nombreHoja", nombreHoja);
        formData.append("fila", fila);
        formData.append("cuenta", cuenta);
        formData.append("nombreCuenta", nombreCuenta);
        formData.append("valorCuenta", valorCuenta);






        var LineaInicio = $("#LineaInicio").val();
        var LineaFinal = $("#LineaFinal").val();

        formData.append("LineaInicio", LineaInicio);
        formData.append("LineaFinal", LineaFinal);


        $.ajax({
            url: 'AgregarPlanUnicoCuentas.ashx',
            method: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (result) {
            }
        });
    }
}

function validarDocumento() {



    var valFiles = $('#FileUpload1').val();

    if (valFiles == "") {



    } else {




        //var ArchivoInvalido = $("#ArchivoInvalido");
        //ArchivoInvalido.css("display", "block");

        //var errorCargarArchivo = $("#errorCargarArchivo");
        //errorCargarArchivo.css("display", "none");

    }
    var files = $('#FileUpload1')[0].files;


    if (files.length > 0) {

        var formData = new FormData();
        for (var i = 0 ; i < files.length; i++) {
            formData.append(files[i].name, files[i]);
        }

       

       var filas = $("#fila").val();
        var columnas = $("#columna").val();
        var nombreHoja = $("#NombreHoja").val();


        formData.append("filas", filas);
        formData.append("columnas", columnas);
        formData.append("nombreHoja", nombreHoja);


        $.ajax({
            url: 'ValidacionArchivo.ashx',
            method: 'post',
            data: formData,
            contentType: false,
            processData: false,
            success: function (result) {
                var InformacionTables = $("#InformacionTables");
                var InformacionTabla = $("#InformacionTabla");
                var data = JSON.parse(result);
                var ext = data[0];
                var ArchivoTxt = $("#ArchivoTxt");
                var DocumentoExcel = $("#DocumentoExcel");
                var btnDisplay = $("#btnDisplay");

                if (ext == ".txt") {

                    ArchivoTxt.css("display", "block");

                }
                if (ext == ".xlsx" || ext == ".xls") {

                    DocumentoExcel.css("display", "block");

                }


                btnDisplay.css("display", "block");
                var nombreArchivo = data[1];
                InformacionTabla.text("El archivo  " + nombreArchivo + " es valido !!!!");
                InformacionTables.css("display", "block");

            },
            error: function (err) {

                var ArchivoInvalido = $("#ArchivoInvalido");
                ArchivoInvalido.css("display", "block");

            }


        });



    }



}


function eliminarCuenta(i, cuenta) {

    alert(i + " " + cuenta);

    var rSultTable = $(".tableResult" + i);
    rSultTable.empty();

    var row = $("#" + cuenta + "");
    row.empty();

    data = informacion;
    //alert(i);



    for (var j = 0 ; j <= data.length - 1 ; j++) {

        if (data[j].numCuenta == (i + 1)) {
            data.splice(j, 1);
        }
    }



    // data.splice(i, 1);

    informacion = data;
    // console.log(datas);
    //  console.log("-----------------------------------");

    console.log(datas);

    // console.log(datas);

    informacion = "";


}


function repetivos(data) {



    var temp = "";
    for (var i = 0; i <= data.length - 1 ; i++) {

        for (var j = 0 ; j <= data.length - 1; j++) {

            if (i != j) {
                if (j != i) {

                    if (data[j].cuenta == data[i].cuenta) {
                        temp += "<tr id='cuentaRepetidos" + j + "'>";
                        temp += "<td style='display:block'>" + data[j].numCuenta + "</td>";
                        temp += "<td>" + data[j].cuenta + "</td>";
                        temp += "<td>" + data[j].nombreCuenta + "</td>";                      
                        temp += "<td id='" + data[j].cuenta + "_Icono'  onclick='elminarRepetidos(" + j + "," + data[j].numCuenta + ")'><a><button type='button' class='btn btn-outline btn-danger btn-xs'>Eliminar Cuenta</button></a></td>";
                        temp += "</tr>";

                    }
                }
            }
        }
    }


    return temp;

}


function eliminarCuenta(i, cuenta) {




    var row = $("#" + cuenta + "");
    row.empty();


    data = datas;

    for (var j = 0 ; j <= data.length - 1 ; j++) {
        //alert(data[j].numCuenta);
        if (data[j].numCuenta == (cuenta)) {
            alert("Prueba");
            data.splice(j, 1);

        }
    }

    // data.splice(i, 1);

    datas = data;
    console.clear();
    console.log(datas);
    // console.log(datas);

    data = "";


   

}

function elminarRepetidos(i, cuenta) {

    var cuentaRepetidos = $("#cuentaRepetidos" + i);
    cuentaRepetidos.empty();


    var row = $("#" + cuenta + "") ;
    row.empty();
   

    data = datas;

    for (var j = 0 ; j <= data.length - 1 ; j++) {
        //alert(data[j].numCuenta);
        if (data[j].numCuenta == (cuenta)) {
          
            data.splice(j, 1);
            
        }
    }

    // data.splice(i, 1);

    datas = data;
    console.clear();
    console.log(datas);
    // console.log(datas);

    data = "";





};