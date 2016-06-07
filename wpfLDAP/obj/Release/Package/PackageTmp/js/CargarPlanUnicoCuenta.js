var informacion = "";
$(document).ready(function () {

    var btnNivelCuentas = $("#btnNivelCuentas");
    btnNivelCuentas.click(function () {
        nivelCuenta();
    });

    animacion();

    var btnGuarNuevoArchivo = $("#btnGuarNuevoArchivo");
    btnGuarNuevoArchivo.click(function () {

        guardarArchivoInformacion();

    });

    var GuardarInformacion = $("#GuardarInformacion");
    GuardarInformacion.click(function () {
        var CargarFinalizacionArchivo = $("#CargarFinalizacionArchivo");
        CargarFinalizacionArchivo.modal('show');

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
    formData.append("informacion", informacion);

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

                alert(result.d);

                informacion = result;
                var data = JSON.parse(result);

                var MyArray = data.Table;
                var temp = "";
                temp += "<tr>";
                temp += "<td>Cuenta</td>";
                temp += "<td>Descripcion</td>";
                temp += "</tr>";

                for (var i = 0; i < data.length ; i++) {

                    temp += "<tr>";
                    temp += "<td id=" + data[i].Cuenta + ">" + data[i].Cuenta + "</td>";
                    temp += "<td>" + data[i].NombreCuenta + "</td>";

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