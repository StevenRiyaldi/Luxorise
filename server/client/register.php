<?php 
    include '../setApi.php';
    
    include '../DbConnect.php';

    $objDb = new DbConnect;
    $conn = $objDb->connect();
    
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method) {
        case "POST":
          $user = json_decode(file_get_contents('php://input'));
          $path = explode('/', $_SERVER['REQUEST_URI']);

          if(!filter_var($user->email, FILTER_VALIDATE_EMAIL)) {
            $error = "Invalid email format";
            echo $error;
            break;
          }
                
          $query = $conn->prepare("SELECT email FROM register WHERE email = '$user->email'");
                
          $query->execute();

          $result = $query->rowCount();

          if($result >= 1) {
            echo false;
          }else {
            $sql = "INSERT INTO register(id, username, email, password) VALUES(null, :username, :email, :password)";
            $stmt = $conn->prepare($sql);
            $created_at = date('Y-m-d');
            $stmt->bindParam(':username', $user->username);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
            if($stmt->execute()) {
              $sql = "SELECT * FROM register";
              $sql .= " WHERE email = :email";
              $stmt = $conn->prepare($sql);
              $stmt->bindParam(':email', $user->email);
              $stmt->execute();
              $response = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
              $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($response);
          }
            
          break;
    }
?>