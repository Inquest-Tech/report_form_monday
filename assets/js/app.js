$(document).ready(function() {      
    cpfcnpjValidation();
    mask();
    navmenu();
    overlay();
});


//overlay
function overlay() {
    $('.overlay, .overlay--close').click(function(){
        $('.overlay').removeClass('active');
        $('.overlay-content').removeClass('active');
    });
}


//cpf cnpj validation
function cpfcnpjValidation() {
    $('.cpfcnpj-validation').on( 'keyup', function() {
        var val = $(this).val();
        var thisField = $(this);

        if (val.length == 14) {
            var cpf = val.trim();
         
            cpf = cpf.replace(/\./g, '');
            cpf = cpf.replace('-', '');
            cpf = cpf.split('');
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                    aux = true;   
                }
            } 
            
            if (aux == false) {
                thisField.addClass('error');
            } 
            
            for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                v1 += cpf[i] * p; 
            } 
            
            v1 = ((v1 * 10) % 11);
            
            if (v1 == 10) {
                v1 = 0; 
            }
            
            if (v1 != cpf[9]) {
                thisField.addClass('error');
            } 
            
            for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p; 
            } 
            
            v2 = ((v2 * 10) % 11);
            
            if (v2 == 10) {
                v2 = 0; 
            }
            
            if (v2 != cpf[10]) {
                thisField.addClass('error');
            } else {   
                thisField.removeClass('error');
                return true; 
            }




        } else if (val.length == 18) {
            var cnpj = val.trim();
            
            cnpj = cnpj.replace(/\./g, '');
            cnpj = cnpj.replace('-', '');
            cnpj = cnpj.replace('/', ''); 
            cnpj = cnpj.split(''); 
            
            var v1 = 0;
            var v2 = 0;
            var aux = false;
            
            for (var i = 1; cnpj.length > i; i++) { 
                if (cnpj[i - 1] != cnpj[i]) {  
                    aux = true;   
                } 
            } 
            
            if (aux == false) {  
                thisField.addClass('error');
            }
            
            for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {  
                    v1 += cnpj[i] * p1;  
                } else {  
                    v1 += cnpj[i] * p2;  
                } 
            } 
            
            v1 = (v1 % 11);
            
            if (v1 < 2) { 
                v1 = 0; 
            } else { 
                v1 = (11 - v1); 
            } 
            
            if (v1 != cnpj[12]) {  
                thisField.addClass('error');
            } 
            
            for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
                if (p1 >= 2) {  
                    v2 += cnpj[i] * p1;  
                } else {   
                    v2 += cnpj[i] * p2; 
                } 
            }
            
            v2 = (v2 % 11); 
            
            if (v2 < 2) {  
                v2 = 0;
            } else { 
                v2 = (11 - v2); 
            } 
            
            if (v2 != cnpj[13]) {   
                thisField.addClass('error');
            } else {  
                thisField.removeClass('error');
                return true; 
            }
        } else {
            thisField.addClass('error');
        }
    });
}
 

//mask
function mask() {
    var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
    $('.mask-phone').mask(SPMaskBehavior, spOptions);
    

    var cpfcnpj = function (val) {
        var fieldVal = val.replace(/\D/g, '');
        if ( fieldVal.length === 14 ) {
            cpfcnpjValidation();   
            return '00.000.000/0000-00'; 
        }
        else {
            cpfcnpjValidation();
            return '000.000.000-009999';            
        }
    },
    cpfcnpjOptions = {
        onKeyPress: function(val, e, field, options) {
          field.mask(cpfcnpj.apply({}, arguments), options);
        }
    };
    $('.mask-cpfcnpj').mask(cpfcnpj, cpfcnpjOptions);
}


//navmenu
function navmenu() {
    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.navmenu').toggleClass('active');
    });
}


//add cpf/cnpj field
$('#cpfcnpj-add').click(function() {        
    $('.cpfcnpj-group').append('<div class="field"><img src="images/cpf-cnpj.svg" alt=""><input type="tel" class="mask-cpfcnpj cpfcnpj-validation" placeholder="CPF / CNPJ"><span title="Remover este campo" class="remove-cpfcnpj">&times;</span></div>');
    mask();
    cpfcnpjValidation();
}); 

$('.cpfcnpj-group').on('click', '.remove-cpfcnpj', function() {
    $(this).parent().remove();
});


//sanitize, validate and send data to monday.com
$('#submit').click(function(e) {  
    e.preventDefault(); 

    $('#form-error').html('');


    //check for empty input required field
    $('#form input.required').each(function(e) {
        if ( $(this).val().length == 0 ) {
            $(this).addClass('error'); 
        }
        else {
            $(this).removeClass('error');
        }
    });


    //check for empty select required field
    $('#form select.required').each(function(e) {
        if ( $(this).val() == 0 ) {
            $(this).addClass('error'); 
        }
        else {
            $(this).removeClass('error');
        }
    });


    //check for empty checkbox required field
    $('#form input[type=checkbox]').each(function(e) {
        if ( $(this).is(':checked') ) {            
            $(this).removeClass('error-acceptance');
        }
        else {
            $(this).addClass('error-acceptance');             
        }
    });


    //check for empty radio required field
    var hasFinalidade = false;
    $('#form input[name=finalidade]').each(function(e) {
        if ( $(this).is(':checked') ) {           
            hasFinalidade = true;       
        }
    });
    if ( hasFinalidade == true ) {
         $('#finalidade').removeClass('error');    
    }
    else {
        $('#finalidade').addClass('error');    
    }


    //check for cpf and cnpj fields
    var hasCPFCNPJ = false;
    $('.cpfcnpj-group input').each(function(e) {
        if ( $(this).val().length != 0 ) {       
            hasCPFCNPJ = true;       
        }
    });
    if ( hasCPFCNPJ == true ) {
         $('#cpfcnpj-group-error').removeClass('error');    
    }
    else {
        $('#cpfcnpj-group-error').addClass('error');    
    }


    //check for fields with .error
    $('#form input, #form select, #finalidade, #cpf-cnpjgroup-error').each(function(e) {
        if ( $(this).hasClass('error') ) {     
            $('.overlay, .overlay-content.warning').addClass('active').find('p').html('Foram encontrados erros! Cheque todos os campos e envie novamente.');      
            e.stopPropagation();
        }  
        else if( $(this).hasClass('error-acceptance') ) {
            $('.overlay, .overlay-content.warning').addClass('active').find('p').html('Você precisa aceitar os termos de uso para continuar.');
            e.stopPropagation();
        }
        else {
            $('.overlay, .overlay-content.warning').addClass('active').find('p').html('');
        }      
    });



    //send to monday
    $('.overlay, .overlay-content.success').addClass('active').find('p').html('Enviando sua mensagem...');
   
    var allValues = []; //implode and count cpf and cnpj
    $('.cpfcnpj-group div').each(function() {
        allValues.push( $(this).find('input').val() );
    });
    var cpfCnpjQty = allValues.length;  
    var cpfCnpj = allValues.join();   

    var nomeCaso = $('#nome-do-caso').val();
    var finalidade = $('input[name="finalidade"]:checked').data('finalidade');
    var servico = $('#servico').val().toUpperCase();
    var nomeSolicitante = $('#nome-solicitante').val();
    var emailSolicitante = $('#email-solicitante').val();

    $.ajax({
        type: 'POST',
        url: baseUrl + '/functions.php',
        data: {
            cpfcnpjqty: cpfCnpjQty,
            cpfcnpj: cpfCnpj,
            nomecaso: nomeCaso,
            finalidade: finalidade,            
            servico: servico,
            nomesolicitante: nomeSolicitante,
            emailsolicitante: emailSolicitante,
        }
    }).done(function(resposta) {

    }).fail(function(jqXHR, textStatus ) {
        console.log('Request failed: ' + textStatus);

    }).always(function() {
        window.location.href = baseUrl + '/mensagem-enviada.html';

    });
}); 