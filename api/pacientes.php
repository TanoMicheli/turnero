<?php
require_once '../config/database.php';

session_start();
if (!isset($_SESSION['doctor_id'])) {
    handleError('No autorizado');
}

$conn = getDBConnection();

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!$data) {
            handleError('Datos inválidos');
        }
        
        $data = sanitizeInput($data);
        
        $sql = "INSERT INTO pacientes (nombre, dni, fecha_nacimiento, telefono, email, direccion, obra_social_id, plan_id, doctor_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssssiii", 
            $data['nombre'],
            $data['dni'],
            $data['fecha_nacimiento'],
            $data['telefono'],
            $data['email'],
            $data['direccion'],
            $data['obra_social_id'],
            $data['plan_id'],
            $_SESSION['doctor_id']
        );
        
        if ($stmt->execute()) {
            $paciente_id = $conn->insert_id;
            echo json_encode(['success' => true, 'id' => $paciente_id]);
        } else {
            handleError('Error al crear paciente');
        }
        break;
        
    case 'GET':
        $sql = "SELECT p.*, os.nombre as obra_social_nombre, pos.nombre as plan_nombre 
                FROM pacientes p 
                LEFT JOIN obras_sociales os ON p.obra_social_id = os.id
                LEFT JOIN planes_obra_social pos ON p.plan_id = pos.id
                WHERE p.doctor_id = ?";
                
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $_SESSION['doctor_id']);
        $stmt->execute();
        
        $result = $stmt->get_result();
        $pacientes = [];
        
        while ($row = $result->fetch_assoc()) {
            $pacientes[] = $row;
        }
        
        echo json_encode($pacientes);
        break;
        
    case 'PUT':
        if (!isset($_GET['id'])) {
            handleError('ID de paciente no especificado');
        }
        
        $paciente_id = sanitizeInput($_GET['id']);
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!$data) {
            handleError('Datos inválidos');
        }
        
        $data = sanitizeInput($data);
        
        $sql = "UPDATE pacientes 
                SET nombre = ?, dni = ?, fecha_nacimiento = ?, telefono = ?, 
                    email = ?, direccion = ?, obra_social_id = ?, plan_id = ? 
                WHERE id = ? AND doctor_id = ?";
                
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssssiii", 
            $data['nombre'],
            $data['dni'],
            $data['fecha_nacimiento'],
            $data['telefono'],
            $data['email'],
            $data['direccion'],
            $data['obra_social_id'],
            $data['plan_id'],
            $paciente_id,
            $_SESSION['doctor_id']
        );
        
        if ($stmt->execute()) {
            echo json_encode(['success' => true]);
        } else {
            handleError('Error al actualizar paciente');
        }
        break;
        
    case 'DELETE':
        if (!isset($_GET['id'])) {
            handleError('ID de paciente no especificado');
        }
        
        $paciente_id = sanitizeInput($_GET['id']);
        
        $sql = "DELETE FROM pacientes WHERE id = ? AND doctor_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $paciente_id, $_SESSION['doctor_id']);
        
        if ($stmt->execute()) {
            echo json_encode(['success' => true]);
        } else {
            handleError('Error al eliminar paciente');
        }
        break;
        
    default:
        handleError('Método no permitido');
}

$conn->close(); 