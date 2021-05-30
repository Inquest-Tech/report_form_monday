<?php
if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
    header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );
    die();
}


$cpfcnpjqty = $_POST['cpfcnpjqty'];
$cpfcnpj = $_POST['cpfcnpj'];
$nomecaso = $_POST['nomecaso'];
$finalidade = $_POST['finalidade'];
$justacausa = $_POST['justacausa'];
$servico = $_POST['servico'];
$nomesolicitante = $_POST['nomesolicitante'];
$emailsolicitante = $_POST['emailsolicitante'];


$token = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjExMTgyNDk5NiwidWlkIjoxNzIyNzQ3NCwiaWFkIjoiMjAyMS0wNS0zMFQxMzoyOTozMi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6NDkxNzk1NywicmduIjoidXNlMSJ9.UWe6fF8tVdqTtYahjxceDr1etHQXF-3J-xATlt3inoM';
$apiUrl = 'https://api.monday.com/v2';
$headers = ['Content-Type: application/json', 'Authorization: ' . $token];


$query = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:965500914, item_name:$myItemName, column_values:$columnVals) { id } }';
$vars = ['myItemName' => $nomecaso, 
  'columnVals' => json_encode([
    'status' => ['label' => 'Pendente'], 
    'cpf_ou_cnpj_que_deseja_consultar3' => $cpfcnpj,
    'n_meros'=> $cpfcnpjqty,
    'status5'  => ['label' =>  $finalidade],
	'status9'  => ['label' =>  $justacausa],
	'status_1' => ['label' =>  $servico],
	'preencha_seu_nome_completo' => $nomesolicitante,
	'seu_e_mail' => $emailsolicitante,

])];

$data = @file_get_contents($apiUrl, false, stream_context_create([
 'http' => [
 'method' => 'POST',
 'header' => $headers,
 'content' => json_encode(['query' => $query, 'variables' => $vars]),
 ]
]));
$responseContent = json_decode($data, true);

echo json_encode($responseContent);


die();
?>
