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
          $sql = "INSERT INTO profile(id, userId, nama, alamat, notelp, image) 
          VALUES(null, :userId, :nama, :alamat, :notelp, :image)";
          $stmt = $conn->prepare($sql);
          $stmt->bindParam(':userId', $user->userId);
          $stmt->bindParam(':nama', $user->nama);
          $stmt->bindParam(':alamat', $user->alamat);
          $stmt->bindParam(':notelp', $user->notelp);
          $stmt->bindParam(':image', $user->image);
              
          if($stmt->execute()) {
            $response = ['status' => 0, 'message' => 'Succes to create record.'];
          } else {
              $response = ['status' => 0, 'message' => 'Failed to create record.'];
          }

          echo $response;

          break;
        case "GET" : 
            $sql = "SELECT * FROM profile WHERE userId = :userId";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':userId', $path[5]);
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