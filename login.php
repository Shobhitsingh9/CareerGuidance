<?php 
$userid1 = $_POST['userid1'];
$password1 = $_POST['password1'];

$conn = new mysqli('localhost','root','','register');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}
else{
    $stmt = $conn->prepare("select * from registration where userid1= ?");
    $stmt->bind_param("s",$userid1);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0){
        $data = $stmt_result->fetch_assoc();
        if($data['password1']===$password1){
          include("welcome.html");
          
        }
    } else {
        echo "<h2> Invalid Email or Password </h2>";
    }
    $stmt->close();
    $conn->close(); 
}
?>