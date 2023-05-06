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
          $sql = "INSERT INTO product(id, nameProduct, price, stock, type, image) 
          VALUES(null, :nameProduct, :price, :stock, :type, :image)";
          $stmt = $conn->prepare($sql);
              
          $stmt->bindParam(':nameProduct', $user->nameProduct);
          $stmt->bindParam(':price', $user->price);
          $stmt->bindParam(':stock', $user->stock);
          $stmt->bindParam(':type', $user->type);
          $stmt->bindParam(':image', $user->image);

          if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
          } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
          }

          echo json_encode($response);

          break;

        case "GET":
          if(isset($path[5])) {
            $sql = "SELECT * FROM product WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[5]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
          }
          else {
            $sql = "SELECT * FROM product";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
          }
          
          echo json_encode($users);
          break;

        case "DELETE":
          $sql = "DELETE FROM product WHERE id = :id";
          $stmt = $conn->prepare($sql);
          $stmt->bindParam(':id', $path[5]);
          if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
          } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
          }

          $sql = "DELETE FROM cart WHERE productId = :id";
          $stmt = $conn->prepare($sql);
          $stmt->bindParam(':id', $path[5]);

          if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
          } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
          }
          echo json_encode($response);      
          break;
    }
?>