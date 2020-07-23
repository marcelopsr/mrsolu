<?php
 
$nombre = $_POST ["name"];
$correo = $_POST ["email"];
$asunto = $_POST ["subject"];
$telefono = $_POST ["telefono"];
$mensaje = $_POST ["message"];

$body = "Nombre: " . $nombre . "<br>Correo: " . $correo . "<br>Telefono: " . $telefono. "<br>Asunto: " . $asunto . "<br>Mensaje: " . $mensaje;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                           // Enable verbose debug output
    $mail->isSMTP();                                                // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                           // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                       // Enable SMTP authentication
    $mail->Username   = '';                        // SMTP username
    $mail->Password   = '';                             // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;             // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                        // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('mesr.96@gmail.com', $nombre);
    $mail->addAddress('mesr.96@gmail.com');             // Add a recipient

    // Content
    $mail->isHTML(true);                                            // Set email format to HTML
    $mail->Subject = 'Correo desde la web Mr Solution';
    $mail->Body = $body;                                            //Cuerpo del email
    $mail->CharSet = 'UTF-8';                                       //Codificacion para la tilde
    $mail->send();
    echo 'El mensaje se envio correctamente';
} catch (Exception $e) {
    echo "Hubo un error al enviar un correo: {$mail->ErrorInfo}";
}

?>
