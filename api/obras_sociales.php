<?php
require_once '../config/database.php';

session_start();
if (!isset($_SESSION['doctor_id'])) {
    handleError('No autorizado');
}

$conn = getDBConnection();

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            $obra_social_id = sanitizeInput($_GET['id']);
            
            $sql = "SELECT * FROM planes_obra_social WHERE obra_social_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $obra_social_id);
            $stmt->execute();
            
            $result = $stmt->get_result();
            $planes = [];
            
            while ($row = $result->fetch_assoc()) {
                $planes[] = $row;
            }
            
            echo json_encode($planes);
        } else {
            $sql = "SELECT * FROM obras_sociales ORDER BY nombre";
            $result = $conn->query($sql);
            
            $obras_sociales = [];
            while ($row = $result->fetch_assoc()) {
                $obras_sociales[] = $row;
            }
            
            echo json_encode($obras_sociales);
        }
        break;
        
    default:
        handleError('Método no permitido');
}

$conn->close(); 