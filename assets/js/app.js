$(document).ready(function() {   
    //load navmenu
    navmenu();  


    //show specific fields for each option
    $('input[name=finalidade]').on('change', function() {  
        restartFields();      
        contextSelected = $('input[name=finalidade]:checked').data('finalidade');

        if( contextSelected == 'Cobrança e Recuperação de Crédito' ) { //Contexto de Cobrança e Recuperação de Crédito
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldDataCredito()
            fieldDataVencimentoInadimplemento() 
            fieldDataProtesto()
            fieldDataDistribuicao()
            fieldNumeroProcesso()
            fieldValorHistoricoCausaCredito()
            fieldDataCitacao()
            fieldAdvogadosReusExecutados()
            fieldGarantiasPrestadas()
            fieldObservacoes()
        }



        else if( contextSelected == 'Recuperação Judicial – RJ' ) { //Contexto de Recuperação Judicial (RJ)
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldDevedoresSolidarios()
            fieldProcessoRjFalencia()
            fieldDataCredito()
            fieldDataVencimentoInadimplemento()
            fieldDataProtesto()
            fieldDataDistribuicao()
            fieldDataCitacao()
            fieldValorNominalCreditoCausa()             
            fieldGarantiasPrestadas()
            fieldObservacoes()
        }



        else if( contextSelected == 'Pesquisa Preventiva Pré M&A' ) { //Contexto de investigação preventiva (due diligence) para fusões e aquisições (Mergers and Acquisitions – M&A)
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldContextoNegocial()
            fieldObjetoNegocio()
            fieldDataEstimada()
            fieldValorNegocio()
            fieldGarantiasPrestadas()
            fieldObservacoes()
        }



        else if( contextSelected == 'Pesquisa Preventiva Pré Contratação' ) { //Contexto de investigação preventiva (due diligence) antes da contratação de uma pessoa (background check)
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldContextoNegocial()
            fieldObjetoNegocio()
            fieldDataEstimada()
            fieldValorNegocio()
            fieldGarantiasPrestadas()
            fieldObservacoes()
        }



        else if( contextSelected == 'Pesquisa Preventiva em Geral' ) { //Contexto de investigação preventiva (due diligence) de caráter geral
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldContextoNegocial()
            fieldObjetoNegocio()
            fieldDataEstimada()
            fieldValorNegocio()
            fieldGarantiasPrestadas()
            fieldObservacoes()
        }



        else if( contextSelected == 'Compliance' ) { //Contexto de compliance
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldDenuncia()
            fieldHistoricoAmpliado()
            fieldDataEntrada()
            fieldDataInicioNaoConformidade()
            fieldDataEncerramentoNaoConformidade()
            fieldDataSaida()
            fieldObjetivosEscopo()
            fieldObservacoes()
        }



        else if( contextSelected == 'Divórcio' ) { //Contexto de Divórcio
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldHistoriaCasal() 
            fieldDuracaoRelacionamento()
            fieldRegimeBens() 
            fieldBensConhecidos()
            fieldJudicializacao()
            fieldRedeRelacionamento()
            fieldObjetivosEscopo()
            fieldObservacoes()
        }



        else if( contextSelected == 'Inventário' ) { //Contexto de inventário
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldFalecido()
            fieldDataFalecimento()
            fieldJudicializacao()
            fieldBensConhecidos()
            fieldSucessoresCredoresDevedores()
            fieldRegimeBensDeCujus()
            fieldTestamento()
            fieldSuspeitasOcultamento()
            fieldSituacaoFamiliar()
            fieldObjetivosEscopo()
            fieldObservacoes()           
        }



        else if( contextSelected == 'DOCS' ) { //Contexto de DOC
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldPesquisaAvulsa()
            fieldObjetivosEscopo()
            fieldObservacoes()
        }



        else if( contextSelected == 'Contexto Coringa' ) { //Contexto Coringa
            fieldNomeDoCaso()
            fieldNomeDoSolicitante()
            fieldEmailDoSolicitante()
            fieldServicoAdquirido()
            fieldTargetsPrimarios()
            fieldTargetsSecundarios()
            fieldMotivosTargetsSecundarios()
            fieldLocalidadeFoco()
            fieldObjetivosEscopo()
            fieldObservacoes()
        }


        //load helpers functions
        showCards();   
        cpfcnpjFields();     
        mask();
        cpfcnpjValidation();        
        scrollToContent();
    });  
    
    
    //submit form
    $('#submit').click(function(e) {  
        e.preventDefault();
        validateAndSubmit();
    });
});


//sanitize, validate and send data to monday.com
function validateAndSubmit() { 
    overlay();

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


    //check for cpf and cnpj fields
    var hasCPFCNPJ = false;
    $('#targets-primarios input').each(function(e) {
        if ( $(this).val().length != 0 ) {       
            hasCPFCNPJ = true;       
        }
    });
    if ( hasCPFCNPJ == true ) {
         $('#targets-primarios-error').removeClass('error');    
    }
    else {
        $('#targets-primarios-error').addClass('error');    
    }
    

    //check for fields with .error
    $('#form input, #form select, #cpf-cnpjgroup-error').each(function(e) {
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
    $('.overlay, .overlay-content.success').addClass('active').find('p').html('Enviando sua mensagem...<br>Não feche esta janela, aguarde');
    

    //implode and count cpf and cnpj - targets primários
    var allValuesPrimary = []; 
    $('#targets-primarios div').each(function() {
        allValuesPrimary.push( $(this).find('input').val() );
    });
    var cpfCnpjQtyPrimary = allValuesPrimary.length;  
    var cpfCnpjPrimary = allValuesPrimary.join();   


    //implode and count cpf and cnpj - targets secundários
    var allValuesSecondary = []; 
    $('#targets-secundarios div').each(function() {
        allValuesSecondary.push( $(this).find('input').val() );
    });
    var cpfCnpjQtySecondary = allValuesSecondary.length;  
    var cpfCnpjSecondary = allValuesSecondary.join();   


    //general fields
    var nomeCaso = $('#nome-do-caso').val();
    var nomeSolicitante = $('#nome-solicitante').val();
    var emailSolicitante = $('#email-solicitante').val();
    var finalidade = $('input[name="finalidade"]:checked').data('finalidade');
    var servico = $('#servico').val().toUpperCase();

    
    //specific fields 
    var motivosTargetsSecundarios = $('#motivos-targets-secundarios').val();
    var localidadeFoco = $('#localidade-foco').val();
    var dataCredito = $('#data-credito').val();
    var dataVencimentoContratoInadimplemento = $('#data-vencimento-contrato-inadimplemento').val();
    var dataProtesto = $('#data-protesto').val();
    var dataDistribuicao = $('#data-distribuicao').val();
    var numeroProcesso = $('#numero-processo').val();
    var valorHistoricoCausaCredito = $('#valor-historico-causa-credito').val();
    var dataCitacao = $('#data-citacao').val();
    var advogadosReusExecutados = $('#advogados-reus-executados').val();
    var garantiasPrestadas = $('#garantias-prestadas').val();
    var observacoes = $('#observacoes').val();
    var devedoresSolidarios = $('#devedores-solidarios').val();
    var processoRjFalencia = $('#processo-rj-falencia').val();
    var valorNominalCreditoCausa = $('#valor-nominal-credito-causa').val();
    var contextoNegocial = $('#contexto-negocial').val();
    var dataEstimada = $('#data-estimada').val();
    var valorNegocio = $('#valor-negocio').val();
    var objetoNegocio = $('#objeto-negocio').val();
    var denuncia = $('#denuncia').val();
    var historicoAmpliado = $('#historico-ampliado').val();
    var dataEntrada = $('#data-entrada').val();
    var dataInicioNaoConformidade = $('#data-inicio-nao-conformidade').val();
    var dataEncerramentoNaoConformidade = $('#data-encerramento-nao-conformidade').val();
    var dataSaida = $('#data-saida').val();
    var objetivosEscopo = $('#objetivos-escopo').val();
    var historiaCasal = $('#historia-casal').val();
    var duracaoRelacionamento = $('#duracao-relacionamento').val();
    var regimeBens = $('#regime-bens').val();
    var bensConhecidos = $('#bens-conhecidos').val();
    var judicializacao = $('#judicializacao').val();
    var redeRelacionamentos = $('#rede-relacionamentos').val();
    var falecido = $('#falecido').val();
    var dataFalecimento = $('#data-falecimento').val();
    var sucessoresCredoresDevedores = $('#sucessores-credores-devedores').val();
    var regimeBensDeCujus = $('#regime-bens-de-cujus').val();
    var testamento = $('#testamento').val();
    var suspeitasOcultamento = $('#suspeitas-ocultamento').val();
    var situacaoFamiliar = $('#situacao-familiar').val();
    var pesquisaAvulsa = $('#pesquisa-avulsa').val();


    $.ajax({
        type: 'POST',
        url: baseUrl + '/functions.php',
        data: {
            cpfCnpjQtyPrimary: cpfCnpjQtyPrimary,
            cpfCnpjPrimary: cpfCnpjPrimary,

            cpfCnpjQtySecondary: cpfCnpjQtySecondary,
            cpfCnpjSecondary: cpfCnpjSecondary,

            nomecaso: nomeCaso,
            nomesolicitante: nomeSolicitante,
            emailsolicitante: emailSolicitante,
            finalidade: finalidade,            
            servico: servico,          

            motivosTargetsSecundarios: motivosTargetsSecundarios ,
            localidadeFoco: localidadeFoco,
            dataCredito: dataCredito,
            dataVencimentoContratoInadimplemento : dataVencimentoContratoInadimplemento,
            dataProtesto : dataProtesto,
            dataDistribuicao : dataDistribuicao,
            numeroProcesso: numeroProcesso,
            valorHistoricoCausaCredito: valorHistoricoCausaCredito,
            dataCitacao: dataCitacao,
            advogadosReusExecutados: advogadosReusExecutados,
            garantiasPrestadas: garantiasPrestadas,
            observacoes: observacoes,
            devedoresSolidarios: devedoresSolidarios,
            processoRjFalencia: processoRjFalencia,
            valorNominalCreditoCausa : valorNominalCreditoCausa,
            contextoNegocial : contextoNegocial,
            dataEstimada : dataEstimada,
            valorNegocio : valorNegocio,
            objetoNegocio: objetoNegocio ,
            denuncia : denuncia,
            historicoAmpliado: historicoAmpliado ,
            dataEntrada: dataEntrada,
            dataInicioNaoConformidade: dataInicioNaoConformidade ,
            dataEncerramentoNaoConformidade: dataEncerramentoNaoConformidade,
            dataSaida: dataSaida ,
            objetivosEscopo: objetivosEscopo,
            historiaCasal: historiaCasal ,
            duracaoRelacionamento: duracaoRelacionamento ,
            regimeBens: regimeBens,
            bensConhecidos: bensConhecidos,
            judicializacao: judicializacao,
            redeRelacionamentos: redeRelacionamentos,
            falecido : falecido,
            dataFalecimento: dataFalecimento,
            sucessoresCredoresDevedores: sucessoresCredoresDevedores,
            regimeBensDeCujus: regimeBensDeCujus ,
            testamento: testamento,
            suspeitasOcultamento : suspeitasOcultamento,
            situacaoFamiliar : situacaoFamiliar,
            pesquisaAvulsa: pesquisaAvulsa
        }
    }).done(function(resposta) {

    }).fail(function(jqXHR, textStatus ) {
        console.log('Request failed: ' + textStatus);

    }).always(function(response) {
        //console.log(response);
        window.location.href = baseUrl + '/mensagem-enviada.html';

    });
}


//fields
function scrollToContent() {    
    $('.overlay, .overlay-preloader').addClass('active');        
    setTimeout(function(){ 
        document.querySelector('#case-info-container').scrollIntoView({ behavior: 'smooth' });
        $('.overlay, .overlay-preloader').removeClass('active');  
    }, 1000);  
}

function showCards() {
    $('#case-info-container').show();
    $('#acceptance-container').show();
}

function restartFields() {
    $('#case-fields').html('');
}

function cpfcnpjFields() {
    $('.cpfcnpj-add').click(function() {        
        $(this).prev('.cpfcnpj-group').append('<div class="field" style="margin-top:15px"><img src="images/cpf-cnpj.svg" alt=""><input type="tel" class="mask-cpfcnpj cpfcnpj-validation error" placeholder="CPF / CNPJ"><span title="Remover este campo" class="remove-cpfcnpj">&times;</span></div>');
        mask();
        cpfcnpjValidation();     
    }); 

    $('.cpfcnpj-group').on('click', '.remove-cpfcnpj', function() {
        $(this).parent().remove();
    });
}



function fieldNomeDoCaso() {
    $('#case-fields').append('<div class="field"><label><strong>Nome do caso*</strong></label><p>Inserir o nome do caso para o seu controle interno (normalmente é o nome do pesquisado principal – ex.: Caso Moriart)</p><div class="field__content"><img src="images/nome-do-caso.svg" alt=""><input id="nome-do-caso" type="text" class="required" placeholder="Nome do caso*"></div></div>');
}

function fieldNomeDoSolicitante() {
    $('#case-fields').append('<div class="field"><label><strong>Nome do solicitante*</strong></label> <p>Coloque o seu nome e/ou da empresa que você representa (ex.: Jordan Belfort, da Stratton Oakmont)</p><div class="field__content"><img src="images/nome.svg" alt=""><input id="nome-solicitante" type="text" class="required" placeholder="Seu nome*"></div></div>');
}

function fieldEmailDoSolicitante() {
    $('#case-fields').append('<div class="field"><label><strong>E-mail do solicitante*</strong></label><p>Coloque o seu e-mail</p><div class="field__content"><img src="images/email.svg" alt=""><input id="email-solicitante" type="email" class="required" placeholder="Seu e-mail*"></div></div>');
}

function fieldServicoAdquirido() {
    $('#case-fields').append('<div class="field"> <label><strong>Serviço adquirido*</strong></label> <div class="field__content"> <img src="images/servico.svg" alt=""> <select id="servico" class="required"> <option value="0" hidden>Serviço adquirido*</option> <option value="REPORT SP">Report Simples - Preço sob consulta</option> <option value="REPORT SMART">Report Smart - Preço sob consulta</option> <option value="REPORT SMART PRO">Report Smart Pro - Preço sob consulta</option> <option value="DOCS">DOCS - Serviço avulso</option> <option value="PRECOGS">PRECOGS - Preço sob consulta</option> <option value="DEEP">DEEP - Preço sob consulta</option> <option value="SMART CRED">SMART CRED - Preço sob consulta</option></select> </div></div>');
}

function fieldTargetsPrimarios() {
    $('#case-fields').append('<div class="field"> <label><strong>Pesquisado(s) Primário(s)* – CPFs ou CNPJs*</strong></label> <p>Inserir os CPFs ou CNPJs dos devedores diretos ou réus, nesse último caso se já ocorreu judicialização</p><div class="field__content"> <div class="cpfcnpj-group" id="targets-primarios"></div><button type="button" class="field--buttons cpfcnpj-add">Adicionar CPF / CNPJ</button> <div class="cpfcnpj-group-error" id="targets-primarios-error">Campo obrigatório</div></div></div>');
}

function fieldTargetsSecundarios() {
    $('#case-fields').append('<div class="field"> <label><strong>Pesquisado(s) Secundários(s) – CPFs ou CNPJs</strong></label> <p>Inserir pessoas adicionais vinculadas ao contexto e perante as quais haja justa causa para a pesquisa. Ex.: pessoa sobre a qual haja fundada suspeita de estar colaborando para a blindagem patrimonial ilegítima; pessoa que será implicada em potencial futura medida, como produção antecipada de prova, incidente de desconsideração da personalidade jurídica, entre outras.</p><div class="field__content"> <div class="cpfcnpj-group" id="targets-secundarios"></div><button type="button" class="field--buttons cpfcnpj-add">Adicionar CPF / CNPJ</button> <div class="cpfcnpj-group-error" id="targets-secundarios-error">Campo obrigatório</div></div></div>');
}

function fieldMotivosTargetsSecundarios() {
    $('#case-fields').append('<div class="field"> <label><strong>Motivo de inserção dos pesquisados secundários ou relação deles com o caso</strong></label> <p>Caso tenha sido indicados pesquisados a mais além dos primários, deve-se explicar a relação deles com o caso ou com os pesquisados primários</p><div class="field__content"> <img src="images/finalidade.svg" alt=""> <textarea id="motivos-targets-secundarios" placeholder="Motivo de inserção dos pesquisados secundários ou relação deles com o caso"></textarea> </div></div>');
}

function fieldLocalidadeFoco() {
    $('#case-fields').append('<div class="field"><label><strong>Localidade foco</strong></label><p>Localidade a ser mais focada nas investigações (normalmente é a cidade onde se sabe que o pesquisado está operando ou tem seus principais negócios ou seus principais bens)</p><div class="field__content"><img src="images/local.svg" alt=""><input id="localidade-foco" type="text" placeholder="Localidade foco"></div></div>');
}

function fieldDataCredito() {
    $('#case-fields').append('<div class="field"> <label><strong>Data do crédito</strong></label> <p>Data da celebração do contrato ou título de crédito que está sendo cobrado, com a comprovação documental</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-credito" class="mask-date" type="tel" placeholder="Data do crédito"> </div></div>');
}

function fieldDataVencimentoInadimplemento() {
    $('#case-fields').append('<div class="field"> <label><strong>Data do vencimento/inadimplemento</strong></label> <p>Data do vencimento do contrato ou do inadimplemento da dívida</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-vencimento-contrato-inadimplemento" class="mask-date" type="tel" placeholder="Data do vencimento/inadimplemento"> </div></div>');
}

function fieldDataProtesto() {
    $('#case-fields').append('<div class="field"> <label><strong>Data do protesto</strong></label> <p>Data do protesto da dívida e/ou da anotação no cadastro de proteção ao crédito e/ou envio de notificação extrajudicial de cobrança (se for o caso)</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-protesto" class="mask-date" type="tel" placeholder="Data do protesto"> </div></div>');
}

function fieldDataDistribuicao() {
    $('#case-fields').append('<div class="field"> <label><strong>Data da distribuição</strong></label> <p>Data da distribuição do processo de cobrança (se o caso já tiver sido judicializado)</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-distribuicao" class="mask-date" type="tel" placeholder="Data da distribuição"> </div></div>');
}

function fieldNumeroProcesso() {
    $('#case-fields').append('<div class="field"> <label><strong>Número do processo</strong></label> <p>Número do processo no qual a dívida está sendo cobrada ou reconhecida. O número deverá ser fornecido no padrão nacional (NUP). Se possível, disponibilizar as cópias integrais também (anexar ao final).</p><div class="field__content"> <img src="images/finalidade.svg" alt=""> <input id="numero-processo" type="text" placeholder="Número do processo"> </div></div>');
}

function fieldValorHistoricoCausaCredito() {
    $('#case-fields').append('<div class="field"> <label><strong>Valor histórico da causa ou do crédito</strong></label> <p>Inserir aqui o valor histórico da causa ou, caso não tenha havido distribuição, o valor nominal do crédito</p><div class="field__content"> <img src="images/valor.svg" alt=""> <input id="valor-historico-causa-credito" type="text" placeholder="Valor histórico da causa ou do crédito"> </div></div>');
}

function fieldDataCitacao() {
    $('#case-fields').append('<div class="field"> <label><strong>Data da citação</strong></label> <p>Data da citação dos devedores/pesquisados no processo (se eles já tiverem sido citados). Se houver mais de um, inserir a citação do último</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-citacao" type="text" class="mask-date" placeholder="Data da citação dos réus/executados"> </div></div>');
}

function fieldAdvogadosReusExecutados() {
    $('#case-fields').append('<div class="field"> <label><strong>Nomes, OABs, fls da procuração e contatos dos advogados do(s) réu(s)/executado(s)</strong></label> <p>Preencher apenas no caso de DEEP, REC ou contratação de serviço personalizado que envolva negociação ou tratativas diretas com a outra parte</p><div class="field__content"> <img src="images/cpf-cnpj.svg" alt=""> <textarea id="advogados-reus-executados" placeholder="Nomes, OABs, fls da procuração e contatos dos advogados do(s) réu(s)/executado(s)"></textarea> </div></div>');
}

function fieldGarantiasPrestadas() {
    $('#case-fields').append('<div class="field"> <label><strong>Garantias prestadas</strong></label> <p>Houve alguma garantia prestada no contrato? Indicar quais foram</p><div class="field__content"> <img src="images/servico.svg" alt=""> <input id="garantias-prestadas" type="text" placeholder="Garantias prestadas"> </div></div>');
}

function fieldObservacoes() {
    $('#case-fields').append('<div class="field"> <label><strong>Observações</strong></label> <p>Quaisquer outras observações ou dicas que o solicitante queira oferecer e que podem interessar na investigação, como outros dados do contexto, história do caso, possíveis offshores, suspeitas de pessoas interpostas ("laranjas"), possíveis bens e direitos do pesquisado, pessoas "relevantes" para a investigação, parentes do pesquisado, atividade profissional atual do pesquisado, entre outras informações.</p><div class="field__content"> <img src="images/jigsaw.svg" alt=""> <textarea id="observacoes" placeholder="Observações"></textarea> </div></div>');
}

function fieldDevedoresSolidarios() {
    $('#case-fields').append('<div class="field"> <label><strong>Devedores solidários</strong></label> <p>Há devedores solidários, avalistas, coobrigados etc.? Se sim, indicar nome, CPF e o documento que comprova a solidariedade/garantia pessoal</p><div class="field__content"> <img src="images/cpf-cnpj.svg" alt=""> <textarea id="devedores-solidarios" placeholder="Devedores solidários"></textarea> </div></div>');
}

function fieldProcessoRjFalencia() {
    $('#case-fields').append('<div class="field"> <label><strong>Processo de RJ ou Falência</strong></label> <p>Indicar o número do processo de recuperação ou falência e em que fase o processo está.</p><div class="field__content"> <img src="images/finalidade.svg" alt=""> <input id="processo-rj-falencia" type="text" placeholder="Processo de RJ ou Falência"> </div></div>');
}

function fieldValorNominalCreditoCausa() {
    $('#case-fields').append('<div class="field"> <label><strong>Valor nominal do crédito ou da causa</strong></label> <div class="field__content"> <img src="images/valor.svg" alt=""> <input id="valor-nominal-credito-causa" type="text" placeholder="Valor nominal do crédito ou da causa"> </div></div>');
}

function fieldContextoNegocial() {
    $('#case-fields').append('<div class="field"> <label><strong>Contexto negocial</strong></label> <p>Qual é o motivo da investigação preventiva? Explicar o contexto da negociação que está acontecendo e as eventuais dúvidas e/ou pontos de atenção que se procura esclarecer com a investigação</p><div class="field__content"> <img src="images/servico.svg" alt=""> <input id="contexto-negocial" type="text" placeholder="Contexto negocial"> </div></div>');
}

function fieldDataEstimada() {
    $('#case-fields').append('<div class="field"> <label><strong>Data estimada para o negócio</strong></label> <p>Data em que as partes pretendem celebrar o novo contrato</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-estimada" class="mask-date" type="tel" placeholder="Data estimada para o negócio"> </div></div>');
}

function fieldValorNegocio() {
    $('#case-fields').append('<div class="field"> <label><strong>Valor do negócio</strong></label> <p>Valor do contrato que as partes pretendem celebrar (se for contrato mensal, inserir a soma das parcelas; se for superior a um ano, inserir o valor de doze parcelas)</p><div class="field__content"> <img src="images/valor.svg" alt=""> <input id="valor-negocio" type="text" placeholder="Valor do negócio"> </div></div>');
}

function fieldObjetoNegocio() {
    $('#case-fields').append('<div class="field"> <label><strong>Objeto do negócio</strong></label> <p>Objeto específico do contrato que as partes pretendem celebrar (ex.: compra da empresa XXX; investimento na start-up XPTO; compra de imóvel de Matrícula n. xxx do 2º CRI de São Paulo/SP; contratação da pessoa Fulano de Tal como diretor de vendas etc.)</p><div class="field__content"> <img src="images/cpf-cnpj.svg" alt=""> <textarea id="objeto-negocio" placeholder="Objeto do negócio"></textarea> </div></div>');
}

function fieldDenuncia() {
    $('#case-fields').append('<div class="field"> <label><strong>Denúncia</strong></label> <p>Qual é o motivo da investigação? Explicar de forma objetiva a denúncia e a suspeita que existe no caso</p><div class="field__content"> <img src="images/servico.svg" alt=""> <input id="denuncia" type="text" placeholder="Denúncia"> </div></div>');
}

function fieldHistoricoAmpliado() {
    $('#case-fields').append('<div class="field"> <label><strong>Histórico ampliado</strong></label> <p>Construir a narrativa resumida do caso (incluindo os fatos denunciados ou suspeitos e o histórico dos principais pesquisados, incluindo a data em que entraram na empresa, eventuais incidentes envolvendo-os, personalidades etc.)</p><div class="field__content"> <img src="images/jigsaw.svg" alt=""> <textarea id="historico-ampliado" placeholder="Histórico ampliado"></textarea> </div></div>');
}

function fieldDataEntrada() {
    $('#case-fields').append('<div class="field"> <label><strong>Data de entrada na empresa ou de início do relacionamento</strong></label> <div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-entrada" class="mask-date" type="tel" placeholder="Data de entrada"> </div></div>');
}

function fieldDataInicioNaoConformidade() {
    $('#case-fields').append('<div class="field"> <label><strong>Início do período de não-conformidade</strong></label> <p>Inserir aqui a data em que se estima que os fatos suspeitos de não-conformidade foram iniciados</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-inicio-nao-conformidade" class="mask-date" type="tel" placeholder="Data de início"> </div></div>');
}

function fieldDataEncerramentoNaoConformidade() {
    $('#case-fields').append('<div class="field"> <label><strong>Fim do período de não-conformidade</strong></label> <p>Inserir aqui a data em que se estima que os fatos suspeitos de não-conformidade foram encerrados</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-encerramento-nao-conformidade" class="mask-date" type="tel" placeholder="Data de encerramento"> </div></div>');
}

function fieldDataSaida() {
    $('#case-fields').append('<div class="field"> <label><strong>Data de saída</strong></label> <div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-saida" class="mask-date" type="tel" placeholder="Data de saída"> </div></div>');
}

function fieldObjetivosEscopo() {
    $('#case-fields').append('<div class="field"> <label><strong>Objetivos e escopo</strong></label> <p>Objetivo da investigação (explicar neste campo a finalidade para a qual se pretende utilizar as informações, quais são os objetivos da investigação e o que se espera que a investigação revele)</p><div class="field__content"> <img src="images/jigsaw.svg" alt=""> <textarea id="objetivos-escopo" placeholder="Objetivos e escopo"></textarea> </div></div>');
}

function fieldHistoriaCasal() {
    $('#case-fields').append('<div class="field"> <label><strong>História do casal</strong></label> <p>Narrar de forma objetiva a história do casal com os principais fatos (incluindo quando se conheceram, período de namoro, período de noivado, período de casamento, período de crise, período de separação de fato, período de divórcio e partilha, período posterior). A narrativa PRECISA incluir as principais razões do término, mesmo que forem pessoais ou desagradáveis, como extraconjugalidade, violência doméstica, desvio de patrimônio do casal, alcoolismo, vício em drogas etc (sigilo garantido).</p><div class="field__content"> <img src="images/finalidade.svg" alt=""> <textarea id="historia-casal" placeholder="História do casal"></textarea> </div></div>');
}

function fieldDuracaoRelacionamento() {
    $('#case-fields').append('<div class="field"> <label><strong>Duração do relacionamento</strong></label> <p>Inserir a data de início e final do relacionamento. Se a relação não terminou, insira a data de hoje.</p><div class="field__content"> <img src="images/data.svg" alt=""> <input id="duracao-relacionamento" type="text" placeholder="Duração do relacionamento"> </div></div>');
}

function fieldRegimeBens() {
    $('#case-fields').append('<div class="field"> <label><strong>Regime de bens do casal</strong></label> <p>Inserir o regime de bens do casal e a data do casamento (se possível, anexar ao final a certidão de casamento)</p><div class="field__content"> <img src="images/servico.svg" alt=""> <input id="regime-bens" type="text" placeholder="Regime de bens do casal"> </div></div>');
}

function fieldBensConhecidos() {
    $('#case-fields').append('<div class="field"> <label><strong>Bens conhecidos</strong></label> <p>Quais bens, ativos e passivos o(a) cliente conhece?</p><div class="field__content"> <img src="images/valor.svg" alt=""> <textarea id="bens-conhecidos" placeholder="Bens conhecidos"></textarea> </div></div>');
}

function fieldJudicializacao() {
    $('#case-fields').append('<div class="field"> <label><strong>Judicialização</strong></label> <p>O caso já foi judicializado? Indicar todos os processos relacionados com o casal, incluindo o processo de divórcio, processo de guarda, processo de separação de corpos, alimentos etc., incluindo o número do processo, eventual senha e cópias.</p><div class="field__content"> <img src="images/finalidade.svg" alt=""> <textarea id="judicializacao" placeholder="Judicialização"></textarea> </div></div>');
}

function fieldRedeRelacionamento() {
    $('#case-fields').append('<div class="field"> <label><strong>Rede principal de relacionamentos</strong></label> <p>Qual é a rede de relacionamentos do pesquisado? Quais são as pessoas que possivelmente possam ter ajudado o pesquisado(a) a ocultar ou desviar patrimônio?</p><div class="field__content"> <img src="images/finalidade.svg" alt=""> <textarea id="rede-relacionamentos" placeholder="Rede principal de relacionamentos"></textarea> </div></div>');
}

function fieldFalecido() {
    $('#case-fields').append('<div class="field"> <label><strong>Falecido ("de cujus", autor da herança ou sucessão)</strong></label> <p>Preencher aqui o nome e CPF da pessoa que morreu</p><div class="field__content"> <img src="images/cpf-cnpj.svg" alt=""> <input id="falecido" type="text" placeholder="Nome e CPF"> </div></div>');
}

function fieldDataFalecimento() {
    $('#case-fields').append('<div class="field"> <label><strong>Data de falecimento</strong></label> <div class="field__content"> <img src="images/data.svg" alt=""> <input id="data-falecimento" class="mask-date" type="tel" placeholder="Data de falecimento"> </div></div>');
}

function fieldSucessoresCredoresDevedores() {
    $('#case-fields').append('<div class="field"> <label><strong>Sucessores, credores e devedores</strong></label> <p>Quem são os sucessores (herdeiros e legatários), credores e devedores conhecidos do de cujus?</p><div class="field__content"> <img src="images/cpf-cnpj.svg" alt=""> <textarea id="sucessores-credores-devedores" placeholder="Sucessores, credores e devedores"></textarea> </div></div>');
}

function fieldRegimeBensDeCujus() {
    $('#case-fields').append('<div class="field"> <label><strong>Regime de bens do de cujus</strong></label> <p>Regime de bens do de cujus (Informar o regime de bens do de cujus (na hipótese de ter falecido casado ou com união estável). Se possível informar cartório, livro e folha em que está registrada a certidão de casamento; ou contrato de convivência; ou pacto antenupcial. Se esses arquivos estiverem disponíveis, anexar ao final)</p><div class="field__content"> <img src="images/servico.svg" alt=""> <input id="regime-bens-de-cujus" type="text" placeholder="Regime de bens do de cujus"> </div></div>');
}

function fieldTestamento() {
    $('#case-fields').append('<div class="field"> <label><strong>Testamento</strong></label> <p>O de cujus deixou testamento conhecido? Se sim, indicar o cartório, livro e folha. Se o arquivo estiver disponível, anexar ao final</p><div class="field__content"> <img src="images/servico.svg" alt=""> <input id="testamento" type="text" placeholder="Testamento"> </div></div>');
}

function fieldSuspeitasOcultamento() {
    $('#case-fields').append('<div class="field"> <label><strong>Suspeitas de ocultamento</strong></label> <p>Há alguma razão para crer que alguém está escondendo ou ocultando patrimônio do de cujus? Justificar.</p><div class="field__content"> <img src="images/finalidade.svg" alt=""> <input id="suspeitas-ocultamento" type="text" placeholder="Suspeitas de ocultamento"> </div></div>');
}

function fieldSituacaoFamiliar() {
    $('#case-fields').append('<div class="field"> <label><strong>Situação familiar</strong></label> <p>Qual era a situação familiar que precedeu a morte do de cujus? (Ex.: havia rixas ou disputas familiares? Havia pessoas brigadas entre si? Se sim, quem? Por quê? Enfim, indicar qualquer informação sobre a situação familiar que possa ser útil para as pesquisas)</p><div class="field__content"> <img src="images/jigsaw.svg" alt=""> <textarea id="situacao-familiar" placeholder="Situação familiar"></textarea> </div></div>');
}

function fieldPesquisaAvulsa() {
    $('#case-fields').append('<div class="field"> <label><strong>Pesquisa avulsa ou documento a ser solicitado*</strong></label> <p>Informar qual é a pesquisa avulsa ou documento solicitado (EXEMPLOS.: aquisição da procuração de livro n. 3451, fl. 244, do 1º Tabelião de Notas de São Paulo/SP; ou realização de pesquisa de escrituras e procurações do Fulano de Tal, CPF xxx.xxx.xxx-xx; ou realização de pesquisa de imóveis em nome da empresa XPTO S/A, CNPJ xx.xxx.xxx/0001-24, na cidade de Belo Horizonte/MG; ou realização de diligência in loco para obtenção de todos do haras Villa do Descanso, em Boituva/SP; ou aquisição de todos os atos societários das empresa MAÇÃ S/A, CNPJ xx.xxx.xxx/0001-35, e BIGHARD S/A, CNPJ xx.xxx.xxx/0001-46; etc).</p><div class="field__content"> <img src="images/servico.svg" alt=""> <textarea id="pesquisa-avulsa" class="required" placeholder="Pesquisa avulsa ou documento a ser solicitado"></textarea> </div></div>');
}


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

        if (val.length == 0) {
            thisField.addClass('error');
        }

        else if (val.length == 14) {
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
    $('.mask-date').mask('00/00/0000');
}


//navmenu
function navmenu() {
    $('.hamburger').click(function(){
        $(this).toggleClass('active');
        $('.navmenu').toggleClass('active');
    });
}