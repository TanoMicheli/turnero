-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS centro_medico;
USE centro_medico;

-- Tabla de Especialidades
CREATE TABLE especialidades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Doctores
CREATE TABLE doctores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    matricula VARCHAR(50) UNIQUE NOT NULL,
    especialidad_id INT,
    telefono VARCHAR(20),
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (especialidad_id) REFERENCES especialidades(id)
);

-- Tabla de Obras Sociales
CREATE TABLE obras_sociales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    codigo VARCHAR(50) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Planes de Obra Social
CREATE TABLE planes_obra_social (
    id INT PRIMARY KEY AUTO_INCREMENT,
    obra_social_id INT,
    nombre VARCHAR(50) NOT NULL,
    codigo VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (obra_social_id) REFERENCES obras_sociales(id)
);

-- Tabla de Pacientes
CREATE TABLE pacientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    dni VARCHAR(20) UNIQUE NOT NULL,
    fecha_nacimiento DATE,
    telefono VARCHAR(20),
    email VARCHAR(100),
    direccion TEXT,
    obra_social_id INT,
    plan_id INT,
    numero_socio VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (obra_social_id) REFERENCES obras_sociales(id),
    FOREIGN KEY (plan_id) REFERENCES planes_obra_social(id)
);

-- Tabla de Historias Clínicas
CREATE TABLE historias_clinicas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    paciente_id INT,
    doctor_id INT,
    fecha DATETIME NOT NULL,
    motivo TEXT NOT NULL,
    diagnostico TEXT,
    receta TEXT,
    presion VARCHAR(20),
    peso DECIMAL(5,2),
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    FOREIGN KEY (doctor_id) REFERENCES doctores(id)
);

-- Tabla de Turnos
CREATE TABLE turnos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    paciente_id INT,
    doctor_id INT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    motivo TEXT,
    estado ENUM('pendiente', 'confirmado', 'cancelado', 'completado') DEFAULT 'pendiente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
    FOREIGN KEY (doctor_id) REFERENCES doctores(id)
);

-- Insertar algunas especialidades básicas
INSERT INTO especialidades (nombre, descripcion) VALUES
('Cardiología', 'Especialidad en enfermedades del corazón'),
('Traumatología', 'Especialidad en lesiones del sistema músculo-esquelético'),
('Dermatología', 'Especialidad en enfermedades de la piel'),
('Ginecología', 'Especialidad en salud femenina'),
('Pediatría', 'Especialidad en salud infantil'),
('Clínica Médica', 'Medicina general y familiar');

-- Insertar obras sociales comunes
INSERT INTO obras_sociales (nombre, codigo) VALUES
('OSDE', 'OSDE'),
('Swiss Medical', 'SWISS'),
('Medicus', 'MED'),
('Galeno', 'GAL'),
('Omint', 'OMI'),
('Avalian', 'AVA'),
('Sancor', 'SAN'),
('Federada Salud', 'FED'),
('Prevención Salud', 'PREV');

-- Insertar planes para OSDE
INSERT INTO planes_obra_social (obra_social_id, nombre, codigo) VALUES
(1, '210', 'OSDE210'),
(1, '310', 'OSDE310'),
(1, '410', 'OSDE410'),
(1, '450', 'OSDE450'),
(1, '510', 'OSDE510'); 