var datas = "";
var extGlobal = "";
var numeroFilasFinal = "";
var data = "";
var NombresHojasExcel="";



$(document).ready(function () {

    var myParam = location.search.split('id=')[1];

  


    console.log(myParam);
    var array = $("#array");
    array.click(function () {

        console.log("---------------------------");
        console.log(datas);
        console.log("---------------------------");

    });
    var generarReorteExcel = $("#generarReorteExcel");
    generarReorteExcel.click(function () {

        reporteTableArchivo();

    });
    var guarInformacionCuentas = $("#guarInformacionCuentas");
    guarInformacionCuentas.click(function () {

       
        var BlanceCuentas = $("#BlanceCuentas");
        BlanceCuentas.modal("hide");
        guardarInformacion(datas);

    });


    var pruebasModal = $("#pruebasModal");
    pruebasModal.click(function () {



        var rsult = repetivos(datas);

        var TbodyModal = $("#TbodyModal");
        TbodyModal.empty();
        TbodyModal.append(rsult);
        var modalRepetidos = $("#modalRepetidos");
        modalRepetidos.modal("show");





    });
    var GuardarInformacion = $("#GuardarInformacion");
    
    GuardarInformacion.click(function () {
        var BlanceCuentas = $("#BlanceCuentas");
        BlanceCuentas.modal("show");

    });

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

        var LineaInicio = $("#LineaInicio").val();
        var LineaFinal = $("#LineaFinal").val();
        var LineaFinalP = $("#LineaFinal");
        var LineaInicioP = $("#LineaInicio");
        var validacionLineaInicio = $("#validacionLineaInicio");
        var validacionLineafinal = $("#validacionLineafinal");


        if (extGlobal == ".xlsx") {


            validacionHojaExecel();
           
          cargarInformacionArchivo();

        }

        LineaInicioP.click(function () {

            $("#LineaInicio").popover('hide');


        });

        LineaFinalP.click(function () {

            $("#LineaFinal").popover('hide');


        });

        if (LineaInicio == "" && extGlobal == ".txt") {

         
            var dd = $('#LineaInicio');
            dd.attr("data-content", "Ingrese el valor de la linea de inicio del documento ");
           
            dd.popover('show');        

            validacionLineaInicio.addClass("has-error");
        }

        if (LineaFinal != "" && extGlobal == ".txt") {

          
            var prueba = isNormalInteger(LineaFinal);
            
            if (prueba == false) {

                var LineaFinal = $('#LineaFinal');
                LineaFinal.remove("data-content");
                LineaFinal.attr("data-content", "Debe ingresar un valor numerico entero ejemplo:298");
                LineaFinal.popover('show');
                validacionLineafinal.addClass("has-error");

            }
        }


        if (LineaInicio != "" && extGlobal == ".txt") {

            var prueba = isNormalInteger(LineaInicio);

            if (prueba == false) {

                var LineaInicio = $('#LineaInicio');
                LineaInicio.remove("data-content");
                LineaInicio.attr("data-content", "Debe ingresar un valor numerico entero ejemplo:2");
                LineaInicio.popover('show');
                validacionLineaInicio.addClass("has-error");

            }
            
        }





        if (LineaFinal == "" && extGlobal == ".txt") {

            var lineaFinal = $('#LineaFinal');
            lineaFinal.attr("data-content", "Ingrese el valor de la linea de final del documento ");
            lineaFinal.popover('show');

               
            validacionLineafinal.addClass("has-error");

        }

       


        if ((LineaInicio != "") && (LineaFinal != "")) {

            if ((isNormalInteger(LineaInicio) == true) && (isNormalInteger(LineaFinal) == true))
            {
              
                LineaInicio = parseInt(LineaInicio);
                LineaFinal = parseInt(LineaFinal);
                numeroFilasFinal = parseInt(numeroFilasFinal);

              

                if (LineaInicio <= 0) {

                    var LineaInicio = $('#LineaInicio');
                    LineaInicio.remove("data-content");
                    LineaInicio.attr("data-content", "El valor linea inicial debe ser diferente de 0");
                    validacionLineaInicio.addClass("has-error");
                    LineaInicio.popover('show');
                   

                }

            if (LineaInicio > LineaFinal) {


                    var LineaFinal = $('#LineaFinal');
                    LineaFinal.remove("data-content");
                    LineaFinal.attr("data-content", "El valor linea inicial debe ser menor al del la linea final");
                    LineaFinal.popover('show');
                    validacionLineafinal.addClass("has-error");


               }


            if (numeroFilasFinal < LineaFinal) {
                 
                   var LineaFinal = $('#LineaFinal');
                   LineaFinal.remove("data-content");
                   LineaFinal.attr("data-content", "El valor linea final no puede ser mayo a " + numeroFilasFinal);
                   LineaFinal.popover('show');
                   validacionLineafinal.addClass("has-error");
                   

               }

               
            if ((LineaInicio > 0) && (LineaInicio < LineaFinal) && (LineaInicio < LineaFinal) && (numeroFilasFinal >= LineaFinal)) {
                validacionLineaInicio.removeClass("has-error");
                validacionLineafinal.removeClass("has-error");
                cargarInformacionArchivo();
                }
            }

        }
      //  cargarInformacionArchivo();
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

                        if (data[j].cuenta == data[i].cuenta) {
                            temp += "<tr id='cuentaRepetidos"+ j + "'>";
                            temp += "<td style='display:block'>" + data[j].numCuenta + "</td>";
                            temp += "<td>" + data[j].cuenta + "</td>";
                            temp += "<td>" + data[j].valorCuenta + "</td>";
                            temp += "<td id='" + data[j].cuenta + "_Icono'  onclick='elminarRepetidos(" + j + ","  + data[j].numCuenta + ")'><a><button type='button' class='btn btn-outline btn-danger btn-xs'>Eliminar Cuenta</button></a></td>";
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

                 

                    datas = JSON.parse(result);
                   
                    var data = JSON.parse(result);
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
                    temp += "<th>#</th>";
                    temp += "<th>Cuenta</th>";
                    temp += "<th>Descripcion</th>";
                    temp += "<th>ValorCuenta</th>";
                    temp += "<th colspan='2'>Opciones</th>"
                    temp += "</tr>";

                    ecuacionPatrinmonial(data);
                    validarClase(data);
                    clase(data);


                    for (var i = 0; i < data.length ; i++) {
                       

                            if (data[i].EstadoValorCuenta == "Mal") {

                                temp += "<tr class='danger'>";
                                temp += "<td id=" + data[i].cuenta + ">" + data[i].cuenta + "</td>";
                                temp += "<td>" + data[i].nombreCuenta + "</td>";
                                temp += "<td>" + data[i].ValorCuenta + "</td>";
                                temp += "</tr>";


                                contExcepciones += "<tr>";
                                contExcepciones += "<td id=" + data[i].cuenta + ">" + data[i].cuenta + "</td>";
                                contExcepciones += "<td id=" + data[i].nombreCuenta + ">" + data[i].cuenta + "</td>";
                                contExcepciones += "<td>" + data[i].valorCuenta + "</td>";

                                contExcepciones += "</tr>";

                            }

                       

                        else {


                            if (data[i].nombreCuenta == "Cuenta no registrada") {




                                var CuentasNoRegistradasExcel = $("#CuentasNoRegistradasExcel");

                                var cuentaNoRegistradas = "";
                                var cuentaNoRegistradasExcel = "";

                                cuentaNoRegistradasExcel += "<tr id=Celda" + i + ">";
                                cuentaNoRegistradasExcel += "<td id=" + data[i].cuenta + ">" + data[i].cuenta + "</td>";
                                cuentaNoRegistradasExcel += "</tr>";


                                cuentaNoRegistradas += "<tr id=Celda" + i + ">";
                             
                                cuentaNoRegistradas += "<td id=" + data[i].cuenta + ">" + data[i].cuenta + "</td>";
                                cuentaNoRegistradas += "<td><input type='text' class='form-control' id='NombreCuentaSinRegistrar" + i + "' placeholder='Nombre Cuenta'></td>";

                                cuentaNoRegistradas += "<td><button type='button' onclick='agregarTodaslasCuentas(" + data[i].cuenta + "," + i + ")' class='btn btn-outline btn-primary btn-sm'>Agregar Cuenta</button></td>";
                                cuentaNoRegistradas += "</tr>";


                                var CuentasNoRegistradas = $("#CuentasNoRegistradas");
                                CuentasNoRegistradas.append(cuentaNoRegistradas);
                                CuentasNoRegistradasExcel.append(cuentaNoRegistradasExcel);

                            

                                    temp += "<tr>";
                                    temp += "<td style=''>" + data[i].numCuenta + "</td>";
                                    temp += "<td id=" + data[i].cuenta + ">" + data[i].cuenta + "</td>";
                                    temp += "<td id =" + data[i].cuenta + "_NombreCuenta>" + data[i].nombreCuenta + "</td>";
                                    temp += "<td>" + numberWithCommas(data[i].valorCuenta) + "</td>";
                                    temp += "<td id='" + data[i].cuenta + "_Icono' onclick='agregarCuenta(" + data[i].cuenta + "," + i + ")'><a href='#'><button type='button' class='btn btn-outline btn-danger btn-xs'>Cuenta Sin Registrar</button></a></td>";



                                    temp += "</tr>";
                               
                            }

                            else {

                           
                                    temp += "<tr class='tableResult" + i + "'>";
                                    temp += "<td style=''>" + data[i].numCuenta + "</td>";
                                    temp += "<td id=" + data[i].cuenta + ">" + data[i].cuenta + "</td>";
                                    temp += "<td id =" + data[i].cuenta + "_NombreCuenta>" + data[i].nombreCuenta + "</td>";
                                    temp += "<td>" + numberWithCommas(data[i].valorCuenta) + "</td>";
                                    temp += "<td id='" + data[i].cuenta + "_Icono' '><a href='#'><button type='button' class='btn btn-outline btn-success btn-xs'>Cuenta Registrarda</button></a></td>";




                                    temp += "</tr>";
                                }
                            
                        }


                    }

                    var tablenew = $("#tbody");

                    tablenew.empty();
                    tablenew.append(temp);



                    var modalPrueba = $("#modalPrueba");
                    modalPrueba.modal('show');
                 

                    pararAnimacion();

                },
                error: function (err) {




                    var ArchivoInvalido = $("#ArchivoInvalido");
                    ArchivoInvalido.css("display", "block");


                    pararAnimacion();

                }


            });



        }



    }
    $('#validarDocumento').click(function () {

        alert("Prueba");

        validarDocumento();

    });


});

function isNormalInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

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
             
                var hojasExcel = JSON.parse(data[2]);
                NombresHojasExcel = hojasExcel;
                var ext = data[0];
                var lineasArchivo = data[2];
               
                numeroFilasFinal = lineasArchivo;
                extGlobal = ext;
                var ArchivoTxt = $("#ArchivoTxt");
                var DocumentoExcel = $("#DocumentoExcel");
                var btnDisplay = $("#btnDisplay");

             

                if (ext == ".txt" || ext == ".TXT") {

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

function agregarTodaslasCuentas(idCuenta, i) {
    
    var cuenta = idCuenta;
    var nombreCuenta = $("#NombreCuentaSinRegistrar" + i).val();
    
   
    var Cuenta = {

        cuenta: cuenta,
        nombreCuenta: nombreCuenta


    };

    $.ajax({
     
        url: "CargueArchivo.aspx/registrarcuentaNoRegistrada",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(Cuenta),
     
        success: function (rSult) {

            var columna = $("#Celda" + i);
            columna.empty();

            


        },
        error: function (err) {
            alert("Fail");
        }


    });

  


}
function guardarInformacion(informacion) {

  

    var formData = new FormData();
    var informacionSerializada = JSON.stringify(informacion);

    formData.append("informacion", informacionSerializada);
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
function reporteTableArchivo() {

    $("#tableExcelCuentaNoRegistradas").table2excel({

        // exclude CSS class

        exclude: ".noExl",
        name: "Prueba.xls",
        filename: "Archivos"

    });



}
function eliminarCuenta(i, cuenta) {
    var rSultTable = $(".tableResult" + i );
    rSultTable.empty();

   
  
    data = datas;
    //alert(i);

  
   
    for (var j = 0 ; j <= data.length -1 ; j++) {

        if (data[j].numCuenta == (i + 1)) {            
          data.splice(j, 1);           
      }
    }



   // data.splice(i, 1);
 
    datas = data;
   // console.log(datas);
  //  console.log("-----------------------------------");

    console.log(datas);

   // console.log(datas);
    
    data = "";
 

}
function elminarRepetidos(i, cuenta) {

  


    var cuentaEliminar = $("#cuentaRepetidos" + i);
    cuentaEliminar.empty();

    var rSultTable = $(".tableResult" + i);
    rSultTable.empty();

    data = datas;

    for (var j = 0 ; j <= data.length - 1 ; j++) {
        //alert(data[j].numCuenta);
        if (data[j].numCuenta == (cuenta)) {

            data.splice(j, 1);

        }
    }

    // data.splice(i, 1);

    datas = data;

    console.log(datas);
    // console.log(datas);

    data = "";





};
function ecuacionPatrinmonial(data) {
    var primervalor = 0;
    var segundoValor = 0;
    var tercerValor = 0;
    var cuartoValor = 0;
    var quintoValor = 0;

    var ResultPrimerValor = 0;
    var ResultSegundoValor = 0;
    var contExcepciones = "";
    for (var i = 0; i < data.length ; i++) {



        if (data[i].cuenta == "100000") {
            primervalor = parseFloat(data[i].valorCuenta);


        }
        if (data[i].cuenta == "200000") {
            segundoValor = parseFloat(data[i].valorCuenta);

        }
        if (data[i].cuenta == "300000") {
            tercerValor = parseFloat(data[i].valorCuenta);

        }
        if (data[i].cuenta == "400000") {
            cuartoValor = parseFloat(data[i].valorCuenta);

        }
        if (data[i].cuenta == "500000") {
            quintoValor = parseFloat(data[i].valorCuenta);

        }

    }
    ResultPrimerValor = parseFloat(primervalor + quintoValor);
    ResultSegundoValor = parseFloat(segundoValor + tercerValor + cuartoValor);




    tempEcuacionPatrimonial = "<tr>";
    tempEcuacionPatrimonial += "<td>" + '10000 Valor ' + primervalor + '</br>' + '50000 Valor ' + quintoValor + ' </br> ' + "</td>";
    tempEcuacionPatrimonial += "<td>" + ResultPrimerValor + "</td>";
    tempEcuacionPatrimonial += "<td>" + '20000 Valor ' + segundoValor + '</br>' + '30000 Valor ' + tercerValor + ' </br> ' + '40000 Valor ' + cuartoValor + "</td>";
    tempEcuacionPatrimonial += "<td>" + ResultSegundoValor + "</td>";
    tempEcuacionPatrimonial += "</tr>";

    var TbodyEcuacionPatrimonial = $("#TbodyEcuacionPatrimonial");
    TbodyEcuacionPatrimonial.append(tempEcuacionPatrimonial);


}
function validarClase(data) {


    var resulCuenta = 0;
    var cuentaComparar = 0;
    var idCuenta = "";
    var varPrimariaAuxDos = 0;
    var resulCuentaDos = 0;
    var cuentaCompararDos = 0;
    var idCuentaDos = 0;
    var cuentaPrueba = "";

    var InformacionValidacionGrupo = $("#InformacionValidacionGrupo");

    for (var j = 1 ; j <= 9; j++) {

        varPrimariaAux = j;
        for (var p = 0 ; p <= 9; p++) {

            tempCuenta = "";

            resulCuenta = 0;

            tempCuenta += "<tr>";
            tempCuenta += "<td>";

            for (var i = 0; i < data.length ; i++) {
                var varAux = p;


                if ((data[i].cuenta.charAt(0) == varPrimariaAux.toString()) && (data[i].cuenta.charAt(1) == varAux.toString()) && (data[i].cuenta.charAt(2) == "0") && (data[i].cuenta.charAt(3) == "0") && (data[i].cuenta.charAt(4) == "0") && (data[i].cuenta.charAt(5) == "0")) {

                    cuentaComparar = parseFloat(data[i].valorCuenta);

                    idCuenta = data[i].cuenta.toString();
                    idNombreCuenta = data[i].nombreCuenta.toString();
                }




                if ((data[i].cuenta.charAt(2) != "0" || data[i].cuenta.charAt(3) != "0")) {
                    if (data[i].cuenta.charAt(0) == varPrimariaAux.toString()) {
                        if ((data[i].cuenta.charAt(4) == "0" && data[i].cuenta.charAt(5) == "0")) {
                            if (data[i].cuenta.charAt(1) == varAux.toString()) {


                                if (data[i] == "") {

                                } else {


                                    tempCuenta += data[i].cuenta + " Valor " + data[i].valorCuenta;
                                    tempCuenta += "</br>";
                                }

                                console.log(data[i].cuenta);
                                resulCuenta = resulCuenta + parseFloat(data[i].valorCuenta);

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
                tempCuenta += idCuenta;
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

    
   

}
function clase(data) {
    
    var tempCuentaGrupo = "";
    var variable = "";
    var variableCuenta = 0;

    var informeAcumuladoBalance = $("#informeAcumuladoBalance");

    for (var PrimerDigitoGrupo = 1 ; PrimerDigitoGrupo <= 9; PrimerDigitoGrupo++) {
        resulCuenta = 0;
        tempCuentaGrupo = "";
        tempCuentaGrupo = "<tr>"
        tempCuentaGrupo += "<td>";
        varPrimariaAuxCuenta = PrimerDigitoGrupo;

        for (var SegundoDigitoGrupo = 0 ; SegundoDigitoGrupo <= 9; SegundoDigitoGrupo++) {


            for (var icuentas = 0; icuentas < data.length ; icuentas++) {

                var varAuxGrupo = SegundoDigitoGrupo;


                if (data[icuentas].cuenta.charAt(0) == varPrimariaAuxCuenta.toString() && data[icuentas].cuenta.charAt(1) == "0" && data[icuentas].cuenta.charAt(2) == "0" && data[icuentas].cuenta.charAt(3) == "0" && data[icuentas].cuenta.charAt(4) == "0" && data[icuentas].cuenta.charAt(5) == "0") {
                    variable = data[icuentas].cuenta;
                    variableCuenta = parseFloat(data[icuentas].valorCuenta);
                }




                if (data[icuentas].cuenta.charAt(0) == varPrimariaAuxCuenta.toString()) {
                    if (data[icuentas].cuenta.charAt(1) == varAuxGrupo.toString() && data[icuentas].cuenta.charAt(1) != "0") {
                        if ((data[icuentas].cuenta.charAt(2) == "0" && data[icuentas].cuenta.charAt(3) == "0")) {
                            if ((data[icuentas].cuenta.charAt(4) == "0" && data[icuentas].cuenta.charAt(5) == "0")) {
                                tempCuentaGrupo += data[icuentas].cuenta + " Valor " + data[icuentas].valorCuenta + "</br>";


                                //   console.log(data[i].Cuenta);
                                resulCuenta = resulCuenta + parseFloat(data[icuentas].valorCuenta);

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

}
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
function validarNombreHoja(data,nombre)
{


   // alert(nombre);
    var rSult = false;

    for (var i = 0 ; i <= data.length ; i++) {

        if (data[i] == nombre)
        {

            rSult = true;

        }


    }

    return rSult;

}
function validacionHojaExecel() {

    var NombreHoja = $("#NombreHoja").val();
    var rSult = validarNombreHoja(NombresHojasExcel, NombreHoja);

    if (NombreHoja == "") {
        var validacionNombreHoja = $("#validacionNombreHoja");
        var nombreHoja = $('#NombreHoja');
        nombreHoja.attr("data-content", "Debe Ingresar el nombre de la hoja");
        nombreHoja.popover('show');
        validacionNombreHoja.addClass("has-error");

    }

    else if (rSult == false) {

        var validacionNombreHoja = $("#validacionNombreHoja");
        var nombreHoja = $('#NombreHoja');
        nombreHoja.attr("data-content", "No se encontro el nombre de la hoja , revise si esta bien escrito , o si contiene  mayusculas  ");
        nombreHoja.popover('show');
        validacionNombreHoja.addClass("has-error");
    }


    var FilaHoja = $("#FilaHoja").val();

  
    var filaHojaValidacion = isNormalInteger(FilaHoja);
  
    if (filaHojaValidacion == "") {

        var validacionFilaHoja = $("#validacionFilaHoja");
        var validacionHoja = $("#FilaHoja");
        validacionHoja.attr("data-content", "El campo se encuentra vacio Debe Ingresar un numero entero positivo");
        validacionHoja.popover('show');
        validacionFilaHoja.addClass("has-error");


    }


    else if (filaHojaValidacion == false) {

        var validacionFilaHoja = $("#validacionFilaHoja");
        var validacionHoja = $("#FilaHoja");
        validacionHoja.attr("data-content", "Debe Ingresar un numero entero positivo");
        validacionHoja.popover('show');
        validacionFilaHoja.addClass("has-error");
  
        
    }



    var cuenta = $("#cuenta").val();
    var rSultCuenta = isNormalInteger(cuenta);
    if (rSultCuenta == false) {

        var validacionCuenta = $("#validacionCuenta");
        var cuenta = $("#cuenta");
        cuenta.attr("data-content", "Debe Ingresar un numero entero positivo");
        cuenta.popover('show');
        validacionCuenta.addClass("has-error");

    }




}