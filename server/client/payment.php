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
        $sql = "INSERT INTO payment(id, userId, method, first_name, last_name, number) VALUES(null, :userId, :method, :first_name, :last_name, :number)";
        $stmt = $conn->prepare($sql);
                    
        $stmt->bindParam(':userId', $user->userId);
        $stmt->bindParam(':method', $user->method);
        $stmt->bindParam(':first_name', $user->first_name);
        $stmt->bindParam(':last_name', $user->last_name);
        $stmt->bindParam(':number', $user->number);
                    
        if($stmt->execute()) {
          $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
          $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        
        echo json_encode($response);
        break;

        case "GET":
          $sql = "SELECT * FROM payment WHERE userId = :userId";
          $stmt = $conn->prepare($sql);
          
          $stmt->bindParam(':userId', $path[5]);

          $stmt->execute();
          $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
          echo json_encode($users);
    }
?>