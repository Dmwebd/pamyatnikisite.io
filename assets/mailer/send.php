<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$phone = $_POST['tel'];
$name = $_POST['name'];
$title = $_POST['title'];
$email = $_POST['email'];


$langSt = $_POST['select'];
$zapis = implode(", ", $langSt);


$qw1 = $_POST['qw1'];
$qw2 = $_POST['qw2'];
$qw3 = $_POST['qw3'];
$qw4 = $_POST['qw4'];
$qw5 = $_POST['qw5'];
$qw6 = $_POST['qw6'];







// $soc = " <br> Куда нужно видеонаблюдение - ".$_POST['video'];
// $why = " <br> Сколько вам потребуется камер - ".$_POST['cam'];
// $tms = " <br> Сколько дней требуется хранить запись - ".$_POST['days'];
// $types = " <br> Что для Вас важнее - ".$zapis;
// $name = " <br> Имя - ".$_POST['name'];
// $usl = " <br> Где находится объект - ".$_POST['object'];
// $usl2 = " <br> В какое время вам удобно - ".$_POST['time'];

// $q1 =  ( $_POST['video'] ? $soc : ' ' );
// $q2 = ( $_POST['cam'] ? $why : ' ');
// $q3 = ( $_POST['days'] ? $tms : ' ');
// $q4 = ( $_POST['select'] ? $types : ' ');
// $q5 = ( $_POST['name'] ?  $name : ' ');
// $q6 = ( $_POST['object'] ?  $usl : ' ');
// $q7 = ( $_POST['time'] ?  $usl2 : ' ');


// Настройки
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
// $mail->isSMTP(); 
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                      
$mail->Username = ''; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = ''; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('', 'Форма с сайта'); // Ваш Email
$mail->addAddress('mintriy@yandex.ru'); // Email получателя
// $mail->addAddress('example@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов
  // for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
  //       $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
  //       $filename = $_FILES['userfile']['name'][$ct];
  //       if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
  //           $mail->addAttachment($uploadfile, $filename);
  //       } else {
  //           $msg .= 'Failed to move file to ' . $uploadfile;
  //       }
  //   }   
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = 'Форма с сайта '; // Заголовок письма
 if($_POST['formname'] == 'test'){
        $mail->Body    = '
            Пользователь прошёл тест: <br>
            1. Выберите тип памятника: ' . $qw1 . ' <br> 
            2. Выберите верх памятника: ' . $qw2.' <br> 
            3. Выберите материал памятника: ' . $qw3 . ' <br> 
            4. Выберите цвет памятника: ' . $qw4 . ' <br> 
            Получить Персональную подборку: ' . $qw5 .' <br> 
            Телефон: ' . $phone .' ';
    }
    else{

       $mail->Body    = 
            $title . ' <br> 
            Телефон: ' . $phone . ' ';
            
        
    }

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>