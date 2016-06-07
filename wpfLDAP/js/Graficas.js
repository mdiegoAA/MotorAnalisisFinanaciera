var color = "black";
var GrafiacaMes = "";
var Graficarsult = "";
var idArchivoGolbal;
var cuentasGrafica = [];
var nombreCuneta = [];

$(document).ready(function () {

    var graficarR = $("#graficarR");
   
    graficarR.click(function () {

        var piechart = $("#piechart");
        piechart.empty();
        var datas = "";
        var datasInfo = {
            
            idArchivo : idArchivoGolbal
        
        
        }


        $.ajax({

            url: "Graficas.aspx/ListadoGraficaPIE",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(datasInfo),
            dataType: "json",

            success: function (result) {

                
             
                var codigoClase = $("#codigoClase").val();
                var LetraInicio = codigoClase.charAt(0);
                

                var data = JSON.parse(result.d);

                for (var i = 0; i < data.length; i++)
                {

                    if (EsGrupo(data[i].cuenta ) == true) {


                        if ((String(data[i].cuenta)).charAt(0) == LetraInicio) {

                         //   alert(data[i].cuenta);

                            nombreCuneta.push(data[i].nombreCuenta);
                            cuentasGrafica.push(parseFloat(data[i].valorCuenta));

                        }                    

                    }
                }

                console.log(nombreCuneta);
                console.log(cuentasGrafica);

                 datas = google.visualization.arrayToDataTable([

       ['NombreCuenta', 'Valor'],
       ["Prueba", 3511701396848.52]


                ]);

                datas.removeRow(0);

                var informacion = ([
                ]);





                for (var j = 0 ; j <= cuentasGrafica.length ; j++) {



                    informacion.push([(nombreCuneta[j]), parseFloat(cuentasGrafica[j])]);
                }

                console.log(informacion);

                //  informacion.push(["alejandro", 3511701396848]);
                console.log(datas);

                datas.addRows(informacion);





                //  data.addRows(['diego', 5]);

                var options = {
                    title: 'My Daily Activities'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(datas, options);



            }

        });

     
       
    });

    var GraficaPie = $("#GraficaPie");
    GraficaPie.click(function () {

        var RangoCuentaInicial = $("#datepicker").val();
        var RangoCuentaFinal = $("#datepicker2").val();
       
        var CentroCosto = $("#optionCentroCosto option:selected").val();


        var data = {
            fechaInicio:RangoCuentaInicial,
            fechaFinal: RangoCuentaFinal,
            centroCosto: CentroCosto
          

        }

        $.ajax({

            url: "Graficas.aspx/BuscarIdArchivoxCentroCosto_Fecha",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            dataType: "json",

            success: function (result) {

                var data = JSON.parse(result.d);

                var temp = "";
                temp += "<tr>";
                for (var i = 0; i < data.length; i++) {
                    temp += "<td>" + (i + 1) + "</td>";
                    temp += "<td>" + data[i].fechaArchivo + "</td>";
                    temp += "<td ><button type='button' onclick=myFunction('" + data[i].IdArchivo + "') class='btn btn-outline btn-primary btn-xs'>Seleccionar</button></td>"
                    temp += "</tr>";

                }



             

                var Tbody = $("#tbodyRsult");
                Tbody.empty();
                Tbody.append(temp);

                var modalGraficas = $("#modalGraficas");
                modalGraficas.modal("hide");
                var modalRsultFechas = $("#modalRsultFechas");
                modalRsultFechas.modal("show");
               



            },
            error: function (err) {
                alert("error");
            }


        });



    });


    var GraficaLine = $("#GraficaLine");
    GraficaLine.click(function () {

        dibujarGraficoLinea(GrafiacaMes, Graficarsult);
        var modalGraficaLine = $("#modalGraficaLine");
        modalGraficaLine.modal("show");

    });

    var GraficaBarras = $("#GraficaBarras");
    GraficaBarras.click(function () {

        dibujarGrafico(GrafiacaMes, Graficarsult);
        var modalbuton = $("#modalbuton");
         modalbuton.modal("show");

    });

    var Semaforo = $("#Semaforo");

    var graficas = $("#graficas");
    graficas.click(function () {

        var modalGraficas = $("#modalGraficas");
        modalGraficas.modal("show");
      //  alert("Prueba");

     

    });

    Semaforo.click(function () {
        modalSemaforo();
    });


    $("#Text2").popover();
    animacion();


    $('#lstFruits').multiselect({
        includeSelectAllOption: true
    });
    // formularioImiacial();


    cargartipoArchivoXcliente();

    var ExportarInformacion = $("#ExportarInformacion");
    // var reporteExcelArchivo = $("#reporteExcelArchivo");
    var btnVariacion = $("#btnVariacion");





    btnVariacion.click(function () {



        variacion();


    });

    ExportarInformacion.click(function () {

        DescargarDocumento();

    });


    var reporteExcelArchivo = $("#reporteExcelArchivo");
    reporteExcelArchivo.click(function () {


        reporteTableArchivo();

    });

    var Buscar = $("#Buscar");
    Buscar.click(function () {
        animacion();

        var validacion = validacionFechas();

        if (validacion == true) {


            var VariacionReporte = $("#VariacionReporte");
            VariacionReporte.css("visibility", "visible");
            var reporteExcelArchivo = $("#reporteExcelArchivo");
            reporteExcelArchivo.css("visibility", "visible");
            var Variacion = $("#Variacion");
            Variacion.empty();
            var nombreCuentas = $("#nombreCuentas");
            var tbodyResult = $("#tbodyResult");
            nombreCuentas.empty();
            tbodyResult.empty();



            traerInformacion();
            traerNombreTables();

        }

        if (validacion == false) {

            var poppupValidacion = $("#poppupValidacion");
            poppupValidacion.modal('show');

            pararAnimacion();

        }



    });



});

function modalSemaforo() {

    var modalSemaforo = $("#modalSemaforo");

    modalSemaforo.modal("show");

    var btnColorVariacion = $("#btnColorVariacion");
    btnColorVariacion.click(function () {

        var colorVariacion = $("#colorVariacion").val();


        if (colorVariacion == "" || colorVariacion == null) {

            color = "red";

        } else {

            color = colorVariacion;

        }



    });



}

function grafica(cuenta) {




    var rsultFinal = "";

    for (var i = 0; i < Graficarsult.prueba.length - 1; i++) {

        if (Graficarsult.prueba[i].IdColumna == cuenta) {

            rsultFinal = Graficarsult.prueba[i];

        }

    }



    dibujarGrafico(GrafiacaMes, rsultFinal);
    var modalGrafica = $("#modalGrafica");
    modalGrafica.modal("show");

};

function formularioImiacial() {

    var pruebaModalForm = $("#pruebaModalForm");
    pruebaModalForm.modal('show');

}
function generaraConjuntosData(data) {

    var CuentaInicial = $("#CuentaInicial").val();
    var CuentaFinal = $("#CuentaFinal").val();


    var TbodyConjuntos = $("#TbodyConjuntos");
    var temp = "";
    var cifras = 1;



    for (var i = 0; i < data.prueba.length - 1; i++) {


        var cuenta = parseFloat(data.prueba[i].CodigoCuenta)

        if (cuenta >= CuentaInicial && cuenta <= CuentaFinal) {


            temp += "<tr>";

            temp += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
            temp += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";


            if (data.prueba[i].Column3 != null) {



                temp += "<td>" + ((parseFloat(data.prueba[i].Column3)) / cifras) + "</td>";
            }

            if (data.prueba[i].Column4 != null) {
                temp += "<td>" + ((parseFloat(data.prueba[i].Column4)) / cifras) + "</td>";

            }

            if (data.prueba[i].Column5 != null) {
                temp += "<td>" + ((parseFloat(data.prueba[i].Column5)) / cifras) + "</td>";

            }

            if (data.prueba[i].Column6 != null) {
                temp += "<td>" + data.prueba[i].Column6 / cifras + "</td>";

            }

            if (data.prueba[i].Column7 != null) {
                temp += "<td>" + data.prueba[i].Column7 / cifras + "</td>";

            }
            if (data.prueba[i].Column8 != null) {
                temp += "<td>" + data.prueba[i].Column8 / cifras + "</td>";

            }
            if (data.prueba[i].Column9 != null) {
                temp += "<td>" + data.prueba[i].Column9 / cifras + "</td>";

            }
            if (data.prueba[i].Column10 != null) {
                temp += "<td>" + data.prueba[i].Column10 / cifras + "</td>";

            }
            if (data.prueba[i].Column11 != null) {
                temp += "<td>" + data.prueba[i].Column11 / cifras + "</td>";

            }
            if (data.prueba[i].Column12 != null) {
                temp += "<td>" + data.prueba[i].Column12 / cifras + "</td>";

            }
            if (data.prueba[i].Column13 != null) {
                temp += "<td>" + data.prueba[i].Column13 / cifras + "</td>";

            }
            if (data.prueba[i].Column14 != null) {
                temp += "<td>" + data.prueba[i].Column14 / cifras + "</td>";

            }
            if (data.prueba[i].Column15 != null) {
                temp += "<td>" + data.prueba[i].Column15 / cifras + "</td>";

            }
            if (data.prueba[i].Column16 != null) {
                temp += "<td>" + data.prueba[i].Column16 / cifras + "</td>";

            }
            if (data.prueba[i].Column17 != null) {
                temp += "<td>" + data.prueba[i].Column17 / cifras + "</td>";

            }
            if (data.prueba[i].Column18 != null) {
                temp += "<td>" + data.prueba[i].Column18 / cifras + "</td>";

            }
            if (data.prueba[i].Column19 != null) {
                temp += "<td>" + data.prueba[i].Column19 / cifras + "</td>";

            }
            if (data.prueba[i].Column20 != null) {

            }
            if (data.prueba[i].Column21 != null) {
                temp += "<td>" + data.prueba[i].Column21 / cifras + "</td>";

            }
            if (data.prueba[i].Column22 != null) {
                temp += "<td>" + data.prueba[i].Column22 / cifras + "</td>";

            }
            if (data.prueba[i].Column23 != null) {
                temp += "<td>" + data.prueba[i].Column23 / cifras + "</td>";

            }
            if (data.prueba[i].Column24 != null) {
                temp += "<td>" + data.prueba[i].Column24 / cifras + "</td>";

            }

        }

    }

    TbodyConjuntos.append(temp);

}

function obtenerPosicion(data) {


    var numeroPosicion = data.indexOf("_");

    var rSult = data.substring(0, numeroPosicion);

    return rSult;

}

function reporteTableArchivo() {

    $("#dataTables").table2excel({

        // exclude CSS class

        exclude: ".noExl",
        name: "Prueba.xls",
        filename: "Archivos"

    });



}
function DescargarDocumento() {

    $("#TableVariacion").table2excel({

        // exclude CSS class

        exclude: ".noExl",
        name: "Prueba.xls",
        filename: "Variacion"

    });



}

function variacion() {

    var poppupVariacion = $("#ModalVariaciones");
    poppupVariacion.modal("show");


}
//imprimir Informacion
function traerNombreTables() {


    var fechaInicial = $("#datepicker").val();
    var fechaFinal = $("#datepicker2").val();
    var CentroCosto = $("#optionCentroCosto option:selected").val();
    var RangoCuentaInicial = $("#RangoCuentaInicial").val();
    var RangoCuentaFinal = $("#RangoCuentaFinal").val();


    var fechaArchivo = "";

    var data = {
        fechaInicial: fechaInicial,
        fechaFinal: fechaFinal,
        CentroCosto: CentroCosto,
        RangoCuentaInicial: RangoCuentaInicial,
        RangoCuentaFinal: RangoCuentaFinal

    }

    $.ajax({

        url: "Variaciones.aspx/traerInformacion",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        dataType: "json",

        success: function (result) {

            var data = JSON.parse(result.d);
            Graficarsult = data;






            //   rsult = data;

            var Periodo = $("#Periodo option:selected").val();


            if (Periodo == "M") {
                imprimirMensula(data);

            }
            if (Periodo == "T") {

                imprimirTrimestral(data);
            }

            if (Periodo == "S") {

                imprimirSemestral(data);

            }

            if (Periodo == "A") {

                imprimirAnual(data);

            }


            //   imprimirMensula(data);
            //  
            //  (data);

            pararAnimacion();



        },
        error: function (err) {
            alert("error");
        }


    });



}

//Imprimir mes
function traerInformacion() {

    var fechaInicial = $("#datepicker").val();
    var fechaFinal = $("#datepicker2").val();
    var CentroCosto = $("#optionCentroCosto option:selected").val();
    var fechaArchivo = "";

    var InformacionCuentas = {

        fechaInicial: fechaInicial,
        fechaFinal: fechaFinal,
        CentroCosto: CentroCosto
    }

    $.ajax({
        url: "Variaciones.aspx/InformacionCuentas",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(InformacionCuentas),
        dataType: "json",

        success: function (result) {


            animacion();
            var Periodo = $("#Periodo option:selected").val();
            var data = JSON.parse(result.d);
            //  alert(data);
            GrafiacaMes = data;


            if (Periodo == "M") {

                imprimierMesxMes(data);
            }
            if (Periodo == "T") {

                imprimierMesxTrimestral(data);
            }

            if (Periodo == "S") {

                imprimierMesxSmestre(data);

            }

            if (Periodo == "A") {

                imprimierMesxAnual(data);

            }


        },
        error: function (err) {
            alert("Fail");
        }


    });



}

function myFunction(idArchivo) {

    idArchivoGolbal = idArchivo;

    var modalRsultFechas = $("#modalRsultFechas");
    modalRsultFechas.modal("hide");

    var ModalGraficaPie = $("#ModalGraficaPie");
    ModalGraficaPie.modal("show");



};

function EsGrupo(rSult) {

    var str = new String(rSult);
    var rS = false;

    if ((str.charAt(0)) != "0") {
        if ((str.charAt(1)) != "0") {
            if ((str.charAt(2)) == "0") {
                if ((str.charAt(3)) == "0") {

                    var rS = true;

                }
               
            }
        }
    
    }

    return rS;


}



function imprimierMesxMes(data) {


    var tempN = "<tr>";
    var tempV = "<tr>";
    var tempP = "<tr>";
    var variable = "";
    var FechaTemporal = "";
    tempN += "<th>" + "Graficar" + "</th>";
    tempN += "<th>" + "Cuenta" + "</th>";
    tempN += "<th>" + "Descripcion Cuenta" + "</th>";
    tempV += "<th>" + "Cuenta" + "</th>";
    tempV += "<th>" + "Descripcion Cuenta" + "</th>";
    tempP += "<th>" + "Cuenta" + "</th>";
    tempP += "<th>" + "Descripcion Cuenta" + "</th>";

    for (var j = 0; j < data.length; j++) {


        var mes = obtenerFecha(data[j]);

        var fecha = obtenerFechaMes(data[j]);


        tempN += "<th>" + fecha + "</th>";


        if (j != 0) {

            var mesV = obtenerFechaMes(data[j]);
            var mesVs = obtenerFechaMes(data[j - 1]);


            //  tempV += "<th>" + mesVs + " - " + mesV + "</th>";
            tempV += "<th>" + mesV + " - " + mesVs + "</th>";
            tempP += "<th>" + " ( " + mesV + " - " + mesVs + " )/ " + mesVs + "</th>";
        }
    }
    tempV += "</tr>";
    tempN += "</tr>";

    var Saldos = $("#Saldos option:selected").val();
    var tablenew = $("#nombreCuentas");
    tablenew.empty();

    if (Saldos == "S") {

        tablenew.append(tempN);

    }
    if (Saldos == "V") {

        tablenew.append(tempV);

    }

    if (Saldos == "P") {

        tablenew.append(tempP);

    }

    // VariacionEncabezado.append(tempV);


    animacion();

}
function imprimierMesxTrimestral(data) {




    var tempN = "<tr>";
    var tempV = "<tr>";
    var tempP = "<tr>";

    tempN += "<th>" + "Cuenta" + "</th>";
    tempN += "<th>" + "Descripcion Cuenta" + "</th>";
    tempV += "<th>" + "Cuenta" + "</th>";
    tempV += "<th>" + "Descripcion Cuenta" + "</th>";
    tempP += "<th>" + "Cuenta" + "</th>";
    tempP += "<th>" + "Descripcion Cuenta" + "</th>";

    var mesTemporal = "";
    var FechaTemporal = "";

    for (var j = 0; j < data.length; j++) {
        var mes = obtenerFecha(data[j]);
        var fecha = obtenerFechaMes(data[j]);

        if (mes == "1" || mes == "3" || mes == "6" || mes == "9" || mes == "12") {


            if (j >= 2) {

                FechaTemporal = obtenerFechaMes(data[j - 2]);;
            }

            if (j == 12) {
                var fechaAux = obtenerFechaMes(data[j + 2]);
                fecha = fechaAux;

            };






            if (j != 0) {
                var mesV = obtenerFechaMes(data[j]);
                var mesVs = "";



                if (j < 3) {

                    mesVs = obtenerFechaMes(data[j - 2]);

                }
                if (j > 3) {

                    mesVs = obtenerFechaMes(data[j - 3]);

                }




                if (j != 12) {
                    tempN += "<th>" + fecha + "</th>";

                    tempV += "<th>" + fecha + " - " + FechaTemporal + "</th>";
                    tempP += "<th>" + " ( " + mesV + " - " + mesVs + " )/ " + mesVs + "</th>";

                }


            }

            FechaTemporal = fecha;
        }

    };


    var Periodo = $("#Saldos option:selected").val();

    tempV += "</tr>";
    tempN += "</tr>";
    tempP += "</tr>";

    var VariacionEncabezado = $("#VariacionEncabezado");
    var tablenew = $("#nombreCuentas");

    if (Periodo == "S") {

        tablenew.append(tempN);

    }
    if (Periodo == "V") {

        tablenew.append(tempV);

    }
    if (Periodo == "P") {

        tablenew.append(tempP);

    }

    // VariacionEncabezado.append(tempV);




}
function imprimierMesxSmestre(data) {




    var tempN = "<tr>";
    var tempV = "<tr>";
    var tempP = "<tr>";

    tempN += "<th>" + "Cuenta" + "</th>";
    tempN += "<th>" + "Descripcion Cuenta" + "</th>";
    tempV += "<th>" + "Cuenta" + "</th>";
    tempV += "<th>" + "Descripcion Cuenta" + "</th>";
    tempP += "<th>" + "Cuenta" + "</th>";
    tempP += "<th>" + "Descripcion Cuenta" + "</th>";

    var mesTemporal = "";
    var FechaTemporal = "";

    for (var j = 0; j < data.length; j++) {
        var mes = obtenerFecha(data[j]);
        var fecha = obtenerFechaMes(data[j]);

        if (mes == "6" || mes == "12") {


            if (j >= 5) {

                FechaTemporal = obtenerFechaMes(data[j - 5]);;
            }

            if (j == 12) {
                var fechaAux = obtenerFechaMes(data[j + 5]);
                fecha = fechaAux;

            };

            if (j != 0) {
                var mesV = obtenerFechaMes(data[j]);
                var mesVs = "";
                if (j < 6) {

                    mesVs = obtenerFechaMes(data[j - 5]);

                }
                if (j > 6) {

                    mesVs = obtenerFechaMes(data[j - 5]);

                }

                if (j != 12) {
                    tempN += "<th>" + fecha + "</th>";

                    tempV += "<th>" + fecha + " - " + FechaTemporal + "</th>";
                    tempP += "<th>" + " ( " + mesV + " - " + mesVs + " )/ " + mesVs + "</th>";

                }


            }

            FechaTemporal = fecha;
        }

    };


    var Periodo = $("#Saldos option:selected").val();

    tempV += "</tr>";
    tempN += "</tr>";
    tempP += "</tr>";

    var VariacionEncabezado = $("#VariacionEncabezado");
    var tablenew = $("#nombreCuentas");

    if (Periodo == "S") {

        tablenew.append(tempN);

    }
    if (Periodo == "V") {

        tablenew.append(tempV);

    }
    if (Periodo == "P") {

        tablenew.append(tempP);

    }

    // VariacionEncabezado.append(tempV);




}
function imprimierMesxAnual(data) {




    var tempN = "<tr>";
    var tempV = "<tr>";
    var tempP = "<tr>";

    tempN += "<th>" + "Cuenta" + "</th>";
    tempN += "<th>" + "Descripcion Cuenta" + "</th>";
    tempV += "<th>" + "Cuenta" + "</th>";
    tempV += "<th>" + "Descripcion Cuenta" + "</th>";
    tempP += "<th>" + "Cuenta" + "</th>";
    tempP += "<th>" + "Descripcion Cuenta" + "</th>";

    var mesTemporal = "";
    var FechaTemporal = "";

    for (var j = 0; j < data.length; j++) {
        var mes = obtenerFecha(data[j]);
        var fecha = obtenerFechaMes(data[j]);

        if (mes == "12") {


            if (j >= 11) {

                FechaTemporal = obtenerFechaMes(data[j - 11]);;
            }

            if (j == 12) {
                var fechaAux = obtenerFechaMes(data[j + 11]);
                fecha = fechaAux;

            };

            if (j != 0) {
                var mesV = obtenerFechaMes(data[j]);
                var mesVs = "";
                if (j < 12) {

                    mesVs = obtenerFechaMes(data[j - 11]);

                }
                if (j > 12) {

                    mesVs = obtenerFechaMes(data[j - 11]);

                }

                if (j != 12) {
                    tempN += "<th>" + fecha + "</th>";

                    tempV += "<th>" + fecha + " - " + FechaTemporal + "</th>";
                    tempP += "<th>" + " ( " + mesV + " - " + mesVs + " )/ " + mesVs + "</th>";

                }


            }

            FechaTemporal = fecha;
        }

    };


    var Periodo = $("#Saldos option:selected").val();

    tempV += "</tr>";
    tempN += "</tr>";
    tempP += "</tr>";

    var VariacionEncabezado = $("#VariacionEncabezado");
    var tablenew = $("#nombreCuentas");

    if (Periodo == "S") {

        tablenew.append(tempN);

    }
    if (Periodo == "V") {

        tablenew.append(tempV);

    }
    if (Periodo == "P") {

        tablenew.append(tempP);

    }

    // VariacionEncabezado.append(tempV);




}
function validacionFechas() {

    var datepicker = $("#datepicker").val();
    var datepicker2 = $("#datepicker2").val();
    var Lblvalidacion = $("#Lblvalidacion");
    if (datepicker == "" && datepicker2 != "") {

        Lblvalidacion.text('Fecha Inicial se encuentra sin seleccionar');
        $("#validacionErrordatepicker").addClass("has-error");
        $("#validacionErrordatepicker2").removeClass("has-error");
        return false;

    }

    if (datepicker == "" && datepicker2 == "") {



        Lblvalidacion.text('Fecha Inicial y la Fecha Final  se encuentra sin seleccionar');
        $("#validacionErrordatepicker").addClass("has-error");
        $("#validacionErrordatepicker2").addClass("has-error");


        return false;

    }

    if (datepicker != "" && datepicker2 == "") {

        Lblvalidacion.text('Fecha Final  se encuentra sin seleccionar');
        $("#datepicker").addClass("has-error");
        $("#validacionErrordatepicker2").addClass("has-error");
        $("#validacionErrordatepicker").removeClass("has-error");



        return false;

    }

    $("#validacionErrordatepicker").removeClass("has-error");
    $("#validacionErrordatepicker2").removeClass("has-error");

    return true;

}

function obtenerFecha(data) {
    var numeroPosicion = data.indexOf("_");
    var index = data.length;
    var rSult = data.substring(numeroPosicion + 1, index);
    return rSult;

}

function obtenerFechaMes(data) {
    var numeroPosicion = data.indexOf("_");
    var index = data.length;
    var rSult = data.substring(0, numeroPosicion);
    return rSult;

}

function fechaMes(data) {

    var caracteres = data.length;
    var index = data.indexOf("_");
    var rsult = data.substring(index + 1, caracteres);

}

function animacion() {

    $("#element").introLoader();
}

function pararAnimacion() {
    var loader = $('#element').data('introLoader');
    loader.stop();

}


function cargartipoArchivoXcliente() {


    $.ajax({
        url: "Variaciones.aspx/Amezquita_MAIF_Obtener_CentroCostos_Cliente",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (result) {
            var data = JSON.parse(result.d);
            var MyArray = data.Table;
            var temp = "";
            for (var i = 0; i < data.length; i++) {

                temp += '<option value="' + data[i].idCentroCosto + '">' + data[i].nombreCentroCosto + '</option>';
            };

            optionCentroCosto = $("#optionCentroCosto");
            optionCentroCosto.append(temp);


        },
        error: function (err) {
            alert("Fail");
        }


    });





}

function imprimirMensula(data) {



    var Variacion = $("#Variacion");
    var temp = "";
    var tempV = "";
    var tempP = "";
    var tempVariacion = "";
    var numeroMayorVariacion = $("#RangoCuentaFinal").val();
    var numeroMenorVariacion = $("#RangoCuentaInicial").val();




    if (numeroMayorVariacion == "") {

        numeroMayorVariacion = 10000000000;


    }

    if (numeroMenorVariacion == "") {

        numeroMenorVariacion = 0;

    }


    for (var i = 0; i < data.prueba.length - 1; i++) {
        temp += "<tr>";
        tempV += "<tr>";
        tempP += "<tr>"




        if (parseFloat(data.prueba[i].CodigoCuenta) >= parseFloat(numeroMenorVariacion) && parseFloat(data.prueba[i].CodigoCuenta) <= parseFloat(numeroMayorVariacion)) {

            console.log(data.prueba[i].CodigoCuenta);

            temp += "<div><td><input name='Graficas' id='" + data.prueba[i].CodigoCuenta + "' type='checkbox' value='" + data.prueba[i].CodigoCuenta + "'></td></div>";
            temp += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
            temp += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

            tempV += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
            tempV += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

            tempP += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
            tempP += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";



            if (data.prueba[i].Column4 != null) {
                var numeroPosicion4 = obtenerPosicion(data.prueba[i].Column4);
                var fecha4 = obtenerFecha(data.prueba[i].Column4);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion4)))) + "</td>";
            }

            if (data.prueba[i].Column5 != null) {
                var numeroPosicion5 = obtenerPosicion(data.prueba[i].Column5);
                var fecha5 = obtenerFecha(data.prueba[i].Column5);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion5)))) + "</td>";
                //  temp += "<td style='color:" + color + "'>" + numberWithCommas(((parseFloat(numeroPosicion5)))) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion5)) - parseFloat(numeroPosicion4)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion5)) - parseFloat(numeroPosicion4)) / parseFloat(numeroPosicion5)))) + "</td>";

            }
            if (data.prueba[i].Column6 != null) {
                var numeroPosicion6 = obtenerPosicion(data.prueba[i].Column6);
                var fecha6 = obtenerFecha(data.prueba[i].Column6);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion6)))) + "</td>";
                // temp += "<td style='color:" + color + "'>" + numberWithCommas(((parseFloat(numeroPosicion6)))) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion6)) - parseFloat(numeroPosicion5)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion6)) - parseFloat(numeroPosicion5)) / parseFloat(numeroPosicion5)))) + "</td>";
            }
            if (data.prueba[i].Column7 != null) {
                var numeroPosicion7 = obtenerPosicion(data.prueba[i].Column7);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion7)))) + "</td>";
                // temp += "<td style='color:" + color + "'>" + numberWithCommas(((parseFloat(numeroPosicion7)))) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion7)) - parseFloat(numeroPosicion6)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion7)) - parseFloat(numeroPosicion6)) / parseFloat(numeroPosicion6)))) + "</td>";
            }
            if (data.prueba[i].Column8 != null) {
                var numeroPosicion8 = obtenerPosicion(data.prueba[i].Column8);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion8)))) + "</td>";
                //   temp += "<td style='color : " + color + "'>" + numberWithCommas(((parseFloat(numeroPosicion8)))) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion8)) - parseFloat(numeroPosicion7)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion8)) - parseFloat(numeroPosicion7)) / parseFloat(numeroPosicion7)))) + "</td>";
            }
            if (data.prueba[i].Column9 != null) {
                var numeroPosicion9 = obtenerPosicion(data.prueba[i].Column9);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion9)))) + "</td>";
                //temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion9)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion9)) - parseFloat(numeroPosicion8)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion9)) - parseFloat(numeroPosicion8)) / parseFloat(numeroPosicion8)))) + "</td>";
            }

            if (data.prueba[i].Column10 != null) {
                var numeroPosicion10 = obtenerPosicion(data.prueba[i].Column10);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion10)))) + "</td>";
                //  temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion10)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion10)) - parseFloat(numeroPosicion9)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion10)) - parseFloat(numeroPosicion9)) / parseFloat(numeroPosicion9)))) + "</td>";
            }
            if (data.prueba[i].Column11 != null) {
                var numeroPosicion11 = obtenerPosicion(data.prueba[i].Column11);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion11)))) + "</td>";
                //  temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion11)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion11)) - parseFloat(numeroPosicion10)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion11)) - parseFloat(numeroPosicion10)) / parseFloat(numeroPosicion10)))) + "</td>";
            }
            if (data.prueba[i].Column12 != null) {
                var numeroPosicion12 = obtenerPosicion(data.prueba[i].Column12);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion12)))) + "</td>";
                //temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion12)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion12)) - parseFloat(numeroPosicion11)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion12)) - parseFloat(numeroPosicion11)) / parseFloat(numeroPosicion11)))) + "</td>";
            }
            if (data.prueba[i].Column13 != null) {
                var numeroPosicion13 = obtenerPosicion(data.prueba[i].Column13);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion13)))) + "</td>";
                //   temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion13)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion13)) - parseFloat(numeroPosicion12)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion13)) - parseFloat(numeroPosicion12)) / parseFloat(numeroPosicion12)))) + "</td>";
            }
            if (data.prueba[i].Column14 != null) {
                var numeroPosicion14 = obtenerPosicion(data.prueba[i].Column14);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion14)))) + "</td>";
                //   temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion14)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion14)) - parseFloat(numeroPosicion13)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion14)) - parseFloat(numeroPosicion13)) / parseFloat(numeroPosicion13)))) + "</td>";
            }
            if (data.prueba[i].Column15 != null) {
                var numeroPosicion15 = obtenerPosicion(data.prueba[i].Column15);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion15)))) + "</td>";
                //   temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion15)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion15)) - parseFloat(numeroPosicion14)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion15)) - parseFloat(numeroPosicion14)) / parseFloat(numeroPosicion14)))) + "</td>";
            }
            if (data.prueba[i].Column16 != null) {
                var numeroPosicion16 = obtenerPosicion(data.prueba[i].Column16);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion16)))) + "</td>";
                //  temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion16)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion16)) - parseFloat(numeroPosicion15)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion16)) - parseFloat(numeroPosicion15)) / parseFloat(numeroPosicion15)))) + "</td>";
            }
            if (data.prueba[i].Column17 != null) {
                var numeroPosicion17 = obtenerPosicion(data.prueba[i].Column17);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion17)))) + "</td>";
                // temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion17)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion17)) - parseFloat(numeroPosicion16)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion17)) - parseFloat(numeroPosicion16)) / parseFloat(numeroPosicion16)))) + "</td>";
            }
            if (data.prueba[i].Column18 != null) {
                var numeroPosicion18 = obtenerPosicion(data.prueba[i].Column18);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion18)))) + "</td>";
                //    temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion18)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion18)) - parseFloat(numeroPosicion17)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion18)) - parseFloat(numeroPosicion17)) / parseFloat(numeroPosicion17)))) + "</td>";
            }
            if (data.prueba[i].Column19 != null) {
                var numeroPosicion19 = obtenerPosicion(data.prueba[i].Column19);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion19)))) + "</td>";
                //    temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion19)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion19)) - parseFloat(numeroPosicion18)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion19)) - parseFloat(numeroPosicion18)) / parseFloat(numeroPosicion18)))) + "</td>";
            }
            if (data.prueba[i].Column20 != null) {
                var numeroPosicion20 = obtenerPosicion(data.prueba[i].Column20);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion20)))) + "</td>";
                // temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion20)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion20)) - parseFloat(numeroPosicion19)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion20)) - parseFloat(numeroPosicion19)) / parseFloat(numeroPosicion19)))) + "</td>";
            }
            if (data.prueba[i].Column21 != null) {
                var numeroPosicion21 = obtenerPosicion(data.prueba[i].Column21);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion21)))) + "</td>";
                //  temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion21)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion21)) - parseFloat(numeroPosicion20)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion21)) - parseFloat(numeroPosicion20)) / parseFloat(numeroPosicion20)))) + "</td>";
            }
            if (data.prueba[i].Column22 != null) {
                var numeroPosicion22 = obtenerPosicion(data.prueba[i].Column22);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion22)))) + "</td>";
                //  temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion22)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion22)) - parseFloat(numeroPosicion21)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion22)) - parseFloat(numeroPosicion21)) / parseFloat(numeroPosicion21)))) + "</td>";
            }
            if (data.prueba[i].Column23 != null) {
                var numeroPosicion23 = obtenerPosicion(data.prueba[i].Column23);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion23)))) + "</td>";
                //  temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion23)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion23)) - parseFloat(numeroPosicion22)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion23)) - parseFloat(numeroPosicion22)) / parseFloat(numeroPosicion22)))) + "</td>";
            }
            if (data.prueba[i].Column24 != null) {
                var numeroPosicion24 = obtenerPosicion(data.prueba[i].Column24);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion24)))) + "</td>";
                //  temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion24)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion24)) - parseFloat(numeroPosicion23)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion24)) - parseFloat(numeroPosicion23)) / parseFloat(numeroPosicion23)))) + "</td>";
            }
            if (data.prueba[i].Column25 != null) {
                var numeroPosicion25 = obtenerPosicion(data.prueba[i].Column25);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion25)))) + "</td>";

                //    temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion25)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion25)) - parseFloat(numeroPosicion24)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion25)) - parseFloat(numeroPosicion24)) / parseFloat(numeroPosicion24)))) + "</td>";
            }
            if (data.prueba[i].Column26 != null) {

                var numeroPosicion26 = obtenerPosicion(data.prueba[i].Column26);
                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion26)))) + "</td>";
                //   temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion26)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion26)) - parseFloat(numeroPosicion25)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion26)) - parseFloat(numeroPosicion25)) / parseFloat(numeroPosicion25)))) + "</td>";
            }
            if (data.prueba[i].Column27 != null) {
                var numeroPosicion27 = obtenerPosicion(data.prueba[i].Column27);

                temp += "<td style='color:black'>" + numberWithCommas(((parseFloat(numeroPosicion27)))) + "</td>";
                // temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion27)) )) + "</td>";
                tempV += "<td>" + numberWithCommas((((parseFloat(numeroPosicion27)) - parseFloat(numeroPosicion26)))) + "</td>";
                tempP += "<td>" + numberWithCommas(((((parseFloat(numeroPosicion27)) - parseFloat(numeroPosicion26)) / parseFloat(numeroPosicion26)))) + "</td>";
            }


        }

    }

    var Saldos = $("#Saldos option:selected").val();
    var tablenewR = $("#tbodyResult");
    if (Saldos == "S") {
        tablenewR.append(temp);
    }
    if (Saldos == "V") {
        tablenewR.append(tempV);
    }
    if (Saldos == "P") {
        tablenewR.append(tempP);
    }

}


function imprimirTrimestral(data) {
    var Variacion = $("#Variacion");
    var temp = "";
    var tempV = "";
    var tempPo = "";
    var variable = "";
    var tempVariacion = "";
    var cifras = $("#cifras option:selected").val();
    var TrimestralVariacion = 0;
    for (var i = 0; i < data.prueba.length ; i++) {

        temp += "<tr>";
        temp += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        temp += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

        tempV += "<tr>";
        tempV += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        tempV += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

        tempPo += "<tr>";
        tempPo += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        tempPo += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";


        if (data.prueba[i].Column4 != null) {
            var numeroPosicion4 = obtenerPosicion(data.prueba[i].Column4);

            var fecha4 = obtenerFecha(data.prueba[i].Column4);
            if (fecha4 == "1" || fecha4 == "3" || fecha4 == "6" || fecha4 == "9" || fecha4 == "12") {


                TrimestralVariacion = (parseFloat(numeroPosicion4));

                // temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion3)) / cifras)) + "</td>";
            }
        }

        if (data.prueba[i].Column5 != null) {
            var numeroPosicion5 = obtenerPosicion(data.prueba[i].Column5);
            var fecha5 = obtenerFecha(data.prueba[i].Column5);
            if (fecha5 == "3" || fecha5 == "6" || fecha5 == "9" || fecha5 == "12") {

                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion5)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion5) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion5) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";
                TrimestralVariacion = parseFloat(numeroPosicion5);
            }
        }
        if (data.prueba[i].Column6 != null) {
            var numeroPosicion6 = obtenerPosicion(data.prueba[i].Column6);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column4));
            var fecha6 = obtenerFecha(data.prueba[i].Column6);
            if (fecha6 == "3" || fecha6 == "6" || fecha6 == "9" || fecha6 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion6)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion6) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion6) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }


        }
        if (data.prueba[i].Column7 != null) {
            var numeroPosicion7 = obtenerPosicion(data.prueba[i].Column7);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column5));
            var fecha7 = obtenerFecha(data.prueba[i].Column7);
            if (fecha7 == "3" || fecha7 == "6" || fecha7 == "9" || fecha7 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion7)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion7) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion7) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column8 != null) {
            var numeroPosicion8 = obtenerPosicion(data.prueba[i].Column8);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column6));
            var fecha8 = obtenerFecha(data.prueba[i].Column8);
            if (fecha8 == "3" || fecha8 == "6" || fecha8 == "9" || fecha8 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion8)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion8) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion8) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column9 != null) {
            var numeroPosicion9 = obtenerPosicion(data.prueba[i].Column9);
            var fecha9 = obtenerFecha(data.prueba[i].Column9);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column7));
            if (fecha9 == "3" || fecha9 == "6" || fecha9 == "9" || fecha9 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion9)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion9) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion9) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column10 != null) {
            var numeroPosicion10 = obtenerPosicion(data.prueba[i].Column10);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column9));
            var fecha10 = obtenerFecha(data.prueba[i].Column10);
            if (fecha10 == "3" || fecha10 == "6" || fecha10 == "9" || fecha10 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion10)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion10) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion10) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column11 != null) {
            var fecha11 = obtenerPosicion(data.prueba[i].Column11);
            var numeroPosicion11 = obtenerFecha(data.prueba[i].Column11);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column9));
            if (fecha11 == "3" || fecha11 == "6" || fecha11 == "9" || fecha11 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion11)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion11) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion11) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column12 != null) {
            var numeroPosicion12 = obtenerPosicion(data.prueba[i].Column12);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column10));
            var fecha12 = obtenerFecha(data.prueba[i].Column12);
            if (fecha12 == "3" || fecha12 == "6" || fecha12 == "9" || fecha12 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion12)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion12) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion12) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";
                TrimestralVariacion = parseFloat(numeroPosicion12);
            }
        }
        if (data.prueba[i].Column13 != null) {
            var numeroPosicion13 = obtenerPosicion(data.prueba[i].Column13);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column11));
            var fecha13 = obtenerFecha(data.prueba[i].Column13);
            if (fecha13 == "3" || fecha13 == "6" || fecha13 == "9" || fecha13 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion13)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion13) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion13) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column14 != null) {
            var numeroPosicion14 = obtenerPosicion(data.prueba[i].Column14);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column12));
            var fecha14 = obtenerFecha(data.prueba[i].Column14);
            if (fecha14 == "3" || fecha14 == "6" || fecha14 == "9" || fecha14 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion14)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion14) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion14) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column15 != null) {
            var numeroPosicion15 = obtenerPosicion(data.prueba[i].Column15);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column13));
            var fecha15 = obtenerFecha(data.prueba[i].Column15);
            if (fecha15 == "3" || fecha15 == "6" || fecha15 == "9" || fecha15 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion15)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion15) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion15) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column16 != null) {
            var numeroPosicion16 = obtenerPosicion(data.prueba[i].Column16);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column14));
            var fecha16 = obtenerFecha(data.prueba[i].Column16);
            if (fecha16 == "3" || fecha16 == "6" || fecha16 == "9" || fecha16 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion16)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion16) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion16) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column17 != null) {
            var numeroPosicion17 = obtenerPosicion(data.prueba[i].Column17);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column15));
            var fecha17 = obtenerFecha(data.prueba[i].Column17);
            if (fecha17 == "3" || fecha17 == "6" || fecha17 == "9" || fecha17 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion17)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion17) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion17) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column18 != null) {
            var numeroPosicion18 = obtenerPosicion(data.prueba[i].Column18);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column16));
            var fecha18 = obtenerFecha(data.prueba[i].Column18);
            if (fecha18 == "3" || fecha18 == "6" || fecha18 == "9" || fecha18 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion18)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion18) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion18) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column19 != null) {
            var numeroPosicion19 = obtenerPosicion(data.prueba[i].Column19);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column17));
            var fecha19 = obtenerFecha(data.prueba[i].Column19);
            if (fecha19 == "3" || fecha19 == "6" || fecha19 == "9" || fecha19 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion19)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion19) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion19) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column20 != null) {
            var numeroPosicion20 = obtenerPosicion(data.prueba[i].Column20);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column18));

            var fecha20 = obtenerFecha(data.prueba[i].Column20);
            if (fecha20 == "3" || fecha20 == "6" || fecha20 == "9" || fecha20 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion20)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion20) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion20) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column21 != null) {
            var numeroPosicion21 = obtenerPosicion(data.prueba[i].Column21);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column19));
            var fecha21 = obtenerFecha(data.prueba[i].Column21);
            if (fecha21 == "3" || fecha21 == "6" || fecha21 == "9" || fecha21 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion21)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion21) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion21) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column22 != null) {
            var numeroPosicion22 = obtenerPosicion(data.prueba[i].Column22);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column20));
            var fecha22 = obtenerFecha(data.prueba[i].Column22);
            if (fecha22 == "3" || fecha22 == "6" || fecha22 == "9" || fecha22 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion22)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion22) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion22) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column23 != null) {
            var numeroPosicion23 = obtenerPosicion(data.prueba[i].Column23);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column20));
            var fecha23 = obtenerFecha(data.prueba[i].Column23);
            if (fecha23 == "3" || fecha23 == "6" || fecha23 == "9" || fecha23 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion23)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion23) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion23) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column24 != null) {
            var numeroPosicion24 = obtenerPosicion(data.prueba[i].Column24);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column22));
            var fecha24 = obtenerFecha(data.prueba[i].Column24);
            if (fecha24 == "3" || fecha24 == "6" || fecha24 == "9" || fecha24 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion24)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion24) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion24) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column25 != null) {
            var numeroPosicion25 = obtenerPosicion(data.prueba[i].Column25);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column23));
            var fecha25 = obtenerFecha(data.prueba[i].Column25);
            if (fecha25 == "3" || fecha25 == "6" || fecha25 == "9" || fecha25 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion25)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion25) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion25) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column26 != null) {
            var numeroPosicion26 = obtenerPosicion(data.prueba[i].Column26);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column24));
            var fecha26 = obtenerFecha(data.prueba[i].Column26);
            if (fecha26 == "3" || fecha26 == "6" || fecha26 == "9" || fecha26 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion26)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion26) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion26) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }

        if (data.prueba[i].Column27 != null) {
            var numeroPosicion27 = obtenerPosicion(data.prueba[i].Column27);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column25));
            var fecha27 = obtenerFecha(data.prueba[i].Column27);
            if (fecha27 == "3" || fecha27 == "6" || fecha27 == "9" || fecha27 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion27)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion27) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion27) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }

        if (data.prueba[i].Column28 != null) {
            var numeroPosicion28 = obtenerPosicion(data.prueba[i].Column28);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column26));
            var fecha28 = obtenerFecha(data.prueba[i].Column26);
            if (fecha28 == "3" || fecha28 == "6" || fecha28 == "9" || fecha28 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion28)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion28) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion28) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }


    }

    temp += "</tr>";
    tempPo += "</tr>";
    tempV += "</tr>";
    var tablenew = $("#tbodyResult");
    var Periodo = $("#Saldos option:selected").val();
    var tablenew = $("#nombreCuentas");
    if (Periodo == "S") {

        tablenew.append(temp);

    }
    if (Periodo == "V") {

        tablenew.append(tempV);

    }
    if (Periodo == "P") {

        tablenew.append(tempPo);

    }



}

function imprimirSemestral(data) {
    var Variacion = $("#Variacion");
    var temp = "";
    var tempV = "";
    var tempPo = "";
    var variable = "";
    var tempVariacion = "";
    var cifras = $("#cifras option:selected").val();
    var TrimestralVariacion = 0;
    for (var i = 0; i < data.prueba.length ; i++) {

        temp += "<tr>";
        temp += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        temp += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

        tempV += "<tr>";
        tempV += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        tempV += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

        tempPo += "<tr>";
        tempPo += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        tempPo += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";


        if (data.prueba[i].Column9 != null) {
            var numeroPosicion9 = obtenerPosicion(data.prueba[i].Column9);
            var fecha9 = obtenerFecha(data.prueba[i].Column9);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column4));
            if (fecha9 == "6" || fecha9 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion9)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion9) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion9) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column10 != null) {
            var numeroPosicion10 = obtenerPosicion(data.prueba[i].Column10);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column5));
            var fecha10 = obtenerFecha(data.prueba[i].Column10);
            if (fecha10 == "6" || fecha10 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion10)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion10) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion10) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column11 != null) {
            var fecha11 = obtenerPosicion(data.prueba[i].Column11);
            var numeroPosicion11 = obtenerFecha(data.prueba[i].Column6);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column9));
            if (fecha11 == "6" || fecha11 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion11)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion11) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion11) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column12 != null) {
            var numeroPosicion12 = obtenerPosicion(data.prueba[i].Column12);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column6));
            var fecha12 = obtenerFecha(data.prueba[i].Column12);
            if (fecha12 == "6" || fecha12 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion12)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion12) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion12) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";
                TrimestralVariacion = parseFloat(numeroPosicion12);
            }
        }
        if (data.prueba[i].Column13 != null) {
            var numeroPosicion13 = obtenerPosicion(data.prueba[i].Column13);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column8));
            var fecha13 = obtenerFecha(data.prueba[i].Column13);
            if (fecha13 == "6" || fecha13 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion13)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion13) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion13) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column14 != null) {
            var numeroPosicion14 = obtenerPosicion(data.prueba[i].Column14);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column9));
            var fecha14 = obtenerFecha(data.prueba[i].Column14);
            if (fecha14 == "6" || fecha14 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion14)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion14) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion14) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column15 != null) {
            var numeroPosicion15 = obtenerPosicion(data.prueba[i].Column15);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column10));
            var fecha15 = obtenerFecha(data.prueba[i].Column15);
            if (fecha15 == "6" || fecha15 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion15)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion15) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion15) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column16 != null) {
            var numeroPosicion16 = obtenerPosicion(data.prueba[i].Column16);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column11));
            var fecha16 = obtenerFecha(data.prueba[i].Column16);
            if (fecha16 == "6" || fecha16 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion16)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion16) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion16) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column17 != null) {
            var numeroPosicion17 = obtenerPosicion(data.prueba[i].Column17);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column12));
            var fecha17 = obtenerFecha(data.prueba[i].Column17);
            if (fecha17 == "6" || fecha17 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion17)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion17) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion17) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column18 != null) {
            var numeroPosicion18 = obtenerPosicion(data.prueba[i].Column18);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column13));
            var fecha18 = obtenerFecha(data.prueba[i].Column18);
            if (fecha18 == "6" || fecha18 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion18)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion18) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion18) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column19 != null) {
            var numeroPosicion19 = obtenerPosicion(data.prueba[i].Column19);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column14));
            var fecha19 = obtenerFecha(data.prueba[i].Column19);
            if (fecha19 == "6" || fecha19 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion19)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion19) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion19) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column20 != null) {
            var numeroPosicion20 = obtenerPosicion(data.prueba[i].Column20);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column15));

            var fecha20 = obtenerFecha(data.prueba[i].Column20);
            if (fecha20 == "6" || fecha20 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion20)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion20) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion20) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column21 != null) {
            var numeroPosicion21 = obtenerPosicion(data.prueba[i].Column21);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column16));
            var fecha21 = obtenerFecha(data.prueba[i].Column21);
            if (fecha21 == "6" || fecha21 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion21)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion21) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion21) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column22 != null) {
            var numeroPosicion22 = obtenerPosicion(data.prueba[i].Column22);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column17));
            var fecha22 = obtenerFecha(data.prueba[i].Column22);
            if (fecha22 == "6" || fecha22 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion22)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion22) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion22) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column23 != null) {
            var numeroPosicion23 = obtenerPosicion(data.prueba[i].Column23);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column18));
            var fecha23 = obtenerFecha(data.prueba[i].Column23);
            if (fecha23 == "6" || fecha23 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion23)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion23) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion23) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column24 != null) {
            var numeroPosicion24 = obtenerPosicion(data.prueba[i].Column24);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column19));
            var fecha24 = obtenerFecha(data.prueba[i].Column24);
            if (fecha24 == "6" || fecha24 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion24)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion24) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion24) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column25 != null) {
            var numeroPosicion25 = obtenerPosicion(data.prueba[i].Column25);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column20));
            var fecha25 = obtenerFecha(data.prueba[i].Column25);
            if (fecha25 == "6" || fecha25 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion25)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion25) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion25) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column26 != null) {
            var numeroPosicion26 = obtenerPosicion(data.prueba[i].Column26);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column21));
            var fecha26 = obtenerFecha(data.prueba[i].Column26);
            if (fecha26 == "6" || fecha26 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion26)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion26) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion26) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }

        if (data.prueba[i].Column27 != null) {
            var numeroPosicion27 = obtenerPosicion(data.prueba[i].Column27);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column22));
            var fecha27 = obtenerFecha(data.prueba[i].Column27);
            if (fecha27 == "6" || fecha27 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion27)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion27) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion27) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }

        if (data.prueba[i].Column28 != null) {
            var numeroPosicion28 = obtenerPosicion(data.prueba[i].Column28);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column23));
            var fecha28 = obtenerFecha(data.prueba[i].Column26);
            if (fecha28 == "6" || fecha28 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion28)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion28) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion28) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }


    }

    temp += "</tr>";
    tempPo += "</tr>";
    tempV += "</tr>";
    var tablenew = $("#tbodyResult");
    var Periodo = $("#Saldos option:selected").val();
    var tablenew = $("#nombreCuentas");
    if (Periodo == "S") {

        tablenew.append(temp);

    }
    if (Periodo == "V") {

        tablenew.append(tempV);

    }
    if (Periodo == "P") {

        tablenew.append(tempPo);

    }







}

function imprimirAnual(data) {
    var Variacion = $("#Variacion");
    var temp = "";
    var tempV = "";
    var tempPo = "";
    var variable = "";
    var tempVariacion = "";
    var cifras = $("#cifras option:selected").val();
    var TrimestralVariacion = 0;
    for (var i = 0; i < data.prueba.length ; i++) {

        temp += "<tr>";
        temp += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        temp += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

        tempV += "<tr>";
        tempV += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        tempV += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

        tempPo += "<tr>";
        tempPo += "<td>" + data.prueba[i].CodigoCuenta + "</td>";
        tempPo += "<td>" + data.prueba[i].DescripcionCuenta + "</td>";

        if (data.prueba[i].Column4 != null) {
            var numeroPosicion4 = obtenerPosicion(data.prueba[i].Column4);

            var fecha4 = obtenerFecha(data.prueba[i].Column4);
            if (fecha4 == "12") {


                TrimestralVariacion = (parseFloat(numeroPosicion4));

                // temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion3)) / cifras)) + "</td>";
            }
        }

        if (data.prueba[i].Column5 != null) {
            var numeroPosicion5 = obtenerPosicion(data.prueba[i].Column5);
            var fecha5 = obtenerFecha(data.prueba[i].Column5);
            if (fecha5 == "12") {

                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion5)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion5) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion5) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";
                TrimestralVariacion = parseFloat(numeroPosicion5);
            }
        }
        if (data.prueba[i].Column6 != null) {
            var numeroPosicion6 = obtenerPosicion(data.prueba[i].Column6);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column4));
            var fecha6 = obtenerFecha(data.prueba[i].Column6);
            if (fecha6 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion6)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion6) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion6) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }


        }
        if (data.prueba[i].Column7 != null) {
            var numeroPosicion7 = obtenerPosicion(data.prueba[i].Column7);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column5));
            var fecha7 = obtenerFecha(data.prueba[i].Column7);
            if (fecha7 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion6)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion6) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion6) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column8 != null) {
            var numeroPosicion8 = obtenerPosicion(data.prueba[i].Column8);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column6));
            var fecha8 = obtenerFecha(data.prueba[i].Column8);
            if (fecha8 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion8)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion8) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion8) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }


        if (data.prueba[i].Column9 != null) {
            var numeroPosicion9 = obtenerPosicion(data.prueba[i].Column9);
            var fecha9 = obtenerFecha(data.prueba[i].Column9);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column4));
            if (fecha9 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion9)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion9) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion9) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column10 != null) {
            var numeroPosicion10 = obtenerPosicion(data.prueba[i].Column10);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column4));
            var fecha10 = obtenerFecha(data.prueba[i].Column10);
            if (fecha10 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion10)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion10) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion10) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column11 != null) {
            var fecha11 = obtenerPosicion(data.prueba[i].Column11);
            var numeroPosicion11 = obtenerFecha(data.prueba[i].Column6);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column9));
            if (fecha11 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion11)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion11) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion11) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column12 != null) {
            var numeroPosicion12 = obtenerPosicion(data.prueba[i].Column12);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column7));
            var fecha12 = obtenerFecha(data.prueba[i].Column12);
            if (fecha12 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion12)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion12) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion12) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";
                TrimestralVariacion = parseFloat(numeroPosicion12);
            }
        }
        if (data.prueba[i].Column13 != null) {
            var numeroPosicion13 = obtenerPosicion(data.prueba[i].Column13);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column8));
            var fecha13 = obtenerFecha(data.prueba[i].Column13);
            if (fecha13 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion13)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion13) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion13) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column14 != null) {
            var numeroPosicion14 = obtenerPosicion(data.prueba[i].Column14);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column9));
            var fecha14 = obtenerFecha(data.prueba[i].Column14);
            if (fecha14 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion14)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion14) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion14) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column15 != null) {
            var numeroPosicion15 = obtenerPosicion(data.prueba[i].Column15);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column4));
            var fecha15 = obtenerFecha(data.prueba[i].Column15);
            if (fecha15 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion15)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion15) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion15) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column16 != null) {
            var numeroPosicion16 = obtenerPosicion(data.prueba[i].Column16);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column11));
            var fecha16 = obtenerFecha(data.prueba[i].Column16);
            if (fecha16 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion16)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion16) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion16) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column17 != null) {
            var numeroPosicion17 = obtenerPosicion(data.prueba[i].Column17);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column12));
            var fecha17 = obtenerFecha(data.prueba[i].Column17);
            if (fecha17 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion17)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion17) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion17) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column18 != null) {
            var numeroPosicion18 = obtenerPosicion(data.prueba[i].Column18);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column13));
            var fecha18 = obtenerFecha(data.prueba[i].Column18);
            if (fecha18 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion18)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion18) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion18) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column19 != null) {
            var numeroPosicion19 = obtenerPosicion(data.prueba[i].Column19);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column14));
            var fecha19 = obtenerFecha(data.prueba[i].Column19);
            if (fecha19 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion19)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion19) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion19) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column20 != null) {
            var numeroPosicion20 = obtenerPosicion(data.prueba[i].Column20);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column4));

            var fecha20 = obtenerFecha(data.prueba[i].Column20);
            if (fecha20 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion20)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion20) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion20) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column21 != null) {
            var numeroPosicion21 = obtenerPosicion(data.prueba[i].Column21);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column16));
            var fecha21 = obtenerFecha(data.prueba[i].Column21);
            if (fecha21 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion21)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion21) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion21) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column22 != null) {
            var numeroPosicion22 = obtenerPosicion(data.prueba[i].Column22);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column17));
            var fecha22 = obtenerFecha(data.prueba[i].Column22);
            if (fecha22 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion22)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion22) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion22) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column23 != null) {
            var numeroPosicion23 = obtenerPosicion(data.prueba[i].Column23);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column18));
            var fecha23 = obtenerFecha(data.prueba[i].Column23);
            if (fecha23 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion23)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion23) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion23) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column24 != null) {
            var numeroPosicion24 = obtenerPosicion(data.prueba[i].Column24);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column19));
            var fecha24 = obtenerFecha(data.prueba[i].Column24);
            if (fecha24 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion24)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion24) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion24) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column25 != null) {
            var numeroPosicion25 = obtenerPosicion(data.prueba[i].Column25);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column20));
            var fecha25 = obtenerFecha(data.prueba[i].Column25);
            if (fecha25 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion25)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion25) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion25) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }
        if (data.prueba[i].Column26 != null) {
            var numeroPosicion26 = obtenerPosicion(data.prueba[i].Column26);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column21));
            var fecha26 = obtenerFecha(data.prueba[i].Column26);
            if (fecha26 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion26)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion26) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion26) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }

        if (data.prueba[i].Column27 != null) {
            var numeroPosicion27 = obtenerPosicion(data.prueba[i].Column27);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column16));
            var fecha27 = obtenerFecha(data.prueba[i].Column27);
            if (fecha27 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion27)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion27) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion27) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }

        if (data.prueba[i].Column28 != null) {
            var numeroPosicion28 = obtenerPosicion(data.prueba[i].Column28);
            TrimestralVariacion = parseFloat(obtenerPosicion(data.prueba[i].Column27));
            var fecha28 = obtenerFecha(data.prueba[i].Column26);
            if (fecha28 == "12") {
                temp += "<td>" + numberWithCommas(((parseFloat(numeroPosicion28)) / cifras)) + "</td>";
                tempV += "<td>" + numberWithCommas(((parseFloat(numeroPosicion28) - (TrimestralVariacion)) / cifras)) + "</td>";
                tempPo += "<td>" + numberWithCommas((((parseFloat(numeroPosicion28) - (TrimestralVariacion)) / TrimestralVariacion) / cifras)) + "</td>";

            }
        }


    }

    temp += "</tr>";
    tempPo += "</tr>";
    tempV += "</tr>";
    var tablenew = $("#tbodyResult");
    var Periodo = $("#Saldos option:selected").val();
    var tablenew = $("#nombreCuentas");
    if (Periodo == "S") {

        tablenew.append(temp);

    }
    if (Periodo == "V") {

        tablenew.append(tempV);

    }
    if (Periodo == "P") {

        tablenew.append(tempPo);

    }







}


function numberWithCommas(x) {
    var decimalesNum = "";
    var cifras = $("#cifras option:selected").val();
    var decimales = $("#Decimales option:selected").val();
    decimales = parseFloat(decimales);
    cifras = parseFloat(cifras);
    x = parseFloat(x / cifras);
    x = x.toString();

    var index = x.indexOf(".");
    if (index != -1) {

        var palabraEntera = x.substring(0, index);
        decimalesNum = x.substring(index, x.length);
        decimalesNum = decimalesNum.substring(1, decimales + 1);

    } else {

        var palabraEntera = x.substring();

    }



    palabraEntera = palabraEntera.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(palabraEntera))
        palabraEntera = palabraEntera.replace(pattern, "$1,$2");
    if (decimalesNum != "") {

        return palabraEntera + "." + decimalesNum;

    }

    return palabraEntera;
}

function genararGrafica() {

    alert("Pruebas");

}


