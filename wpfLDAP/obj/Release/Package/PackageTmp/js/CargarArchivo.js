var datas = "";


$(document).ready(function () {

    alert("Prueba");

    var btnNivelCuentas = $("#btnNivelCuentas");
    btnNivelCuentas.click(function () {
        nivelCuenta();
    });
    var tempEcuacionPatrimonial = "";
    var btn = $("#btn");
    var AgregarCuentaUsuario = $("#AgregarCuentaUsuario");
    AgregarCuentaUsuario.click(function () {


        agregarCuentaNoRegistrada();

    });
    btn.click(function () {

        descargaDocumentoExcel();

    });

    var DescargaValidacionDocumentoExcel = $("#DescargaValidacionDocumentoExcel");
    DescargaValidacionDocumentoExcel.click(function () {

        descargaDocumentoExcel();

    });
    var btnUpload = $("#btnUpload");

    btnUpload.click(function () {
        cargarInformacionArchivo();
    });

    function agregarCuentaNoRegistrada() {
        animacion();
        var InputCodigoCuenta = $("#InputCodigoCuenta").val();
        var DescripcionCuenta = $("#DescripcionCuenta").val();
        var Cuenta = {

            cuenta: InputCodigoCuenta,
            nombreCuenta: DescripcionCuenta


        };



        $.ajax({
            url: "CargueArchivo.aspx/RegistoCuentasXclienteNoregistradas",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(Cuenta),
            success: function (rSult) {

                if (rSult = true) {

                    var IdNombreCuenta = $("#" + InputCodigoCuenta + "_NombreCuenta");
                    var idIcon = $("#" + InputCodigoCuenta + "_Icono");
                    idIcon.empty();
                    idIcon.append("<td style='color:green'><i class='fa fa-check-circle'></i></td>");
                    IdNombreCuenta.empty();
                    IdNombreCuenta.text(DescripcionCuenta);
                    var modalAgreagrCuenta = $("#AgregarCuenta");
                    modalAgreagrCuenta.modal('hide');


                }

                pararAnimacion();
            },
            error: function (err) {
                alert("Fail");
            }


        });


    }

    function repetivos(data) {



        var temp = "";
        for (var i = 0; i <= data.length - 1 ; i++) {

            for (var j = 0 ; j <= data.length - 1; j++) {

                if (i != j) {
                    if (j != i) {

                        if (data[j].Cuenta == data[i].Cuenta) {
                            temp += "<tr>";
                            temp += "<td>" + data[i].Cuenta + "</td>";
                            temp += "<td>" + data[i].ValorCuenta + "</td>";
                            console.log(temp);
                            temp += "</tr>";

                        }
                    }
                }
            }
        }


        return temp;

    }

    function nivelCuenta() {

        var modalNivelCuenta = $("#modalNivelCuenta");
        modalNivelCuenta.modal("show");

    }

    function cargarInformacionArchivo() {
        animacion();
        var nombreHoja = $("#NombreHoja").val();
        var fila = $("#FilaHoja").val();
        var Codigocuenta = $("#codigoCuenta").val();
        var nombreCuenta = $("#nombreCuenta").val();



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




            var fila = $("#FilaHoja").val();
            var cuenta = $("#cuenta").val();
            var valorCuenta = $("#valorCuenta").val();
            var nivelCuenta = $("#nivelCuenta").val();



            formData.append("nombreHoja", nombreHoja);
            formData.append("fila", fila);
            formData.append("cuenta", cuenta);
            formData.append("valorCuenta", valorCuenta);
            formData.append("nivelCuenta", nivelCuenta);


            var LineaInicio = $("#LineaInicio").val();
            var LineaFinal = $("#LineaFinal").val();

            formData.append("LineaInicio", LineaInicio);
            formData.append("LineaFinal", LineaFinal);


            $.ajax({
                url: 'UploadHandler.ashx',
                method: 'post',
                data: formData,
                contentType: false,
                processData: false,
                success: function (result) {


                    alert(result);
                    datas = result;
                    var data = JSON.parse(result);
                    var MyArray = data.Table;
                    var temp = "";

                    var NumeroRepetidos = repetivos(data);

                    if (NumeroRepetidos != "") {
                        var TbodyModal = $("#TbodyModal");
                        TbodyModal.append(NumeroRepetidos);

                        var modalRepetidos = $("#modalRepetidos");
                        modalRepetidos.modal("toggle");
                    }


                    if (NumeroRepetidos == "") {

                        var modalnoRepetidos = $("#modalnoRepetidos");
                        modalnoRepetidos.modal("show");


                    }



                    temp += "<tr>";
                    temp += "<td>Cuenta</td>";
                    temp += "<td>Descripcion</td>";
                    temp += "<td>ValorCuenta</td>";
                    temp += "<td>Opciones</td>"
                    temp += "</tr>";

                    var primervalor = 0;
                    var segundoValor = 0;
                    var tercerValor = 0;
                    var cuartoValor = 0;
                    var quintoValor = 0;

                    var ResultPrimerValor = 0;
                    var ResultSegundoValor = 0;

                    var contExcepciones = "";
                    for (var i = 0; i < data.length ; i++) {



                        if (data[i].Cuenta == "100000") {
                            primervalor = parseFloat(data[i].ValorCuenta);


                        }
                        if (data[i].Cuenta == "200000") {
                            segundoValor = parseFloat(data[i].ValorCuenta);

                        }
                        if (data[i].Cuenta == "300000") {
                            tercerValor = parseFloat(data[i].ValorCuenta);

                        }
                        if (data[i].Cuenta == "400000") {
                            cuartoValor = parseFloat(data[i].ValorCuenta);

                        }
                        if (data[i].Cuenta == "500000") {
                            quintoValor = parseFloat(data[i].ValorCuenta);

                        }


                        ResultPrimerValor = parseFloat(primervalor + quintoValor);
                        ResultSegundoValor = parseFloat(segundoValor + tercerValor + cuartoValor);




                        tempEcuacionPatrimonial = "<tr>";
                        tempEcuacionPatrimonial += "<td>" + '10000 Valor ' + primervalor + '</br>' + '50000 Valor ' + quintoValor + ' </br> ' + "</td>";
                        tempEcuacionPatrimonial += "<td>" + ResultPrimerValor + "</td>";
                        tempEcuacionPatrimonial += "<td>" + '20000 Valor ' + segundoValor + '</br>' + '30000 Valor ' + tercerValor + ' </br> ' + '40000 Valor ' + cuartoValor + "</td>";
                        tempEcuacionPatrimonial += "<td>" + ResultSegundoValor + "</td>";
                        tempEcuacionPatrimonial += "</tr>";


                        if (data[i].EstadoValorCuenta == "Mal") {

                            temp += "<tr class='danger'>";
                            temp += "<td id=" + data[i].Cuenta + ">" + data[i].Cuenta + "</td>";
                            temp += "<td>" + data[i].NombreCuenta + "</td>";
                            temp += "<td>" + data[i].ValorCuenta + "</td>";
                            temp += "</tr>";


                            contExcepciones += "<tr>";
                            contExcepciones += "<td id=" + data[i].Cuenta + ">" + data[i].Cuenta + "</td>";
                            contExcepciones += "<td id=" + data[i].NombreCuenta + ">" + data[i].Cuenta + "</td>"; NombreCuenta
                            contExcepciones += "<td>" + data[i].ValorCuenta + "</td>";

                            contExcepciones += "</tr>";



                        } else {

                            if (data[i].NombreCuenta == "Cuenta no registrada") {

                                temp += "<tr>";
                                temp += "<td id=" + data[i].Cuenta + ">" + data[i].Cuenta + "</td>";
                                temp += "<td id =" + data[i].Cuenta + "_NombreCuenta>" + data[i].NombreCuenta + "</td>";
                                temp += "<td>" + data[i].ValorCuenta + "</td>";
                                temp += "<td id='" + data[i].Cuenta + "_Icono' onclick='agregarCuenta(" + data[i].Cuenta + ")'><a href='#'><button type='button' class='btn btn-danger btn-sm'>Cuenta no Registrada</button></a></td>";




                                temp += "</tr>";


                            }
                            else {

                                temp += "<tr>";
                                temp += "<td id=" + data[i].Cuenta + ">" + data[i].Cuenta + "</td>";
                                temp += "<td>" + data[i].NombreCuenta + "</td>";
                                temp += "<td>" + data[i].ValorCuenta + "</td>";
                                temp += "<td><a href='#'><button type='button' class='btn btn-success btn-sm'>Cuenta Registrada</button></a></td>";
                                temp += "</tr>";
                            }
                        }
                    };

                    var TbodyEcuacionPatrimonial = $("#TbodyEcuacionPatrimonial");
                    TbodyEcuacionPatrimonial.append(tempEcuacionPatrimonial);



                    var informe = $("#informe");
                    informe.append(contExcepciones);
                    var tablenew = $("#tbody");
                    var resultNivel = 0;
                    if (contExcepciones != "") {
                        var GuardarArchivo = $("#GuardarArchivo");

                        GuardarArchivo.css("display", "block");

                        var GuardarInformacion = $("#GuardarInformacion");

                        GuardarInformacion.css("display", "none");
                    } else {
                        var GuardarInformacion = $("#GuardarInformacion");

                        GuardarInformacion.css("display", "block");

                        var GuardarArchivo = $("#GuardarArchivo");

                        GuardarArchivo.css("display", "none");

                    }

                    contExcepciones = "";
                    tablenew.empty();
                    tablenew.append(temp);

                    var resulCuenta = 0;
                    var cuentaComparar = 0;
                    var idCuenta = "";
                    var varPrimariaAuxDos = 0;
                    var resulCuentaDos = 0;
                    var cuentaCompararDos = 0;
                    var idCuentaDos = 0;
                    var cuentaPrueba = "";
                    var btnGuardarInformacion = $("#btnGuardarInformacion");

                    btnGuardarInformacion.click(function () {



                        var BlanceCuentas = $("#BlanceCuentas");
                        BlanceCuentas.modal("show");



                        guardarInformacion(datas);

                    });

                    var InformacionValidacionGrupo = $("#InformacionValidacionGrupo");




                    var tempCuenta = "";


                    for (var j = 1 ; j <= 9; j++) {

                        varPrimariaAux = j;
                        for (var p = 0 ; p <= 9; p++) {

                            tempCuenta = "";

                            resulCuenta = 0;

                            tempCuenta += "<tr>";
                            tempCuenta += "<td>";

                            for (var i = 0; i < data.length ; i++) {
                                var varAux = p;


                                if ((data[i].Cuenta.charAt(0) == varPrimariaAux.toString()) && (data[i].Cuenta.charAt(1) == varAux.toString()) && (data[i].Cuenta.charAt(2) == "0") && (data[i].Cuenta.charAt(3) == "0") && (data[i].Cuenta.charAt(4) == "0") && (data[i].Cuenta.charAt(5) == "0")) {

                                    cuentaComparar = parseFloat(data[i].ValorCuenta);

                                    idCuenta = data[i].Cuenta.toString();
                                    idNombreCuenta = data[i].NombreCuenta.toString();
                                }




                                if ((data[i].Cuenta.charAt(2) != "0" || data[i].Cuenta.charAt(3) != "0")) {
                                    if (data[i].Cuenta.charAt(0) == varPrimariaAux.toString()) {
                                        if ((data[i].Cuenta.charAt(4) == "0" && data[i].Cuenta.charAt(5) == "0")) {
                                            if (data[i].Cuenta.charAt(1) == varAux.toString()) {


                                                if (data[i] == "") {

                                                } else {


                                                    tempCuenta += data[i].Cuenta + " " + data[i].NombreCuenta + " Valor " + data[i].ValorCuenta;
                                                    tempCuenta += "</br>";
                                                }

                                                console.log(data[i].Cuenta);
                                                resulCuenta = resulCuenta + parseFloat(data[i].ValorCuenta);

                                            }



                                        }

                                    }

                                }


                            }

                            if (resulCuenta == 0) {

                            } else {

                                tempCuenta += "</td>";
                                tempCuenta += "<td>";
                                tempCuenta += resulCuenta;
                                tempCuenta += "</td>";
                                tempCuenta += "<td>";
                                tempCuenta += idCuenta + " " + '<h6>' + idNombreCuenta + '</h6>';
                                tempCuenta += "</td>";
                                tempCuenta += "<td>";
                                tempCuenta += cuentaComparar;
                                tempCuenta += "</td>";

                                tempCuenta += "</tr>";

                                InformacionValidacionGrupo.append(tempCuenta);



                            }

                            //console.log(cuentaComparar);
                        }

                    }




                    //      console.log("----------------------------------------------------------------------------------------------");

                    var informeAcumuladoBalance = $("#informeAcumuladoBalance");



                    var tempCuentaGrupo = "";
                    var variable = "";
                    var variableCuenta = 0;



                    for (var PrimerDigitoGrupo = 1 ; PrimerDigitoGrupo <= 9; PrimerDigitoGrupo++) {
                        resulCuenta = 0;
                        tempCuentaGrupo = "";
                        tempCuentaGrupo = "<tr>"
                        tempCuentaGrupo += "<td>";
                        varPrimariaAuxCuenta = PrimerDigitoGrupo;

                        for (var SegundoDigitoGrupo = 0 ; SegundoDigitoGrupo <= 9; SegundoDigitoGrupo++) {


                            for (var icuentas = 0; icuentas < data.length ; icuentas++) {

                                var varAuxGrupo = SegundoDigitoGrupo;


                                if (data[icuentas].Cuenta.charAt(0) == varPrimariaAuxCuenta.toString() && data[icuentas].Cuenta.charAt(1) == "0" && data[icuentas].Cuenta.charAt(2) == "0" && data[icuentas].Cuenta.charAt(3) == "0" && data[icuentas].Cuenta.charAt(4) == "0" && data[icuentas].Cuenta.charAt(5) == "0") {
                                    variable = data[icuentas].Cuenta;
                                    variableCuenta = parseFloat(data[icuentas].ValorCuenta);
                                }




                                if (data[icuentas].Cuenta.charAt(0) == varPrimariaAuxCuenta.toString()) {
                                    if (data[icuentas].Cuenta.charAt(1) == varAuxGrupo.toString() && data[icuentas].Cuenta.charAt(1) != "0") {
                                        if ((data[icuentas].Cuenta.charAt(2) == "0" && data[icuentas].Cuenta.charAt(3) == "0")) {
                                            if ((data[icuentas].Cuenta.charAt(4) == "0" && data[icuentas].Cuenta.charAt(5) == "0")) {



                                                tempCuentaGrupo += data[icuentas].Cuenta + " Valor " + data[icuentas].ValorCuenta + "</br>";


                                                //   console.log(data[i].Cuenta);
                                                resulCuenta = resulCuenta + parseFloat(data[icuentas].ValorCuenta);

                                            }


                                        }

                                    }

                                }


                            }



                            //console.log(cuentaComparar);
                        }

                        if (resulCuenta == 0) {

                        } else {

                            tempCuentaGrupo += "</td>";
                            tempCuentaGrupo += "<td>" + resulCuenta + "</td>";
                            tempCuentaGrupo += "<td>" + variable + "</td>";
                            tempCuentaGrupo += "<td>" + variableCuenta + "</td>";
                            informeAcumuladoBalance.append(tempCuentaGrupo);
                            variable = 0;
                            variableCuenta = 0;


                        }


                    }


                    informe.val = "Prueba";
                    pararAnimacion();

                },
                error: function (err) {
                    var ArchivoInvalido = $("#ArchivoInvalido");
                    ArchivoInvalido.css("display", "block");

                }


            });



        }



    }
    $('#validarDocumento').click(function () {

        alert("Prueba");

        validarDocumento();

    });


});

function cargarArchivoPlanUnicoCuentas() {


}

function agregarCuenta(idCuenta) {



    var InputCodigoCuenta = $("#InputCodigoCuenta");
    InputCodigoCuenta.empty();

    var InputCodigoCuenta = $("#InputCodigoCuenta");
    InputCodigoCuenta.val(idCuenta);
    var modalAgreagrCuenta = $("#AgregarCuenta");
    modalAgreagrCuenta.modal('show');




}

function animacion() {

    $("#element").introLoader();
}

function pararAnimacion() {
    var loader = $('#element').data('introLoader');
    loader.stop();

}

function onAfter() {
    var loader = $('#element').data('introLoader');
    loader.onAfter();

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

function controles() {

}

function descargaDocumentoExcel() {

    alert(datas);
    var formData = new FormData();
    formData.append("informacion", datas);


    $.ajax({

        url: "DescargasArvhivos.ashx",
        method: 'post',
        contentType: false,
        processData: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (result) {


            var myModalDescargaDocumento = $("#myModalDescargaDocumento");
            myModalDescargaDocumento.modal('show');



        },
        error: function (err) {
            alert("Fail");
        }


    });



}

function guardarInformacion(informacion) {

    var formData = new FormData();
    formData.append("informacion", informacion);
    var datepicker = $("#datepicker").val();
    formData.append("fechaInicialPeriodo", datepicker);



    $.ajax({
        url: 'Prueba.ashx',
        method: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function () {

            //  alert("Informacion Guardada correctamente...");
            $('#modalGuardarInformacion').modal('toggle');
            var CargarFinalizacionArchivo = $("#CargarFinalizacionArchivo");
            CargarFinalizacionArchivo.modal('show');
            var btnGuarNuevoArchivo = $('#btnGuarNuevoArchivo');
            btnGuarNuevoArchivo.click(function () {
                window.location.href = "InformacionValidacionSubirArchivo.aspx";
            });



        },
        error: function (err) {



        }

    })
}