<?php
require_once '../config/database.php';

session_start();
if (!isset($_SESSION['doctor_id'])) {
    handleError('No autorizado');
}

$conn = getDBConnection();
$doctor_id = $_SESSION['doctor_id'];

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $tipo = isset($_GET['tipo']) ? sanitizeInput($_GET['tipo']) : 'general';
        $periodo = isset($_GET['periodo']) ? sanitizeInput($_GET['periodo']) : 'mes';
        
        switch ($tipo) {
            case 'turnos':
                $stats = obtenerEstadisticasTurnos($conn, $doctor_id, $periodo);
                break;
            case 'obras_sociales':
                $stats = obtenerEstadisticasObrasSociales($conn, $doctor_id);
                break;
            case 'pacientes':
                $stats = obtenerEstadisticasPacientes($conn, $doctor_id, $periodo);
                break;
            default:
                $stats = obtenerEstadisticasGenerales($conn, $doctor_id);
        }
        
        echo json_encode($stats);
        break;
        
    default:
        handleError('Método no permitido');
}

function obtenerEstadisticasTurnos($conn, $doctor_id, $periodo) {
    $fecha_inicio = getFechaInicio($periodo);
    
    $sql = "SELECT 
                COUNT(*) as total_turnos,
                SUM(CASE WHEN estado = 'completado' THEN 1 ELSE 0 END) as turnos_completados,
                SUM(CASE WHEN estado = 'cancelado' THEN 1 ELSE 0 END) as turnos_cancelados,
                SUM(CASE WHEN estado = 'pendiente' THEN 1 ELSE 0 END) as turnos_pendientes
            FROM turnos 
            WHERE doctor_id = ? AND fecha >= ?";
            
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $doctor_id, $fecha_inicio);
    $stmt->execute();
    
    return $stmt->get_result()->fetch_assoc();
}

function obtenerEstadisticasObrasSociales($conn, $doctor_id) {
    $sql = "SELECT 
                os.nombre,
                COUNT(DISTINCT p.id) as cantidad_pacientes
            FROM pacientes p
            JOIN obras_sociales os ON p.obra_social_id = os.id
            WHERE p.doctor_id = ?
            GROUP BY os.id, os.nombre
            ORDER BY cantidad_pacientes DESC";
            
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $doctor_id);
    $stmt->execute();
    
    $result = $stmt->get_result();
    $stats = [];
    
    while ($row = $result->fetch_assoc()) {
        $stats[] = $row;
    }
    
    return $stats;
}

function obtenerEstadisticasPacientes($conn, $doctor_id, $periodo) {
    $fecha_inicio = getFechaInicio($periodo);
    
    $sql = "SELECT 
                COUNT(DISTINCT p.id) as total_pacientes,
                COUNT(DISTINCT CASE WHEN t.fecha >= ? THEN p.id END) as pacientes_activos,
                COUNT(DISTINCT CASE WHEN p.fecha_alta >= ? THEN p.id END) as pacientes_nuevos
            FROM pacientes p
            LEFT JOIN turnos t ON p.id = t.paciente_id
            WHERE p.doctor_id = ?";
            
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $fecha_inicio, $fecha_inicio, $doctor_id);
    $stmt->execute();
    
    return $stmt->get_result()->fetch_assoc();
}

function obtenerEstadisticasGenerales($conn, $doctor_id) {
    return [
        'turnos' => obtenerEstadisticasTurnos($conn, $doctor_id, 'mes'),
        'obras_sociales' => obtenerEstadisticasObrasSociales($conn, $doctor_id),
        'pacientes' => obtenerEstadisticasPacientes($conn, $doctor_id, 'mes')
    ];
}

function getFechaInicio($periodo) {
    switch ($periodo) {
        case 'semana':
            return date('Y-m-d', strtotime('-1 week'));
        case 'mes':
            return date('Y-m-d', strtotime('-1 month'));
        case 'año':
            return date('Y-m-d', strtotime('-1 year'));
        default:
            return date('Y-m-d', strtotime('-1 month'));
    }
}

$conn->close(); 