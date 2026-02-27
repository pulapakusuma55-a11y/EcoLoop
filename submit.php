<?php

include "db.php";

if($_SERVER["REQUEST_METHOD"]=="POST"){

$fullname=$_POST["fullname"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$role=$_POST["role"];
$contribution=$_POST["contribution"];

$sql="INSERT INTO users
(fullname,email,phone,role,contribution)
VALUES
('$fullname','$email','$phone','$role','$contribution')";

if(mysqli_query($conn,$sql)){
echo "success";
}else{
echo "error";
}

}

?>