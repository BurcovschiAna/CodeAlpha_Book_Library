<?php 
// $conetion = mysqli_connect("localhost", "root", "123_EWQasdcxz", "mydb");
// if(!$conetion)
//     die("No conetion".mysqli_connect_error());
// $query = "select * from users";
// $statement = mysqli_query($conetion,$query);

// while($row = mysqli_fetch_array($statement, MYSQLI_ASSOC)){
//     echo $row['user_name']."</br>";
// }
try {
    $connection = new PDO("mysql:host=localhost;dbname=mydb", "root", "123_EWQasdcxz");
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

?>