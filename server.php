/* this is server response: this code gets data from client, turns it into string
 and show it on client side */
<?php
// getting json data from client
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);