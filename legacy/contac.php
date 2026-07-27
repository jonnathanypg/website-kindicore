<?php
/*
 *  CONFIGURE EVERYTHING HERE
 */



// an email address that will receive the email with the output of the form
$sendTo = 'jonnathanp@weblifetech.com';






// message that will be displayed when everything is OK :)
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';

// If something goes wrong, we will display this message.
$errorMessage = 'There was an error while submitting the form. Please try again later';


/*
 *  LET'S DO THE SENDING
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting( E_ALL & ~E_NOTICE );

try {

	// Check for required fields
	if (empty($_POST['nombre']) || empty($_POST['email']) || empty($_POST['telefono']) || empty($_POST['institucion'])) {
		throw new \Exception( 'Por favor, complete todos los campos obligatorios.' );
	}

	// an email address that will be in the From field of the email.
	$from = $_POST['email'];
	
    // Construct the message
	$message = "Nuevo contacto desde la web:\r\n\r\n";
	$message .= "Nombre: " . $_POST['nombre'] . "\r\n";
    $message .= "Email: " . $_POST['email'] . "\r\n";
    $message .= "Teléfono: " . ($_POST['telefono'] ? $_POST['telefono'] : 'No especificado') . "\r\n";
    $message .= "Institución: " . ($_POST['institucion'] ? $_POST['institucion'] : 'No especificada') . "\r\n";
    
    if (isset($_POST['mensaje']) && !empty($_POST['mensaje'])) {
        $message .= "\r\nMensaje adicional:\r\n" . $_POST['mensaje'] . "\r\n";
    }

	// subject of the email
    $subject = "Nuevo Lead KindiCore: " . $_POST['nombre'] . " - " . ($_POST['institucion'] ? $_POST['institucion'] : 'Sin Institución');

	$headers = 'From: ' . $from . "\r\n" .
	           'Reply-To: ' . $from . "\r\n" .
	           'X-Mailer: PHP/' . phpversion();

	// Send email
	if(mail( $sendTo, $subject, $message, $headers )) {
        $responseArray = array('type' => 'success', 'message' => $okMessage);
    } else {
        throw new \Exception('Error enviando el correo. Por favor intente más tarde.');
    }

} catch ( \Exception $e ) {
	 $responseArray = array('type' => 'danger', 'message' => $e->getMessage());
}


// Return JSON response based on the actual result
$encoded = json_encode($responseArray);

header('Content-Type: application/json');

echo $encoded;
