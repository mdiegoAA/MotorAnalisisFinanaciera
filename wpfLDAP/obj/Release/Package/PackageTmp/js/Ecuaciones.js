var conjunto = "";
$(document).ready(function () {
    animacion();

    var generarEcuacion = $("#generarEcuacion");
    generarEcuacion.click(function () {

        generarEcuacionScript();

    });

    var reporteExcelArchivo = $("#reporteExcelArchivo");
    reporteExcelArchivo.click(function () {
        reporteTableArchivo();

    });





    var Buscar = $("#Buscar");
    Buscar.click(function () {
        animacion();
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





    });



});


function generarEcuacionScript() {
    var NuevaEcuacionquery = $("#NuevaEcuacion").val();
    var NuevaEcuacion = $("#NuevaEcuacion").val();
    var ecuaciontemp = "";

    var valorA = $("#valorA").val();
    var valorB = $("#valorB").val();
    var valorC = $("#valorC").val();
    var valorD = $("#valorD").val();


    var valorW = $("#valorW").val();
    var valorX = $("#valorX").val();
    var valorY = $("#valorY").val();
    var valorZ = $("#valorZ").val();

    NuevaEcuacion = NuevaEcuacion.replace(/a/g, valorA);
    NuevaEcuacion = NuevaEcuacion.replace(/b/g, valorB);
    NuevaEcuacion = NuevaEcuacion.replace(/c/g, valorC);
    NuevaEcuacion = NuevaEcuacion.replace(/d/g, valorD);
    NuevaEcuacion = NuevaEcuacion.replace(/w/g, valorW);
    NuevaEcuacion = NuevaEcuacion.replace(/x/g, valorX);
    NuevaEcuacion = NuevaEcuacion.replace(/y/g, valorY);
    NuevaEcuacion = NuevaEcuacion.replace(/z/g, valorZ);

    var ecuaciontemp = "";

    for (var i = 0; i <= NuevaEcuacion.length; i++) {

        ecuaciontemp += "<var>" + NuevaEcuacion.charAt(i) + "</var>";


    }



    var EcuacionScript = $("#EcuacionScript");
    EcuacionScript.append(ecuaciontemp);




    var rsultQuery = "(select CONVERT(decimal,(select  valorCuenta from Amequita_MAIF_InformacionCuenta_ValorCuenta_IDArchivo where cuenta = varAux and idArchivo = 65)))";

    rsultQuery = rsultQuery.replace("varAux", valorA);
    var NuevaEcuacionqueryP = NuevaEcuacionquery.replace(/a/g, rsultQuery);


    //Pprincipal = "select(" + Pprincipal + ")";


    console.log(NuevaEcuacionqueryP);

   






}

function reporteTableArchivo() {

    $("#dataTables").table2excel({

        // exclude CSS class

        exclude: ".noExl",
        name: "Prueba.xls",
        filename: "Archivos"

    });



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
        url: "InformacionValidacionSubirArchivo.aspx/Amezquita_MAIF_Obtener_CentroCostos_Cliente",
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





