<?php

$name = $_POST['name'];
$email = $_POST['Email'];
$message = $_POST['Message'];

$conn = new mysqli('localhost','root','','contactform');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}

else{
    $stmt = $conn->prepare("insert into data(name, Email, Message) 
        values(?, ?, ?)");
        $stmt->bind_param("sss",$name, $email, $message);
        $stmt->execute();
        echo "Your Message has been sent successfully ";
        ini_set('display errors','off');
        $stmt->close();
        $conn->close();
}


?>