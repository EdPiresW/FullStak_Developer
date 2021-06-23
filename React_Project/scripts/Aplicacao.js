$(document).ready(function () {

    //--Este codigo vai ler as variaveis no URL e armazenar no getUrlParameter---//

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

   
    $('#button1').click (function(){
        $('#lista').append(
           
            '<tr id="3">' +
            '<td>foto</td>' +
            '<td class="numero_cliente">3</td>' +
            '<td>Ricardo</td>' +
            '<td>3456789</td>' +
            '<td><button type="button" id="info_button" class="info_button" value="3">Info</button></td>' +
            '</tr>'
        
        );
    });


//------------------------- Div da nova Palavra-Chave ------------------------//
    //Esconder msg de erro
    $("#erropass").hide();

    //Verificar se Palavra-Chave esta correcta ou não
    
    $("#tablaNovaPass").submit(function () {
        var nPass = $("#novaPass").val();
        var rPass = $("#repitaPass").val();
    
        if ((nPass == rPass) && (nPass != 0) && (rPass != 0)) {
            
            $("#erropass").hide();
            console.log("Nova Pass:", nPass);
            console.log("Repita Pass:", rPass);
           
        } else {

            $("#erropass").show();

        }

        return false;
    });
});
