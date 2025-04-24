<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'centro_medico');

function getDBConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
    
    $conn->set_charset("utf8mb4");
    
    return $conn;
}

function sanitizeInput($input) {
    $conn = getDBConnection();
    if(is_array($input)) {
        return array_map(function($item) use ($conn) {
            return $conn->real_escape_string(trim($item));
        }, $input);
    }
    return $conn->real_escape_string(trim($input));
}

function handleError($message) {
    header('Content-Type: application/json');
    http_response_code(400);
    echo json_encode(['error' => $message]);
    exit;
} 