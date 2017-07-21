<?php
header('Content-Type: application/json');

$arrResponse = array();
$arrResponse['status'] = 'error';

	// Check for empty fields
	if(
	  empty($_POST['email']) 		||
	  !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
			$arrResponse['error_msg'] = 'Faltan parámetros';
			echo json_encode($arrResponse);
			die();
	 	}

	$arrResponse['status'] = 'ok';
		
	$email_address = $_POST['email'];
		
	// Create the email and send the message
	// administracion@camaraargentinacafe.com.ar
	$to = 'info@url.com.ar'; // Add your email address yourname@yourdomain.com - This is where the form will send a message to.
	$email_subject = "Nuevo contacto:  $email_address";
	$email_body = "Recibiste una nueva consulta \n\n"."Formulario de Contacto:\n\nE-mail: $email_address";
	$headers = "From: noreply@url.com.ar\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
	$headers .= "Reply-To: $email_address";
	
	if(!mail($to,$email_subject,$email_body,$headers))
	{
		$arrResponse['status'] = 'error';
		$arrResponse['error_msg'] = 'No se pudo enviar el email';
	}
	echo json_encode($arrResponse);
	die();

?>
