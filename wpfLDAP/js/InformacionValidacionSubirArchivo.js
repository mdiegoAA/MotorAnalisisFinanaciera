$(document).ready(function () {

    var btnModalReemplazarDatos = $("#btnModalReemplazarDatos");
    var validarArchivo = $("#validarArchivo");

    var guardarArchivoNuevo = $("#guardarArchivoNuevo");
    btnModalReemplazarDatos.click(function () {

        window.location.href = "CargarArchivo.aspx";


    });
    guardarArchivoNuevo.click(function () {

        var fechaArchivo = $("#datepicker").val();

        

        FguardarArchivoNuevo();

    });

    validarArchivo.click(function () {

        var validacionFecha = $("#validacionFecha");

        var datepicker = $("#datepicker").val();
        
        if (datepicker != "") {

            validacionFecha.removeClass("has-error");

            validarArchivoGuardar();

        } else {

          
            validacionFecha.addClass("has-error");

        }
        
      

    });


    Obtener_CentroCostos_Cliente();
    
    var btnModalAgregarCentroCosto = $("#btnModalAgregarCentroCosto");
    btnModalAgregarCentroCosto.click(function () {


        agregarCentroPrueba();
        var myModalCentoCosto = $("#myModalCentoCosto");
        myModalCentoCosto.modal("hide");


    });

  
   

});

function FguardarArchivoNuevo() {
    
    var fechaArchivo = $("#datepicker").val();
    var CentroCosto = $("#optionCentroCosto option:selected").val();
   


    var data = {

        fechaArchivo: fechaArchivo,
        CentroCosto: CentroCosto

    }

    $.ajax({


        url: "InformacionValidacionSubirArchivo.aspx/SeleccionarInformacionArchivo_idEstadoCreado",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (result) {

            if (result.d == true) {

                var CentroCostos = $("#optionCentroCosto option:selected").val();

                window.location.href = "CargarArchivo.aspx?id=" + CentroCostos + "";

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
    var CentroCosto = $("#optionCentroCosto option:selected").val();

    var data={
        
        fechaArchivo:fechaArchivo,
        CentroCosto:CentroCosto
    
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

            if (result.d == true) {

                var modalValidacionReemplazarArchivo = $("#modalValidacionReemplazarArchivo");
                modalValidacionReemplazarArchivo.modal("show");

            }
          

        }

    });
   

}



    


