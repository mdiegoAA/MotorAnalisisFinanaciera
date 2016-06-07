$(document).ready(function () {

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






