<?php
if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
    header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );
    die();
}

$subitems_values = []; //set var for subitems query

$nomecaso = $_POST['nomecaso'];
$nomesolicitante = $_POST['nomesolicitante'];
$emailsolicitante = $_POST['emailsolicitante'];
$finalidade = $_POST['finalidade'];
$servico = $_POST['servico'];

$cpfCnpjQtyPrimary = $_POST['cpfCnpjQtyPrimary'];
$cpfCnpjPrimary = $_POST['cpfCnpjPrimary'];

//$cpfCnpjQtySecondary = $_POST['cpfCnpjQtySecondary'];
$cpfCnpjSecondary = $_POST['cpfCnpjSecondary'];
if( $cpfCnpjSecondary ) {
    array_push( $subitems_values, array('label' => 'Target(s) Secundários(s)', 'value' => $cpfCnpjSecondary) );
}

$motivosTargetsSecundarios = $_POST['motivosTargetsSecundarios'];
if( $motivosTargetsSecundarios ) {
    array_push( $subitems_values, array('label' => 'Motivo de inserção dos pesquisados secundários', 'value' => $motivosTargetsSecundarios) );
}

$localidadeFoco = $_POST['localidadeFoco'];
if( $localidadeFoco ) {
    array_push( $subitems_values, array('label' => 'Localidade foco', 'value' => $localidadeFoco) );
}

$dataCredito = $_POST['dataCredito'];
if( $dataCredito ) {
    array_push( $subitems_values, array('label' => 'Data do crédito', 'value' => $dataCredito) );
}

$dataVencimentoContratoInadimplemento = $_POST['dataVencimentoContratoInadimplemento'];
if( $dataVencimentoContratoInadimplemento ) {
    array_push( $subitems_values, array('label' => 'Data do vencimento/inadimplemento', 'value' => $dataVencimentoContratoInadimplemento) );
}

$dataProtesto = $_POST['dataProtesto'];
if( $dataProtesto ) {
    array_push( $subitems_values, array('label' => 'Data do protesto', 'value' => $dataProtesto) );
}

$dataDistribuicao = $_POST['dataDistribuicao'];
if( $dataDistribuicao ) {
    array_push( $subitems_values, array('label' => 'Data da distribuição', 'value' => $dataDistribuicao) );
}

$numeroProcesso = $_POST['numeroProcesso'];
if( $numeroProcesso ) {
    array_push( $subitems_values, array('label' => 'Número do processo', 'value' => $numeroProcesso) );
}

$valorHistoricoCausaCredito = $_POST['valorHistoricoCausaCredito'];
if( $valorHistoricoCausaCredito ) {
    array_push( $subitems_values, array('label' => 'Valor histórico da causa ou do crédito', 'value' => $valorHistoricoCausaCredito) );
}

$dataCitacao = $_POST['dataCitacao'];
if( $dataCitacao ) {
    array_push( $subitems_values, array('label' => 'Data da citação', 'value' => $dataCitacao) );
}

$advogadosReusExecutados = $_POST['advogadosReusExecutados'];
if( $advogadosReusExecutados ) {
    array_push( $subitems_values, array('label' => 'Advogados do(s) réu(s)/executado(s)', 'value' => $advogadosReusExecutados) );
}

$garantiasPrestadas = $_POST['garantiasPrestadas'];
if( $garantiasPrestadas ) {
    array_push( $subitems_values, array('label' => 'Garantias prestadas', 'value' => $garantiasPrestadas) );
}

$observacoes = $_POST['observacoes'];
if( $observacoes ) {
    array_push( $subitems_values, array('label' => 'Observações', 'value' => $observacoes) );
}

$devedoresSolidarios = $_POST['devedoresSolidarios'];
if( $devedoresSolidarios ) {
    array_push( $subitems_values, array('label' => 'Devedores solidários', 'value' => $devedoresSolidarios) );
}

$processoRjFalencia = $_POST['processoRjFalencia'];
if( $processoRjFalencia ) {
    array_push( $subitems_values, array('label' => 'Processo de RJ ou Falência', 'value' => $processoRjFalencia) );
}

$valorNominalCreditoCausa = $_POST['valorNominalCreditoCausa'];
if( $valorNominalCreditoCausa ) {
    array_push( $subitems_values, array('label' => 'Valor nominal do crédito ou da causa', 'value' => $valorNominalCreditoCausa) );
}

$contextoNegocial = $_POST['contextoNegocial'];
if( $contextoNegocial ) {
    array_push( $subitems_values, array('label' => 'Contexto negocial', 'value' => $contextoNegocial) );
}

$dataEstimada = $_POST['dataEstimada'];
if( $dataEstimada ) {
    array_push( $subitems_values, array('label' => 'Data estimada para o negócio', 'value' => $dataEstimada) );
}

$valorNegocio = $_POST['valorNegocio'];
if( $valorNegocio ) {
    array_push( $subitems_values, array('label' => 'Valor do negócio', 'value' => $valorNegocio) );
}

$objetoNegocio = $_POST['objetoNegocio'];
if( $objetoNegocio ) {
    array_push( $subitems_values, array('label' => 'Objeto do negócio', 'value' => $objetoNegocio) );
}

$denuncia = $_POST['denuncia'];
if( $denuncia ) {
    array_push( $subitems_values, array('label' => 'Denúncia', 'value' => $denuncia) );
}

$historicoAmpliado = $_POST['historicoAmpliado'];
if( $historicoAmpliado ) {
    array_push( $subitems_values, array('label' => 'Histórico ampliado', 'value' => $historicoAmpliado) );
}

$dataEntrada = $_POST['dataEntrada'];
if( $dataEntrada ) {
    array_push( $subitems_values, array('label' => 'Data de entrada na empresa ou de início do relacionamento', 'value' => $dataEntrada) );
}

$dataInicioNaoConformidade = $_POST['dataInicioNaoConformidade'];
if( $dataInicioNaoConformidade ) {
    array_push( $subitems_values, array('label' => 'Início do período de não-conformidade', 'value' => $dataInicioNaoConformidade) );
}

$dataEncerramentoNaoConformidade = $_POST['dataEncerramentoNaoConformidade'];
if( $dataEncerramentoNaoConformidade ) {
    array_push( $subitems_values, array('label' => 'Fim do período de não-conformidade', 'value' => $dataEncerramentoNaoConformidade) );
}

$dataSaida = $_POST['dataSaida'];
if( $dataSaida ) {
    array_push( $subitems_values, array('label' => 'Data de saída', 'value' => $dataSaida) );
}

$objetivosEscopo = $_POST['objetivosEscopo'];
if( $objetivosEscopo ) {
    array_push( $subitems_values, array('label' => 'Objetivos e escopo', 'value' => $objetivosEscopo) );
}

$historiaCasal = $_POST['historiaCasal'];
if( $historiaCasal ) {
    array_push( $subitems_values, array('label' => 'História do casal', 'value' => $historiaCasal) );
}

$duracaoRelacionamento = $_POST['duracaoRelacionamento'];
if( $duracaoRelacionamento ) {
    array_push( $subitems_values, array('label' => 'Duração do relacionamento', 'value' => $duracaoRelacionamento) );
}

$regimeBens = $_POST['regimeBens'];
if( $regimeBens ) {
    array_push( $subitems_values, array('label' => 'Regime de bens do casal', 'value' => $regimeBens) );
}

$bensConhecidos = $_POST['bensConhecidos'];
if( $bensConhecidos ) {
    array_push( $subitems_values, array('label' => 'Bens conhecidos', 'value' => $bensConhecidos) );
}

$judicializacao = $_POST['judicializacao'];
if( $judicializacao ) {
    array_push( $subitems_values, array('label' => 'Judicialização', 'value' => $judicializacao) );
}

$redeRelacionamentos = $_POST['redeRelacionamentos'];
if( $redeRelacionamentos ) {
    array_push( $subitems_values, array('label' => 'Rede principal de relacionamentos', 'value' => $redeRelacionamentos) );
}

$falecido = $_POST['falecido'];
if( $falecido ) {
    array_push( $subitems_values, array('label' => 'Falecido', 'value' => $falecido) );
}

$dataFalecimento = $_POST['dataFalecimento'];
if( $dataFalecimento ) {
    array_push( $subitems_values, array('label' => 'Data de falecimento', 'value' => $dataFalecimento) );
}

$sucessoresCredoresDevedores = $_POST['sucessoresCredoresDevedores'];
if( $sucessoresCredoresDevedores ) {
    array_push( $subitems_values, array('label' => 'Sucessores, credores e devedores', 'value' => $sucessoresCredoresDevedores) );
}

$regimeBensDeCujus = $_POST['regimeBensDeCujus'];
if( $regimeBensDeCujus ) {
    array_push( $subitems_values, array('label' => 'Regime de bens', 'value' => $regimeBensDeCujus) );
}

$testamento = $_POST['testamento'];
if( $testamento ) {
    array_push( $subitems_values, array('label' => 'Testamento', 'value' => $testamento) );
}

$suspeitasOcultamento = $_POST['suspeitasOcultamento'];
if( $suspeitasOcultamento ) {
    array_push( $subitems_values, array('label' => 'Suspeitas de ocultamento', 'value' => $suspeitasOcultamento) );
}

$situacaoFamiliar = $_POST['situacaoFamiliar'];
if( $situacaoFamiliar ) {
    array_push( $subitems_values, array('label' => 'Situação familiar', 'value' => $situacaoFamiliar) );
}

$pesquisaAvulsa = $_POST['pesquisaAvulsa'];
if( $pesquisaAvulsa ) {
    array_push( $subitems_values, array('label' => 'Pesquisa avulsa', 'value' => $pesquisaAvulsa) );
}




$token = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjExMTgyNDk5NiwidWlkIjoxNzIyNzQ3NCwiaWFkIjoiMjAyMS0wNS0zMFQxMzoyOTozMi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDkxNzk1NywicmduIjoidXNlMSJ9.UWe6fF8tVdqTtYahjxceDr1etHQXF-3J-xATlt3inoM';
$apiUrl = 'https://api.monday.com/v2';
$headers = ['Content-Type: application/json', 'Authorization: ' . $token];

$query = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:965500914, item_name:$myItemName, column_values:$columnVals) { id } }';

$vars = ['myItemName' => $nomecaso, 
    'columnVals' => json_encode([
        'status' => ['label' => 'Pendente'], 
        'preencha_seu_nome_completo' => $nomesolicitante,
        'seu_e_mail' => $emailsolicitante,    
        'status5'  => ['label' =>  $finalidade],
        'status_1' => ['label' =>  $servico],
        'cpf_ou_cnpj_que_deseja_consultar3' => $cpfCnpjPrimary,
        'n_meros'=> $cpfCnpjQtyPrimary,
    ])
];

$data = @file_get_contents($apiUrl, false, stream_context_create([
    'http' => [
    'method' => 'POST',
    'header' => $headers,
    'content' => json_encode(['query' => $query, 'variables' => $vars]),
    ]
]));
$responseContent = json_decode($data, true);
//print_r($responseContent['data']['create_item']['id']);



//query subitem
foreach( $subitems_values as $subitem) {
    $query_subitem = 'mutation ($mySubItemName: String!, $columnValsSub: JSON!) { create_subitem (parent_item_id:'.$responseContent["data"]["create_item"]["id"].', item_name:$mySubItemName, column_values:$columnValsSub) { id } }';

    $vars_subitem = ['mySubItemName' => $subitem['label'], 
        'columnValsSub' => json_encode([
            'texto_longo' => ['text' =>  $subitem['value']],
            'n_meros'
        ])
    ];

    $data_subitem = @file_get_contents($apiUrl, false, stream_context_create([
        'http' => [
        'method' => 'POST',
        'header' => $headers,
        'content' => json_encode(['query' => $query_subitem, 'variables' => $vars_subitem]),
        ]
    ]));
    //$responseContent_subitem = json_decode($data_subitem, true);
}


echo json_encode($responseContent_subitem);

die();
?>