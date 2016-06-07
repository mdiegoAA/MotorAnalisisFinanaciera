var conjunto = "";
var temF = "";
var ecuacionGuardar = "";
var ecuacionQuery = "";
var centroCosto = "";




var rSultQury = "";

$(document).ready(function () {


  
    centroCosto = location.search.split('id=')[1];

   
   
    var ResolverEcuacion = $("#ResolverEcuacion");

    ResolverEcuacion.click(function () {

      
    

        var data = {
            query: ecuacionQuery
        }
        $.ajax({
            url: "Ecuaciones.aspx/ResoverEcuacion",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(data),
            success: function (result) {

                animacion();

                if ((parseFloat(result.d) <= 0) && (parseFloat(result.d) > -1)) {

                    var rSult = (result.d);

                } else {
                    var rSult = numberWithCommas(result.d);

                }



                var EcuacionEscrita = $("#EcuacionEscrita");
                EcuacionEscrita.val(temF + " =  " + rSult);

                pararAnimacion();

            }

        });


    });

    var BuscarEcuacion = $("#BuscarEcuacion");

    BuscarEcuacion.click(function () {

        traerEcuacion();

    });

    var btnGuardarEcuaciones = $("#btnGuardarEcuaciones");

    btnGuardarEcuaciones.click(function () {

        guardarEcuacionesT();

    });

    var btnguardarEcuacion = $("#btnguardarEcuacion");
    btnguardarEcuacion.click(function () {

        guardarEcuaciones();

    });
   
    var BorrarEcuacion = $("#BorrarEcuacion");
    BorrarEcuacion.click(function () {

        limpiarEcuacion();

    });


    animacion();

    

    var modalEcuacionBtn = $("#modalEcuacionBtn");
    modalEcuacionBtn.click(function () {


        var textEcuacion = $("#textEcuacion").val();


        

        var variableA = $("#variableA").val();
        var variableB = $("#variableB").val();
        var variableC = $("#variableC").val();
        var variableD = $("#variableD").val();
        var variableW = $("#variableW").val();
        var variableX = $("#variableX").val();
        var variableY = $("#variableY").val();
        var variableZ = $("#variableZ").val();

       

        var temp = "";
        var tempSql = "";
         
        var ecuacionSql = "" ;
        temp = textEcuacion;
        tempSql = textEcuacion;

    
       
      
        if (variableA == "") {

            variableA = 0;
        }
        if (variableB == "") {

            variableB = 0;
        }
        if (variableC == "") {

            variableC = 0;
        }
        if (variableD == "") {

            variableD = 0;
        }

        if (variableW == "") {

            variableD = 0;
        }

           

        temp = temp.replace(/a/g, variableA);
        temp = temp.replace(/b/g, variableB);
        temp = temp.replace(/c/g, variableC);
        temp = temp.replace(/d/g, variableD);
        temp = temp.replace(/w/g, variableW);
        temp = temp.replace(/x/g, variableX);
     //   temp = temp.replace(/y/g, variableY);
        temp = temp.replace(/z/g, variableZ);


        tempSql = tempSql.replace(/a/g, "aaaaa");
        tempSql = tempSql.replace(/b/g, "bbbbb");
        tempSql = tempSql.replace(/c/g, "ccccc");
        tempSql = tempSql.replace(/d/g, "ddddd");
        tempSql = tempSql.replace(/w/g, "wwwww");
       
      

     


        console.log(tempSql);
        temF = temp;

        tempSql = tempSql.replace(/aaaaa/g, "(select CONVERT(decimal,(select  valorCuenta from Amequita_MAIF_InformacionCuenta_ValorCuenta_IDArchivo where cuenta = " + variableA + " and idArchivo = @idArchivo)))");
        tempSql = tempSql.replace(/bbbbb/g, "(select CONVERT(decimal,(select  valorCuenta from Amequita_MAIF_InformacionCuenta_ValorCuenta_IDArchivo where cuenta = " + variableB + " and idArchivo = @idArchivo)))");
        tempSql = tempSql.replace(/ddddd/g, "(select CONVERT(decimal,(select  valorCuenta from Amequita_MAIF_InformacionCuenta_ValorCuenta_IDArchivo where cuenta = " + variableD + " and idArchivo = @idArchivo)))");
        tempSql = tempSql.replace(/ccccc/g, "(select CONVERT(decimal,(select  valorCuenta from Amequita_MAIF_InformacionCuenta_ValorCuenta_IDArchivo where cuenta = " + variableC + " and idArchivo = @idArchivo)))");
        tempSql = tempSql.replace(/wwwww/g, "(select CONVERT(decimal,(select  valorCuenta from Amequita_MAIF_InformacionCuenta_ValorCuenta_IDArchivo where cuenta = " + variableW + " and idArchivo = @idArchivo)))");
        tempSql = tempSql.replace(/y/g, "and");
        //tempSql = tempSql.replace(/or/g, "or");


       //tempSql = tempSql.replace(/SI/g, "IF");
      
    
        tempSql = "select 'True' as rSult where (" + tempSql + " ) ";
        ecuacionQuery = tempSql;
        console.log(tempSql);       
   
      


     //   alert(temp);

        var TextEcuacion = $("#TextEcuacion");
        TextEcuacion.empty();
        TextEcuacion.append(temp);
        var EcuacionEscrita = $("#EcuacionEscrita");
        EcuacionEscrita.val(temp);
        ecuacionGuardar = temp;
        var panelEcuacionEscrita = $("#panelEcuacionEscrita");
        panelEcuacionEscrita.css("display", "block");


    });


    var validarArchivo = $("#validarArchivo");
    var guardarArchivoNuevo = $("#guardarArchivoNuevo");
    guardarArchivoNuevo.click(function () {

        FguardarArchivoNuevo();

    });

    validarArchivo.click(function () {

        crearSessionIdCENTROCOSTO();

    });


    Obtener_CentroCostos_Cliente();

    var btnModalAgregarCentroCosto = $("#btnModalAgregarCentroCosto");
    btnModalAgregarCentroCosto.click(function () {


        agregarCentroPrueba();
        var myModalCentoCosto = $("#myModalCentoCosto");
        myModalCentoCosto.modal("hide");


    });




});

function crearSessionIdCENTROCOSTO() {

    var IdCentroCosto = $("#optionCentroCosto option:selected").val();

    var data = {
        IdCentroCosto: IdCentroCosto
    }

    $.ajax({


        url: "ValidarSubirPlanUnicoCuenta.aspx/CrearSessionCentroCosto",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (result) {

            if (result.d == true) {

                window.location.href = "CargarPlanUnicoCuenta.aspx";

            }


        }

    });




}

function FguardarArchivoNuevo() {

    var fechaArchivo = $("#datepicker").val();
    var IdCentroCosto = $("#optionCentroCosto option:selected").val();

    var data = {

        fechaArchivo: fechaArchivo,
        IdCentroCosto: IdCentroCosto

    }

    $.ajax({


        url: "InformacionValidacionSubirArchivo.aspx/SeleccionarInformacionArchivo_idEstadoCreado",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (result) {

            if (result.d == true) {

                window.location.href = "CargarPlanUnicoCuenta.aspx";

            }


        }

    });


}


function Obtener_CentroCostos_Cliente() {

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

        }

    });





};

function agregarCentroPrueba() {


    //alert("PruebasR");


    var NuevoCentroCosto = $("#NuevoCentroCosto").val();
    var DescripcionNuevoCentroCosto = $("#DescripcionNuevoCentroCosto").val();

    var centroCosto = {

        NuevoCentroCosto: NuevoCentroCosto,
        DescripcionNuevoCentroCosto: DescripcionNuevoCentroCosto

    }
    $.ajax({


        url: "InformacionValidacionSubirArchivo.aspx/AgregarAmezquitaCentroCostos",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(centroCosto),
        success: function (result) {

            var data = JSON.parse(result.d);
            var MyArray = data.Table;
            var temp = "";

            for (var i = 0; i < data.length; i++) {
                temp += '<option value="' + data[i].idCentroCosto + '" option:selected>' + data[i].nombreCentroCosto + '</option>';
            };

            optionCentroCosto = $("#optionCentroCosto");
            optionCentroCosto.append(temp);

            $('#optionCentroCosto option[value="' + data[0].idCentroCosto + '"]').attr("selected", true);

        },
        error: function (err) {
            alert("Fail");
        }


    });

};

function validarArchivoGuardar() {



    var fechaArchivo = $("#datepicker").val();
    var IdCentroCosto = $("#optionCentroCosto option:selected").val();

    var data = {

        fechaArchivo: fechaArchivo,
        IdCentroCosto: IdCentroCosto

    }

    $.ajax({


        url: "InformacionValidacionSubirArchivo.aspx/validarArchivoXfecha_centro_Costo",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (result) {

            if (result.d == false) {

                var modalValidacionGuardar = $("#modalValidacionGuardar");
                modalValidacionGuardar.modal("show");

            }


        }

    });


}

function limpiarEcuacion() {


    var modalEcuaciones = $("#modalEcuaciones");
    modalEcuaciones.modal("show");

    var btnlimpiarEcuacion = $("#btnlimpiarEcuacion");
    btnlimpiarEcuacion.click(function () {

        borrarEcuacion();

    });

   
   
   
}

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

    ecuacionGuardar = ecuaciontemp;

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

function traerEcuacion() {

    $.ajax({


        url: "Ecuaciones.aspx/TraerInformacionEcuacionXIdCliente",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
       
        success: function (result) {

          

            var Query = "";
            var ecuacion ="";

            var datas = "";

            var data = JSON.parse(result.d);

            rSultQury = data;

            var temp = "";
            for (var i = 0; i < data.length; i++) {

                var queryNew = data[i].query;
                queryNew = queryNew.replace(/ /g, "!!");


                temp += "<tr>";
                temp += "<td>" + data[i].Ecuacion + "</td>";
                temp += "<td>" + data[i].descripcionEcuacion + "</td>";
                temp += "<td class='center'> <button type='button' class='btn btn-primary'  onclick=SolucionMisEcuaciones('" + i + "') aria-label='Left Align'><span class='fa fa-search' aria-hidden='true'></span> </button>";
                temp += "<td class='center'> <button  type='button' class='btn btn-danger' aria-label='Left Align'><span class='fa fa-trash-o' aria-hidden='true'></span> </button>"
               
                datas = data[i].query;
                ecuacion =  data[i].Ecuacion ;
                ecuacionQuery = datas;
                Query = datas.replace(/ /g, "!!");


              
                temp +="<td id='SolEcuacion"+i+"'></td>"
               
                temp += "</tr>";
            };

          
            var MisEcuaciones = $("#MisEcuaciones");

            MisEcuaciones.empty();
            MisEcuaciones.append(temp);

            var modalTraerEcuaciones = $("#modalTraerEcuaciones");
            modalTraerEcuaciones.modal("show");




        },
        error: function (err) {
            alert("Fail");
        }


    });


}

function SolucionMisEcuaciones(i) {
    
  

    ecuacionQuery = rSultQury[i].query;


    var data = {
        query: ecuacionQuery
    }
    $.ajax({
        url: "Ecuaciones.aspx/ResoverEcuacion",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (result) {


            var reportEcuacion = "<tr>";

            reportEcuacion += "<td>" + rSultQury[i].Ecuacion + "</td>";
            reportEcuacion += "<td>" + rSultQury[i].descripcionEcuacion + "</td>";

            query.push(rSultQury[i].Ecuacion);
            descripcionQuery.push(rSultQury[i].descripcionEcuacion);




            var rSult = $("#SolEcuacion" + i);          
            if (result.d == "True") {
                var temp = "<a class='btn btn-primary'><i class='fa fa-thumbs-o-up' aria-hidden='true' title='Skip to main navigation'></i><span class='sr-only'>Skip to main navigation</span></a>";
                reportEcuacion += "<td>  Se Cumple </td>";
                RsultQuery.push("Ecuacion se cumple");

                rSult.empty();
              rSult.append(temp);           
                
            }

            if (result.d != "True") {
                var temp = "<a class='btn btn-danger'><i class='fa fa-thumbs-o-down' aria-hidden='true' title='Skip to main navigation'></i><span class='sr-only'>Skip to main navigation</span></a>";

                reportEcuacion += "<td> No se Cumple </td>";
                rSult.empty();
                rSult.append(temp);
                RsultQuery.push("Ecuacion no se  cumple");


            }

            reportEcuacion += "</tr>";
            var bodyreportEcuaciones = $("#bodyreportEcuaciones");
            bodyreportEcuaciones.append(reportEcuacion);
          //  demoFromHTML();

        }

    });


}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function borrarEcuacion() {
    
    var textEcuacion = $("#textEcuacion");
    textEcuacion.val("");
    var panelEcuacionEscrita = $("#panelEcuacionEscrita");
    panelEcuacionEscrita.css("display", "none");
    var EcuacionEscrita = $("#EcuacionEscrita");
    EcuacionEscrita.val("");
    var variableA = $("#variableA");
    variableA.val("");
    var variableB = $("#variableB");
    variableB.val("");
    var variableC = $("#variableC");
    variableC.val("");
    var variableD = $("#variableD");
    variableD.val("");
    var modalEcuaciones = $("#modalEcuaciones");
    modalEcuaciones.modal("hide");



}

function guardarEcuaciones() {
    
   



    var EcuacionGuardar = $("#EcuacionGuardar");
    EcuacionGuardar.val(ecuacionGuardar);


    var exampleModal = $("#exampleModal");
    exampleModal.modal('show');

}

function animacion() {

    $("#element").introLoader();
}

function pararAnimacion() {
    var loader = $('#element').data('introLoader');
    loader.stop();

}

function guardarEcuacionesT() {
    
    var ecuacion = $("#EcuacionGuardar").val();
    var descripcion = $("#descripcion").val();
    var queryEcuaciones = ecuacionQuery;
   
    var ecuacion = {


        centroCosto:centroCosto,
        ecuacion: ecuacion,
        descripcionEcuacion: descripcion,
        queryEcuacion: queryEcuaciones
    }
    $.ajax({


        url: "Ecuaciones.aspx/GuardarEcuacion",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(ecuacion),
        success: function (result) {

            var exampleModal = $("#exampleModal");
            exampleModal.modal('hidden');

        },
        error: function (err) {
            alert("Fail");
        }


    });




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

function MiEcuaciones(query, ecuacion)
{

    temF = ecuacion;
    var queryNew = query.replace(/!!/g, " ");
    var EcuacionEscrita = $("#EcuacionEscrita");
    EcuacionEscrita.val(ecuacion);
    var panelEcuacionEscrita = $("#panelEcuacionEscrita");
    panelEcuacionEscrita.css("display", "block");
   
    console.log(query);

    ecuacionQuery = queryNew;

}




