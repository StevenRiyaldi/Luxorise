<?php 
    include '../setApi.php';
    
    include '../DbConnect.php';

    $objDb = new DbConnect;
    $conn = $objDb->connect();
    
    $method = $_SERVER['REQUEST_METHOD'];
    $user = json_decode(file_get_contents('php://input'));
    $path = explode('/', $_SERVER['REQUEST_URI']);

    switch($method) {
        case "POST":
          $sql = "SELECT password FROM register";
          $sql .= " WHERE email = :email";
          $stmt = $conn->prepare($sql);
          $stmt->bindParam(':email', $user->email);
          $stmt->execute();
          $users = $stmt->fetch();
          $verify = $user->password == $users["password"];

          if($verify) {
            $sql = "SELECT * FROM register";
            $sql .= " WHERE email = :email";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $user->email);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
          }else {
            $users = ['status' => 0, 'message' => 'Failed to create record.'];
          }
          echo json_encode($users);

          break;

        case "GET" : 
          $sql = "SELECT * FROM register WHERE id = :id";
          $stmt = $conn->prepare($sql);
          $stmt->bindParam(':id', $path[5]);
          $stmt->execute();
          $users = $stmt->fetch(PDO::FETCH_ASSOC);
          if($users) {
              echo json_encode($users);
          }else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
            echo json_encode($response);
          }
          break;
    }


?>


