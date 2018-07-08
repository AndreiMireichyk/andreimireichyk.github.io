<?php

require_once 'components/PHPMailer/PHPMailer.php';
require_once 'components/PHPMailer/Exception.php';
require_once 'components/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


class MailController
{

    public function __construct()
    {
        //settings
        $this->handle = new PHPMailer();
        $this->handle->CharSet = 'UTF-8';
        $this->handle->ContentType = 'text/html; charset=utf-8\r\n';
        $this->handle->From = "no-reply@pyrat.media";
        $this->handle->SMTPSecure = 'tsl';

    }


    public function prepare($email, $mail_subject, $mail_body){
        $this->handle->addAddress($email);
        //$this->handle->setFrom('no-reply@gruzon.by', 'Gruzon.by');
        $this->handle->Subject = $mail_subject;
        //body
        $this->handle->msgHTML($mail_body);
        //send
        $this->handle->send();
    }
}

$errors = [];
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_SPECIAL_CHARS);
$contacts = filter_input(INPUT_POST, 'contacts', FILTER_SANITIZE_SPECIAL_CHARS);


$mailer = new MailController();
$mailer->prepare("dnsxss@gmail.com", "Сообщение с сайта PYRAT", $name."<br>".$description."<br>".$contacts);

echo json_encode(['status'=>true]);
