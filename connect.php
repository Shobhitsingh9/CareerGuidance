<?php
     $firstName = $_POST['firstName'];
    $email = $_POST['email'];
    $userid1 = $_POST['userid1'];
    $password1 = $_POST['password1'];

    $conn = new mysqli('localhost','root','','register');
    if($conn->connect_error){
        die('Connection failed :'.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration(firstName, email, userid1, password1) 
        values(?, ?, ?, ?)");
        $stmt->bind_param("ssss",$firstName, $email, $userid1, $password1);
        $stmt->execute();
        echo "Registration Successful...";
        ini_set('display errors','off');
        $stmt->close();
        $conn->close();
        
}

?>