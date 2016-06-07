<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Graficas.aspx.cs" Inherits="wpfLDAP.pages.Graficas" %>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SB Admin 2 - Bootstrap Admin Theme</title>
 <script type="text/javascript" src="https://www.google.com/jsapi"></script> 
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script> 
    <link href="../jqueryIntroLoader/introLoader.min.css" rel="stylesheet"/>
    <script src="../jqueryIntroLoader/jquery.introLoader.pack.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/base/jquery-ui.css">
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
      <link href="http://cdn.rawgit.com/davidstutz/bootstrap-multiselect/master/dist/css/bootstrap-multiselect.css"
        rel="stylesheet" type="text/css" />
    <script src="http://cdn.rawgit.com/davidstutz/bootstrap-multiselect/master/dist/js/bootstrap-multiselect.js"
        type="text/javascript"></script>
    <script src="../js/jquery.table2excel.js"></script>
    <script src="../dist/js/sb-admin-2.js"></script>   
    <link href="../css/kolorpicker.css"rel="stylesheet" />
    <script type="text/javascript" src="../js/Graficas.js"></script>
     <script src="../js/jquery.fixedTblHdrLftCol.js"></script>   
    <script type="text/javascript" src="../js/jquery.kolorpicker.js"></script>
       <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">
        google.load("visualization", "1", { packages: ["corechart"] });
        google.setOnLoadCallback(drawChart);
        function dibujarGrafico(mes, valor) {

          

            var varDiv = $("#cifras option:selected").val();


            var div = parseFloat(varDiv);

            console.log(div);

            var arrays = new Array();
            var cuentasM = new Array();
          
            for (var inicio = 0 ; inicio < valor.prueba.length - 1 ; inicio++)
            {
                
                var cuenta = $('#' + valor.prueba[inicio].CodigoCuenta + '');
                if (cuenta.is(':checked')) {                        
                    arrays.push(inicio);
                    cuentasM.push(cuenta);
                }            
            }


         
            var ra = [];

            ra.push("Cuentas");
            for (var i = 0 ; i <= cuentasM.length -1 ; i++) {

                ra.push(cuentasM[i].selector);

            }
             
            var j = 0;
       
            if ((valor.prueba[0].Column4) != null) {
                var final = new Array();
                var indexMes1 = (mes[j].indexOf("_"));
                if (indexMes1 == null) {

                    var mes1 = 0;

                } else {

                    var mes1 = (mes[j].substring(0, indexMes1));

                }
           

                final.push(mes1);


            for (var cuenta = 0 ; cuenta <= arrays.length - 1 ; cuenta++) {             

                var index = (valor.prueba[arrays[cuenta]].Column4.indexOf("_"));
                if (index == null) {

                    var cuentafinalArreglo = 0;

                } else {

                    var cuentafinalArreglo = parseFloat(valor.prueba[arrays[cuenta]].Column4.substring(0, index));

                }
                   
                final.push(cuentafinalArreglo / div);
                }
            }



        

            var data = google.visualization.arrayToDataTable([

              ra, final
            ]);

            data.addRow(final);
            data.removeRow(0);

            if ((valor.prueba[0].Column5) != null) {
                j = j + 1;
                
                console.log("---------------------*------------------");

                console.log(j);
                console.log(mes[j]);
                

                console.log("---------------------*------------------");

                var final2 = new Array();
                var indexMes2 = (mes[j].indexOf("_"));

                var mes2 = (mes[j].substring(0, indexMes2));
                final2.push(mes2);


                for (var cuenta2 = 0 ; cuenta2 <= arrays.length - 1 ; cuenta2++) {
                    var index2 = (valor.prueba[arrays[cuenta2]].Column5.indexOf("_"));


                    if (index2 == null) {

                        var cuentafinalArreglo2 = 0;

                    } else {
                        var cuentafinalArreglo2 = parseFloat(valor.prueba[arrays[cuenta2]].Column5.substring(0, index2));

                    }

                    final2.push(cuentafinalArreglo2 / div);
                }
                data.addRow(final2);
            }



            if ((valor.prueba[0].Column6) != null) {
                j = j + 1;
                var final3 = new Array();
                var indexMes3 = (mes[j].indexOf("_"));

                var mes3 = (mes[j].substring(0, indexMes3));
                final3.push(mes3);


                for (var cuenta3 = 0 ; cuenta3 <= arrays.length - 1 ; cuenta3++) {
                    var index3 = (valor.prueba[arrays[cuenta3]].Column6.indexOf("_"));


                    if (index3 == null) {

                        var cuentafinalArreglo3 = 0;

                    } else {
                        var cuentafinalArreglo3 = parseFloat(valor.prueba[arrays[cuenta3]].Column6.substring(0, index3));

                    }

                    final3.push(cuentafinalArreglo3 / div);
                }
                data.addRow(final3);
            }


            if ((valor.prueba[0].Column7) != null) {
                j = j + 1;
                var final4 = new Array();
                var indexMes4 = (mes[j].indexOf("_"));

                var mes4 = (mes[j].substring(0, indexMes4));
                final4.push(mes4);


                for (var cuenta4 = 0 ; cuenta4 <= arrays.length - 1 ; cuenta4++) {
                    var index4 = (valor.prueba[arrays[cuenta4]].Column7.indexOf("_"));


                    if (index4 == null) {

                        var cuentafinalArreglo4 = 0;

                    } else {
                        var cuentafinalArreglo4 = parseFloat(valor.prueba[arrays[cuenta4]].Column7.substring(0, index4));

                    }

                    final4.push(cuentafinalArreglo4 / div);
                }
                data.addRow(final4);
            }
            

            if ((valor.prueba[0].Column8) != null) {
                j = j + 1;
                var final5 = new Array();
                var indexMes5 = (mes[j].indexOf("_"));

                var mes5 = (mes[j].substring(0, indexMes5));
                final5.push(mes5);


                for (var cuenta5 = 0 ; cuenta5 <= arrays.length - 1 ; cuenta5++) {
                    var index5 = (valor.prueba[arrays[cuenta5]].Column8.indexOf("_"));


                    if (index5 == null) {

                        var cuentafinalArreglo5 = 0;

                    } else {
                        var cuentafinalArreglo5 = parseFloat(valor.prueba[arrays[cuenta5]].Column8.substring(0, index5));

                    }

                    final5.push(cuentafinalArreglo5 / div);
                }
                data.addRow(final5);
            }


            if ((valor.prueba[0].Column9) != null) {
                j = j + 1;
                var final6 = new Array();
                var indexMes6 = (mes[j].indexOf("_"));

                var mes6 = (mes[j].substring(0, indexMes6));
                final6.push(mes6 + " ");


                for (var cuenta6 = 0 ; cuenta6 <= arrays.length - 1 ; cuenta6++) {
                    var index6 = (valor.prueba[arrays[cuenta6]].Column9.indexOf("_"));


                    if (index6 == null) {

                        var cuentafinalArreglo6 = 0;

                    } else {
                        var cuentafinalArreglo6 = parseFloat(valor.prueba[arrays[cuenta6]].Column9.substring(0, index6));

                    }

                    final6.push(cuentafinalArreglo6 / div);
                }
                data.addRow(final6);
            }



            if ((valor.prueba[0].Column10) != null) {
                j = j + 1;
                var final7 = new Array();
                var indexMes7 = (mes[j].indexOf("_"));

                var mes7 = (mes[j].substring(0, indexMes7));
                final7.push(mes7);


                for (var cuenta7 = 0 ; cuenta7 <= arrays.length - 1 ; cuenta7++) {
                    var index7 = (valor.prueba[arrays[cuenta7]].Column10.indexOf("_"));


                    if (index7 == null) {

                        var cuentafinalArreglo7 = 0;

                    } else {
                        var cuentafinalArreglo7 = parseFloat(valor.prueba[arrays[cuenta7]].Column10.substring(0, index7));

                    }

                    final7.push(cuentafinalArreglo7 / div);
                }
                data.addRow(final7);
            }



            if ((valor.prueba[0].Column11) != null) {
                j = j + 1;
                var final8 = new Array();
                var indexMes8 = (mes[j].indexOf("_"));

                var mes8 = (mes[j].substring(0, indexMes8));
                final8.push(mes8);


                for (var cuenta8 = 0 ; cuenta8 <= arrays.length - 1 ; cuenta8++) {
                    var index8 = (valor.prueba[arrays[cuenta8]].Column11.indexOf("_"));


                    if (index8 == null) {

                        var cuentafinalArreglo8 = 0;

                    } else {
                        var cuentafinalArreglo8 = parseFloat(valor.prueba[arrays[cuenta8]].Column11.substring(0, index8));

                    }

                    final8.push(cuentafinalArreglo8 / div);
                }
                data.addRow(final8);
            }


            if ((valor.prueba[0].Column12) != null) {
                j = j + 1;
                var final9 = new Array();
                var indexMes9 = (mes[j].indexOf("_"));

                var mes9 = (mes[j].substring(0, indexMes9));
                final9.push(mes9);


                for (var cuenta9 = 0 ; cuenta9 <= arrays.length - 1 ; cuenta9++) {
                    var index9 = (valor.prueba[arrays[cuenta9]].Column12.indexOf("_"));


                    if (index9 == null) {

                        var cuentafinalArreglo9 = 0;

                    } else {
                        var cuentafinalArreglo9 = parseFloat(valor.prueba[arrays[cuenta9]].Column12.substring(0, index9));

                    }

                    final9.push(cuentafinalArreglo9 / div);
                }
                data.addRow(final9);
            }

            if ((valor.prueba[0].Column13) != null) {
                j = j + 1;
                var final10 = new Array();
                var indexMes10 = (mes[j].indexOf("_"));

                var mes10 = (mes[j].substring(0, indexMes10));
                final10.push(mes10);


                for (var cuenta10 = 0 ; cuenta10 <= arrays.length - 1 ; cuenta10++) {
                    var index10 = (valor.prueba[arrays[cuenta10]].Column13.indexOf("_"));


                    if (index10 == null) {

                        var cuentafinalArreglo10 = 0;

                    } else {
                        var cuentafinalArreglo10 = parseFloat(valor.prueba[arrays[cuenta10]].Column13.substring(0, index10));

                    }

                    final10.push(cuentafinalArreglo10 / div);
                }
                data.addRow(final10);
            }

            if ((valor.prueba[0].Column14) != null) {
                j = j + 1;
                var final11 = new Array();
                var indexMes11 = (mes[j].indexOf("_"));

                var mes11 = (mes[j].substring(0, indexMes11));
                final11.push(mes11);


                for (var cuenta11 = 0 ; cuenta11 <= arrays.length - 1 ; cuenta11++) {
                    var index11 = (valor.prueba[arrays[cuenta11]].Column14.indexOf("_"));


                    if (index11 == null) {

                        var cuentafinalArreglo11 = 0;

                    } else {
                        var cuentafinalArreglo11 = parseFloat(valor.prueba[arrays[cuenta11]].Column14.substring(0, index11));

                    }

                    final11.push(cuentafinalArreglo11 / div);
                }
                data.addRow(final11);
            }



            if ((valor.prueba[0].Column15) != null) {
                j = j + 1;
                var final12 = new Array();
                var indexMes12 = (mes[j].indexOf("_"));

                var mes12 = (mes[j].substring(0, indexMes12));
                final12.push(mes12);


                for (var cuenta12 = 0 ; cuenta12 <= arrays.length - 1 ; cuenta12++) {
                    var index12 = (valor.prueba[arrays[cuenta12]].Column15.indexOf("_"));


                    if (index12 == null) {

                        var cuentafinalArreglo12 = 0;

                    } else {
                        var cuentafinalArreglo12 = parseFloat(valor.prueba[arrays[cuenta12]].Column15.substring(0, index12));

                    }

                    final12.push(cuentafinalArreglo12 / div);
                }
                data.addRow(final12);
            }

            if ((valor.prueba[0].Column16) != null) {
                j = j + 1;
                var final13 = new Array();
                var indexMes13 = (mes[j].indexOf("_"));

                var mes13 = (mes[j].substring(0, indexMes13));
                final13.push(mes13);


                for (var cuenta13 = 0 ; cuenta13 <= arrays.length - 1 ; cuenta13++) {
                    var index13 = (valor.prueba[arrays[cuenta13]].Column16.indexOf("_"));


                    if (index13 == null) {

                        var cuentafinalArreglo13 = 0;

                    } else {
                        var cuentafinalArreglo13 = parseFloat(valor.prueba[arrays[cuenta13]].Column16.substring(0, index13));

                    }

                    final13.push(cuentafinalArreglo13 / div);
                }
                data.addRow(final13);
            }

            if ((valor.prueba[0].Column17) != null) {
                j = j + 1;
                var final14 = new Array();
                var indexMes14 = (mes[j].indexOf("_"));

                var mes14 = (mes[j].substring(0, indexMes14));
                final14.push(mes14);


                for (var cuenta14 = 0 ; cuenta14 <= arrays.length - 1 ; cuenta14++) {
                    var index14 = (valor.prueba[arrays[cuenta14]].Column17.indexOf("_"));


                    if (index14 == null) {

                        var cuentafinalArreglo14 = 0;

                    } else {
                        var cuentafinalArreglo14 = parseFloat(valor.prueba[arrays[cuenta14]].Column17.substring(0, index14));

                    }

                    final14.push(cuentafinalArreglo14 / div);
                }
                data.addRow(final14);
            }
            
            var options = {
                title: 'Cuentas',
                width:850 , 
                height:600,
                hAxis: { title: 'Cuentas', titleTextStyle: { color: 'Black', } }
            };
            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
            google.visualization.events.addListener(chart, 'ready', function () {
                var exportData = chart.getImageURI();
                $('#export').attr({ 'href': exportData, 'download': 'Imagen grafica' }).show();
            });

            chart.draw(data, options);
          

        }
        function dibujarGraficoLinea(mes, valor) {



            var varDiv = $("#cifras option:selected").val();


            var div = parseFloat(varDiv);

            console.log(div);

            var arrays = new Array();
            var cuentasM = new Array();

            for (var inicio = 0 ; inicio < valor.prueba.length - 1 ; inicio++) {

                var cuenta = $('#' + valor.prueba[inicio].CodigoCuenta + '');
                if (cuenta.is(':checked')) {
                    arrays.push(inicio);
                    cuentasM.push(cuenta);
                }
            }



            var ra = [];

            ra.push("Cuentas");
            for (var i = 0 ; i <= cuentasM.length - 1 ; i++) {

                ra.push(cuentasM[i].selector);

            }

            var j = 0;

            if ((valor.prueba[0].Column4) != null) {
                var final = new Array();
                var indexMes1 = (mes[j].indexOf("_"));
                if (indexMes1 == null) {

                    var mes1 = 0;

                } else {

                    var mes1 = (mes[j].substring(0, indexMes1));

                }


                final.push(mes1);


                for (var cuenta = 0 ; cuenta <= arrays.length - 1 ; cuenta++) {

                    var index = (valor.prueba[arrays[cuenta]].Column4.indexOf("_"));
                    if (index == null) {

                        var cuentafinalArreglo = 0;

                    } else {

                        var cuentafinalArreglo = parseFloat(valor.prueba[arrays[cuenta]].Column4.substring(0, index));

                    }

                    final.push(cuentafinalArreglo / div);
                }
            }





            var data = google.visualization.arrayToDataTable([

              ra, final
            ]);

            data.addRow(final);
            data.removeRow(0);

            if ((valor.prueba[0].Column5) != null) {
                j = j + 1;

                console.log("---------------------*------------------");

                console.log(j);
                console.log(mes[j]);


                console.log("---------------------*------------------");

                var final2 = new Array();
                var indexMes2 = (mes[j].indexOf("_"));

                var mes2 = (mes[j].substring(0, indexMes2));
                final2.push(mes2);


                for (var cuenta2 = 0 ; cuenta2 <= arrays.length - 1 ; cuenta2++) {
                    var index2 = (valor.prueba[arrays[cuenta2]].Column5.indexOf("_"));


                    if (index2 == null) {

                        var cuentafinalArreglo2 = 0;

                    } else {
                        var cuentafinalArreglo2 = parseFloat(valor.prueba[arrays[cuenta2]].Column5.substring(0, index2));

                    }

                    final2.push(cuentafinalArreglo2 / div);
                }
                data.addRow(final2);
            }



            if ((valor.prueba[0].Column6) != null) {
                j = j + 1;
                var final3 = new Array();
                var indexMes3 = (mes[j].indexOf("_"));

                var mes3 = (mes[j].substring(0, indexMes3));
                final3.push(mes3);


                for (var cuenta3 = 0 ; cuenta3 <= arrays.length - 1 ; cuenta3++) {
                    var index3 = (valor.prueba[arrays[cuenta3]].Column6.indexOf("_"));


                    if (index3 == null) {

                        var cuentafinalArreglo3 = 0;

                    } else {
                        var cuentafinalArreglo3 = parseFloat(valor.prueba[arrays[cuenta3]].Column6.substring(0, index3));

                    }

                    final3.push(cuentafinalArreglo3 / div);
                }
                data.addRow(final3);
            }


            if ((valor.prueba[0].Column7) != null) {
                j = j + 1;
                var final4 = new Array();
                var indexMes4 = (mes[j].indexOf("_"));

                var mes4 = (mes[j].substring(0, indexMes4));
                final4.push(mes4);


                for (var cuenta4 = 0 ; cuenta4 <= arrays.length - 1 ; cuenta4++) {
                    var index4 = (valor.prueba[arrays[cuenta4]].Column7.indexOf("_"));


                    if (index4 == null) {

                        var cuentafinalArreglo4 = 0;

                    } else {
                        var cuentafinalArreglo4 = parseFloat(valor.prueba[arrays[cuenta4]].Column7.substring(0, index4));

                    }

                    final4.push(cuentafinalArreglo4 / div);
                }
                data.addRow(final4);
            }


            if ((valor.prueba[0].Column8) != null) {
                j = j + 1;
                var final5 = new Array();
                var indexMes5 = (mes[j].indexOf("_"));

                var mes5 = (mes[j].substring(0, indexMes5));
                final5.push(mes5);


                for (var cuenta5 = 0 ; cuenta5 <= arrays.length - 1 ; cuenta5++) {
                    var index5 = (valor.prueba[arrays[cuenta5]].Column8.indexOf("_"));


                    if (index5 == null) {

                        var cuentafinalArreglo5 = 0;

                    } else {
                        var cuentafinalArreglo5 = parseFloat(valor.prueba[arrays[cuenta5]].Column8.substring(0, index5));

                    }

                    final5.push(cuentafinalArreglo5 / div);
                }
                data.addRow(final5);
            }


            if ((valor.prueba[0].Column9) != null) {
                j = j + 1;
                var final6 = new Array();
                var indexMes6 = (mes[j].indexOf("_"));

                var mes6 = (mes[j].substring(0, indexMes6));
                final6.push(mes6 + " ");


                for (var cuenta6 = 0 ; cuenta6 <= arrays.length - 1 ; cuenta6++) {
                    var index6 = (valor.prueba[arrays[cuenta6]].Column9.indexOf("_"));


                    if (index6 == null) {

                        var cuentafinalArreglo6 = 0;

                    } else {
                        var cuentafinalArreglo6 = parseFloat(valor.prueba[arrays[cuenta6]].Column9.substring(0, index6));

                    }

                    final6.push(cuentafinalArreglo6 / div);
                }
                data.addRow(final6);
            }



            if ((valor.prueba[0].Column10) != null) {
                j = j + 1;
                var final7 = new Array();
                var indexMes7 = (mes[j].indexOf("_"));

                var mes7 = (mes[j].substring(0, indexMes7));
                final7.push(mes7);


                for (var cuenta7 = 0 ; cuenta7 <= arrays.length - 1 ; cuenta7++) {
                    var index7 = (valor.prueba[arrays[cuenta7]].Column10.indexOf("_"));


                    if (index7 == null) {

                        var cuentafinalArreglo7 = 0;

                    } else {
                        var cuentafinalArreglo7 = parseFloat(valor.prueba[arrays[cuenta7]].Column10.substring(0, index7));

                    }

                    final7.push(cuentafinalArreglo7 / div);
                }
                data.addRow(final7);
            }



            if ((valor.prueba[0].Column11) != null) {
                j = j + 1;
                var final8 = new Array();
                var indexMes8 = (mes[j].indexOf("_"));

                var mes8 = (mes[j].substring(0, indexMes8));
                final8.push(mes8);


                for (var cuenta8 = 0 ; cuenta8 <= arrays.length - 1 ; cuenta8++) {
                    var index8 = (valor.prueba[arrays[cuenta8]].Column11.indexOf("_"));


                    if (index8 == null) {

                        var cuentafinalArreglo8 = 0;

                    } else {
                        var cuentafinalArreglo8 = parseFloat(valor.prueba[arrays[cuenta8]].Column11.substring(0, index8));

                    }

                    final8.push(cuentafinalArreglo8 / div);
                }
                data.addRow(final8);
            }


            if ((valor.prueba[0].Column12) != null) {
                j = j + 1;
                var final9 = new Array();
                var indexMes9 = (mes[j].indexOf("_"));

                var mes9 = (mes[j].substring(0, indexMes9));
                final9.push(mes9);


                for (var cuenta9 = 0 ; cuenta9 <= arrays.length - 1 ; cuenta9++) {
                    var index9 = (valor.prueba[arrays[cuenta9]].Column12.indexOf("_"));


                    if (index9 == null) {

                        var cuentafinalArreglo9 = 0;

                    } else {
                        var cuentafinalArreglo9 = parseFloat(valor.prueba[arrays[cuenta9]].Column12.substring(0, index9));

                    }

                    final9.push(cuentafinalArreglo9 / div);
                }
                data.addRow(final9);
            }

            if ((valor.prueba[0].Column13) != null) {
                j = j + 1;
                var final10 = new Array();
                var indexMes10 = (mes[j].indexOf("_"));

                var mes10 = (mes[j].substring(0, indexMes10));
                final10.push(mes10);


                for (var cuenta10 = 0 ; cuenta10 <= arrays.length - 1 ; cuenta10++) {
                    var index10 = (valor.prueba[arrays[cuenta10]].Column13.indexOf("_"));


                    if (index10 == null) {

                        var cuentafinalArreglo10 = 0;

                    } else {
                        var cuentafinalArreglo10 = parseFloat(valor.prueba[arrays[cuenta10]].Column13.substring(0, index10));

                    }

                    final10.push(cuentafinalArreglo10 / div);
                }
                data.addRow(final10);
            }

            if ((valor.prueba[0].Column14) != null) {
                j = j + 1;
                var final11 = new Array();
                var indexMes11 = (mes[j].indexOf("_"));

                var mes11 = (mes[j].substring(0, indexMes11));
                final11.push(mes11);


                for (var cuenta11 = 0 ; cuenta11 <= arrays.length - 1 ; cuenta11++) {
                    var index11 = (valor.prueba[arrays[cuenta11]].Column14.indexOf("_"));


                    if (index11 == null) {

                        var cuentafinalArreglo11 = 0;

                    } else {
                        var cuentafinalArreglo11 = parseFloat(valor.prueba[arrays[cuenta11]].Column14.substring(0, index11));

                    }

                    final11.push(cuentafinalArreglo11 / div);
                }
                data.addRow(final11);
            }



            if ((valor.prueba[0].Column15) != null) {
                j = j + 1;
                var final12 = new Array();
                var indexMes12 = (mes[j].indexOf("_"));

                var mes12 = (mes[j].substring(0, indexMes12));
                final12.push(mes12);


                for (var cuenta12 = 0 ; cuenta12 <= arrays.length - 1 ; cuenta12++) {
                    var index12 = (valor.prueba[arrays[cuenta12]].Column15.indexOf("_"));


                    if (index12 == null) {

                        var cuentafinalArreglo12 = 0;

                    } else {
                        var cuentafinalArreglo12 = parseFloat(valor.prueba[arrays[cuenta12]].Column15.substring(0, index12));

                    }

                    final12.push(cuentafinalArreglo12 / div);
                }
                data.addRow(final12);
            }

            if ((valor.prueba[0].Column16) != null) {
                j = j + 1;
                var final13 = new Array();
                var indexMes13 = (mes[j].indexOf("_"));

                var mes13 = (mes[j].substring(0, indexMes13));
                final13.push(mes13);


                for (var cuenta13 = 0 ; cuenta13 <= arrays.length - 1 ; cuenta13++) {
                    var index13 = (valor.prueba[arrays[cuenta13]].Column16.indexOf("_"));


                    if (index13 == null) {

                        var cuentafinalArreglo13 = 0;

                    } else {
                        var cuentafinalArreglo13 = parseFloat(valor.prueba[arrays[cuenta13]].Column16.substring(0, index13));

                    }

                    final13.push(cuentafinalArreglo13 / div);
                }
                data.addRow(final13);
            }

            if ((valor.prueba[0].Column17) != null) {
                j = j + 1;
                var final14 = new Array();
                var indexMes14 = (mes[j].indexOf("_"));

                var mes14 = (mes[j].substring(0, indexMes14));
                final14.push(mes14);


                for (var cuenta14 = 0 ; cuenta14 <= arrays.length - 1 ; cuenta14++) {
                    var index14 = (valor.prueba[arrays[cuenta14]].Column17.indexOf("_"));


                    if (index14 == null) {

                        var cuentafinalArreglo14 = 0;

                    } else {
                        var cuentafinalArreglo14 = parseFloat(valor.prueba[arrays[cuenta14]].Column17.substring(0, index14));

                    }

                    final14.push(cuentafinalArreglo14 / div);
                }
                data.addRow(final14);
            }

            var options = {
                title: 'Cuentas',
                width: 850,
                height: 600,
                hAxis: { title: 'Cuentas', titleTextStyle: { color: 'Black', } }
            };
            var chart = new google.visualization.LineChart(document.getElementById('chart_divLine'));
            google.visualization.events.addListener(chart, 'ready', function () {
                var exportData = chart.getImageURI();
                $('#exportLine').attr({ 'href': exportData, 'download': 'Imagen grafica' }).show();
            });

            chart.draw(data, options);


        }
    </script>
  
     <script>
         $(function () {
             $("#datepicker").datepicker({
                 changeMonth: true,
                 changeYear: true,
                 changeDay: true,
                 showButtonPanel: true,
                 dateFormat: 'yy-mm-dd',
                 onClose: function (dateText, inst) {
                     var day = $("#ui-datepicker-div .ui-datepicker-day :selected").val();
                     var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                     var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                     $('#startDate').datepicker({ defaultDate: -30 });
                     $('#endDate').datepicker({ defaultDate: new Date() });
                 }
             });
         });

         $(function () {
             $("#datepicker2").datepicker({
                 changeMonth: true,
                 changeYear: true,
                 changeDay: true,
                 showButtonPanel: true,
                 dateFormat: 'yy-mm-dd',
                 onClose: function (dateText, inst) {
                     var day = $("#ui-datepicker-div .ui-datepicker-day :selected").val();
                     var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                     var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                     $('#startDate').datepicker({ defaultDate: -30 });
                     $('#endDate').datepicker({ defaultDate: new Date() });
                 }
             });
         });


    </script>

    <style type="text/css">

        th {            
            text-align: center;        
        }

        table td.shrink {
            white-space:nowrap
        }
        table td.expand {
            width: 99%
        }





    </style>
  

</head>

<body>

     <div id="element" class="introLoading"></div>
     <form id="form" runat="server">
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
               <div>
                    <a class="navbar-brand" href="MenuPrincipal.aspx">
                        <img src="../img/logo-amezquita.png" alt="59px" width="157px" /></a>
                </div>
              
            </div>
              <br />
              <br />
           
             

            <!-- /.navbar-header -->
            <ul class="nav navbar-top-links navbar-right">
           
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i><asp:Label ID="LblUsuario" runat="server"></asp:Label></a>
                        </li>                        
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->
                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li>
                                <a href="#"><i class="fa fa-file fa-fw"></i>Archivo<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="TablaClientes.aspx">Cargar Informacion de Archivo</a>
                                    </li>
                                    <li>
                                        <a href="morris.html">Eliminar Informacion Archivo</a>
                                    </li>
                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i>Variaciones<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="flot.html">Generar Variaciones</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-sort-numeric-asc fa-fw"></i>Sumarias<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="flot.html">Sumaria General</a>
                                    </li>
                                    <li>
                                        <a href="flot.html">Sumaria de Area</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-edit fa-fw"></i>Ecuaciones<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="flot.html">Ecuaciones Predefinidas</a>
                                    </li>
                                    <li>
                                        <a href="flot.html">Crear Ecuaciones</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-wrench fa-fw"></i>General<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="panels-wells.html">Indices</a>
                                    </li>
                                    <li>
                                        <a href="buttons.html">Alertas</a>
                                    </li>
                                    <li>
                                        <a href="notifications.html">Graficas</a>
                                    </li>
                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-sitemap fa-fw"></i>Administracioaacuten<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="#">Clientes</a>
                                    </li>
                                    <li>
                                        <a href="#">Usuarios</a>
                                    </li>
                                    <li>
                                        <a href="#">Perfiles y Permisos</a>
                                    </li>
                                    <li>
                                        <a href="#">PUCs Oficiales</a>
                                    </li>
                                    <li>
                                        <a href="#">Similitud entre PUCs</a>
                                    </li>
                                    <li>
                                        <a href="#">Gestion de nombres - Codigos PUCs</a>
                                    </li>

                                </ul>
                                <!-- /.nav-second-level -->
                            </li>
                        </ul>
                    </div>
                    <!-- /.sidebar-collapse -->
                </div>
                <!-- /.navbar-static-side -->
            </nav>

          <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Informacion Validacion del Archivo</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           <asp:Label ID="Informacion" runat="server" ></asp:Label>
                            
                         </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover" style="font-size:x-small">
                                    <thead>
                                        <tr>
                                            <th>Centro Costo</th>
                                            <th>Fecha Inicial</th>
                                            <th>Fecha Final</th> 
                                            <th>Periodo</th> 
                                             <th>Valores</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>  
                                             <td>
                                            <div class="row" >                                                 
                                                  <div class="col-xs-12">
                                                   <select class="form-control input-sm" id="optionCentroCosto">
                                                                                                                                                               
                                                    </select>
                                                  </div>                                                                                          
                                             </div>                                              
                                            </td>                                         
                                            <td> <div id="Validardatepicker" class="col-xs-12"><div id="validacionErrordatepicker"><input type="text" placeholder="Fecha Archivo" id="datepicker" class="form-control"></div></div></td>
                                            <td> <div class="col-xs-12 "><div id="validacionErrordatepicker2"><input type="text" placeholder="Fecha Archivo" id="datepicker2" class="form-control"></div></div></td>
                                            <td>                                                                                       
                                                  <div class="col-xs-12">
                                                   <select class="form-control" id="Periodo"> 
                                                        <option value="M" selected="selected">Mensual</option>
                                                        <option value="T">Trimestral</option>
                                                        <option value ="S">Semestral</option> 
                                                        <option value="A">Anual</option>                                                                                                              
                                                    </select>                                                                            
                                             </div>       
                                         </td>
                                        <td>                                                                                       
                                                <div class="col-xs-12">
                                                <select class="form-control" id="cifras"> 
                                                    <option value="1" selected="selected">Pesos</option>
                                                    <option value="1000">Miles</option>
                                                    <option value ="1000000">Millones</option> 
                                                    <option value="1000000000">Miles Millones</option>                                                                                                              
                                                </select>                                                                            
                                            </div>       
                                        </td>
                                    </tr>  
                                        <tr>
                                           
                                                                             
                                          
                                           <th>Salida</th>
                                            <th>Decimales</th>
                                              <th>Rango Inicial</th>
                                            <th>Rango Final</th>
                                               <th></th>
                                         
                                            
                                        </tr>  
                                        <tr>
                                            
                                             <td>
                                            <div class="row">                                                 
                                                  <div class="col-xs-12">
                                                   <select class="form-control" id="Saldos"> 
                                                        <option value="S" selected="selected">Saldos</option>
                                                        <option value="V">Variaciones</option>
                                                        <option value="P">Porcentuales</option>                                                                                                                                                                     
                                                    </select>
                                                  </div>                                                                                          
                                             </div>                                              
                                            </td>
                                            <td>
                                            <div class="col-xs-12">
                                                   <select class="form-control" id="Decimales"> 
                                                        <option value="0" >0</option>
                                                        <option value="1">1</option>
                                                        <option value ="2" selected="selected">2</option> 
                                                                                                                                                                 
                                                    </select>
                                                  </div>   
                                            </td>
                                             <td>
                                             <div class="col-xs-12">
                                                <input type="text" class="form-control" id="RangoCuentaInicial" placeholder="Rango Inicial" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">                                           
                                            </div>
                                            </td>
                                             <td>
                                             <div class="col-xs-12"> 
                                                <input type="text" class="form-control" id="RangoCuentaFinal" placeholder="Rango Final" data-toggle="popover" data-trigger="hover" data-content="Rango final de las clases" data-placement="top" >                                           
                                            </div>
                                            </td>
                                            <td>
                                             <div class="col-xs-12">                                                  
                                               
                                                <button type="button" id="Buscar" class="btn btn-primary">Consultar</button>                                          
                                            </div>
                                            </td>
                                          
                                           
                                        </tr>
                                                                
                                    </tbody>
                                </table>
                            </div>
                           
                               

                          </div>

                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
            <!-- /#page-wrapper -->      


      
             <div class="row" id="generarGraficas">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">                          
                        <div class="row">
                        <div id="VariacionReporte" style="visibility:hidden" >
                            <div id="btnVariacion"  class="col-md-4">
                              <a>
                              <div id="graficas" ><i class="fa fa-bar-chart"></i> Generar Grafica</div> 
                              </a>
                          </div>

                        </div>
                         
                         

                           <div id="Semaforo" class="col-md-5">
                              <a href="#">
                              <div><i class="fa fa-spinner"></i> Generar Semaforo</div> 
                              </a>
                          </div>


                              
                         
                            <div id="reporteExcelArchivo" style="visibility:hidden" class="col-md-3">
                              <a >
                              <div><i class="fa fa-file-excel-o"></i> Generar Reporte Excel</div> 
                              </a>
                          
                          </div>
                           
                           
                             
                          </div>
                        </div>

                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="dataTable_wrapper">
                                <div class="table-responsive">
                                <table  class="table table-striped table-bordered  table-fixed table-hover centered" id="dataTables"  style="font-size:x-small ; text-align: right">
                                    <thead id="nombreCuentas">
                                      
                                        <tr>                                                                                
                                                                                
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyResult">
                                        
                                        
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            <!-- /.table-responsive -->
                            
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /#page-wrapper -->
        
         
         <div class="modal fade" id="poppupValidacion" tabindex="-1" role="dialog" aria-labelledby="poppupValidacion">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H1">Modal title</h4>
              </div>
              <div class="modal-body">
                <div id="Lblvalidacion"></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="BtnModificarDatos" class="btn btn-primary">Remplazar Datos</button>
              </div>
            </div>
          </div>
         </div>
        
        <div class="modal fade bs-example-modal-lg" tabindex="-1" id="conjuntos" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
                
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Gestión de Conjuntos </h4>
              </div>
              <div class="modal-body">
                  <form class="form-inline">
                      <div class="form-group">
                        <label for="exampleInputName2">Nombre Conjunto</label>
                        <input type="text" class="form-control" id="exampleInputName2" placeholder="Nombre Conjunto">
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail2">Cuenta Inicial</label>
                        <input type="text" class="form-control" id="CuentaInicial" placeholder="Ej:100000">
                      </div>
                       <div class="form-group">
                        <label for="exampleInputEmail2">Cuenta Final</label>
                        <input type="text" class="form-control" id="CuentaFinal" placeholder="Ej:200000">
                      </div>
                      <button type="button" id="generarConjunto" class="btn btn-default">Generar</button> 
                      <button type="button" id="Excel" class="btn btn-default">Reporte Excel</button>                      
                  
                    </form>
                    <div class="panel-body">
                                <div class="dataTable_wrapper">
                                     <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover centered table-responsive" id="Table2"  style="font-size:x-small">
                                        <thead id="TheadConjuntos">
                                      
                                            <tr>
                                                                                 
                                                                                
                                            </tr>
                                        </thead>
                                        <tbody id="TbodyConjuntos">
                                        
                                        </tbody>
                                    </table>
                                </div>    
                            </div>

               </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Guardar Conjunto</button>
              </div>
            </div><!-- /.modal-content -->
         
          </div>
        </div>
        </div>

          <div class="modal fade" id="myModalValidacion" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

       
         <div class="modal fade" id="poppupMensajeCargarArchivo" tabindex="-1" role="dialog" aria-labelledby="poppupMensajeCargarArchivo">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H2">Modal title</h4>
              </div>
              <div class="modal-body">
                 No se encontraron Archivos cargado. Desea Cargar La informacion 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" id="BtnCargarDatos" class="btn btn-primary">Cargar Datos nuevos</button>
              </div>
            </div>
          </div>
         </div>
        <!-- Modal -->
        <div class="modal fade" id="ModalPrueba" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H3">Modal title</h4>
              </div>
              <div class="modal-body">
                  <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Seleccione Cliente que desea cargar el archivo
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="dataTable_wrapper">
                                <table class="table table-striped table-bordered table-hover centered" id="Table1" align="center">
                                    <thead>
                                        <tr>
                                            <th>Cuenta</th>             
                                            <th>Valor Cuenta</th>                                       
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyCuenta">
                                        
                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                            
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

         <div class="modal fade bs-example-modal-lg" id="modalGrafica" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
              <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="H4">Modal title</h4>
                  </div>
                  <div class="modal-body">
                    <div id="GraficoGoogleChart-ejemplo-1" style="width: 600px; height: 600px"></div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

         <!-- Modal -->
        <div class="modal fade bs-example-modal-lg" id="modalSemaforo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H5">Modal title</h4>
              </div>
              <div class="modal-body">

               <table class="table table-condensed">
                      <tr>
                          <td><input type="text" id="colorVariacion" class="form-control kolorPicker" value="#FFFFFF"></td> 
                          <td><input type="text" class="form-control" id="numeroMayorVariacion" placeholder="Mayor"></td>
                          <td><input type="text" class="form-control" id="numeroMenorVariacion" placeholder="Menor"></td>
                          <td><button id="btnColorVariacion" type="button" class="btn btn-default">Genarar</button></td>
                           <td><input type="text" id="colorVariacionMenor" class="form-control kolorPicker" value="#FFFFFF"></td> 
                      </tr>


                  </table>


                    
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

         <div class="modal fade"  tabindex="-1" role="dialog" id="modalGraficas" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"
                    <img src='../img/logo-amezquita.png' id="H6">Escoja Una Grafica</h4>
              </div>
              <div class="modal-body">
                               <div class="panel panel-default">
                    <div class="panel-body">
                    <div>       
               
                    <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">
                                           <i class="fa fa-bar-chart fa-5x"></i>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="GraficaBarras">
                                <div class="panel-footer">
                                    <span class="pull-center"> Grafica Barra</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">                                          
                                            <i class="fa fa-line-chart fa-5x"></i>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="GraficaLine">
                                <div class="panel-footer">
                                    <span class="pull-center">Grafica Lineas</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>
                       <div class="col-lg-4 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="text-center">
                                            <i class="fa fa-pie-chart fa-5x"></i>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div>
                             <a id="GraficaPie">
                                <div class="panel-footer">
                                    <span class="pull-center">Grafica Pie</span>
                                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                          </div>
                        </div>
                    </div>
                    <br />
                    <br />                    
                                    

                    </div>
                    </div>
                  </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

  

         <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" id="modalbuton" aria-labelledby="myLargeModalLabel">
         <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Grafica</h4>
              </div>
              <div class="modal-body">               
                 <div id="chart_div"></div> 
                  <div> <a id="export" href="#"  download="FileName">Exportar Imagen</a></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

         <div class="modal fade" id="modalRsultFechas" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
               <table class="table table-striped table-bordered table-hover" style=" font-size: x-small ; text-align:center">
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Fecha</td>
                                 <td>Opciones</td>
                                
                            </tr>
                        </thead>
                        <tbody id="tbodyRsult">
                             

                        </tbody>
                   </table>
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


         <div class="modal fade bs-example-modal-lg" id="modalGraficaLine" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="H7">Modal title</h4>
              </div>
              <div class="modal-body">
                  <div id="chart_divLine"></div> 
                    <div> <a id="exportLine" href="#"  download="FileName">Exportar Imagen</a></div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

         <div class="modal fade bs-example-modal-lg" id="ModalGraficaPie" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Modal title</h4>
              </div>
              <div class="modal-body">
                 <form class="form-inline">
                  <div class="form-group">
                    <label for="exampleInputName2">Ingrese el codigo de la clase </label>
                    <input type="text" class="form-control" id="codigoClase" placeholder="Jane Doe">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail2">Seleccione el nivel PUC</label>
                   <select class="selectpicker">
                      <option>Grupo</option>
                      <option>Cuenta</option>
                    
                    </select>
                  </div>
                  <button type="button" class="btn btn-primary" id="graficarR">Graficar</button>
                </form>
              </div>
            <div>

                 <div id="piechart" style="width: 900px; height: 500px;"></div>

            </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div><!-- /.modal-content -->
          </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

    

       <!-- Metis Menu Plugin JavaScript -->
        <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

        <!-- Custom Theme JavaScript -->
        <script src="../dist/js/sb-admin-2.js"></script>


        <!-- jQuery -->


        <!-- Bootstrap Core JavaScript -->
        <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
           <script src="../bower_components/morrisjs/morris.min.js"></script>

    <script src="../js/morris-data.js"></script>

  

    </form>

</body>


</html>
