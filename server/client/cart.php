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
        $sql = "INSERT INTO cart(id, userId, productId, quantity) VALUES(null, :userId, :productId, :quantity)";
        $stmt = $conn->prepare($sql);
                    
        $stmt->bindParam(':userId', $user->userId);
        $stmt->bindParam(':productId', $user->productId);
        $stmt->bindParam(':quantity', $user->quantity);
                    
        if($stmt->execute()) {
          $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
          $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        
        echo json_encode($response);
        break;

        case "GET":
          $sql = "SELECT cart.id, cart.quantity, cart.productId, product.nameProduct, product.price, product.image
                  FROM cart
                  INNER JOIN product ON cart.productId=product.id
                  WHERE userId = $path[5]";

          $stmt = $conn->prepare($sql);
          $stmt->execute();
          $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
          echo json_encode($users);
    }
?>