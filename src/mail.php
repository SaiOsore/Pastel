<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$service = $_POST['service'];
$price = $_POST['price'];
$styles = $_POST['styles'];
$name = $_POST['userName'];
$phone = $_POST['userPhone'];
$email = $_POST['userEmail'];
$text = $_POST['OrderText'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'imap.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sai.osore@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'DEStruction6'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 993; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('sai.osore@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('sai.osore@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Pastel Site Order';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. ' <br> Почта этого пользователя: ' .$email. ' <br> Сервис: ' .$service. ' <br> Цена: ' .$price. ' <br> Стиль: ' .$styles. ' <br> Дополнительные пожелания: ' .$text;
$mail->AltBody = '';

if(!$mail->send()) {
  echo 'Error';
} else {
  header('location: thank-you.html');
}

?>