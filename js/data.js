const obrasSociales = {
    'avalian': {
        nombre: 'Avalian',
        planes: ['210', '310', '410', '510'],
        cobertura: {
            'consulta': 100,
            'limpieza': 100,
            'radiografia': 80,
            'conducto': 70,
            'implante': 50
        }
    },
    'medicus': {
        nombre: 'Medicus',
        planes: ['Bronze', 'Silver', 'Gold', 'Platinum'],
        cobertura: {
            'consulta': 100,
            'limpieza': 100,
            'radiografia': 100,
            'conducto': 80,
            'implante': 60
        }
    },
    'swiss_medical': {
        nombre: 'Swiss Medical',
        planes: ['SMG20', 'SMG30', 'SMG40'],
        cobertura: {
            'consulta': 100,
            'limpieza': 100,
            'radiografia': 90,
            'conducto': 75,
            'implante': 55
        }
    },
    'sancor': {
        nombre: 'Sancor Salud',
        planes: ['2000', '3000', '4000', '5000']
    },
    'federada': {
        nombre: 'Federada',
        planes: ['Basic', 'Plus', 'Premium']
    },
    'osde': {
        nombre: 'OSDE',
        planes: ['210', '310', '410', '450', '510'],
        cobertura: {
            'consulta': 100,
            'limpieza': 100,
            'radiografia': 100,
            'conducto': 85,
            'implante': 70
        }
    },
    'galeno': {
        nombre: 'Galeno',
        planes: ['Plata', 'Oro', 'Platinum']
    },
    'prevencion': {
        nombre: 'Prevención Salud',
        planes: ['Classic', 'Superior', 'Excellence']
    },
    'omint': {
        nombre: 'Omint',
        planes: ['Blue', 'Classic', 'Premium']
    }
};

const tratamientos = {
    'consulta': {
        nombre: 'Consulta odontológica',
        duracion: 30,
        precio: 5000
    },
    'limpieza': {
        nombre: 'Limpieza dental',
        duracion: 60,
        precio: 8000
    },
    'radiografia': {
        nombre: 'Radiografía digital',
        duracion: 30,
        precio: 6000
    },
    'conducto': {
        nombre: 'Tratamiento de conducto',
        duracion: 90,
        precio: 25000
    },
    'implante': {
        nombre: 'Implante dental',
        duracion: 120,
        precio: 150000
    },
    'ortodoncia': {
        nombre: 'Ortodoncia',
        duracion: 45,
        precio: 15000
    },
    'blanqueamiento': {
        nombre: 'Blanqueamiento dental',
        duracion: 60,
        precio: 20000
    },
    'extraccion': {
        nombre: 'Extracción dental',
        duracion: 45,
        precio: 12000
    }
};

const pacientes = [
    {
        id: 1,
        nombre: "Juan Pérez",
        dni: "25456789",
        fechaNacimiento: "1980-05-15",
        telefono: "1122334455",
        email: "juan.perez@email.com",
        direccion: "Av. Rivadavia 1234, CABA",
        obraSocial: {
            nombre: "OSDE",
            plan: "310",
            numeroSocio: "12345678901"
        },
        historial: [
            {
                fecha: "2024-02-15",
                tratamiento: "limpieza",
                diagnostico: "Limpieza dental de rutina",
                notas: "Próxima limpieza en 6 meses"
            },
            {
                fecha: "2023-08-20",
                tratamiento: "conducto",
                diagnostico: "Tratamiento de conducto en molar superior derecho",
                notas: "Control en 3 meses"
            }
        ],
        ultimaVisita: "2024-02-15",
        proximoTurno: "2024-05-15"
    },
    {
        id: 2,
        nombre: "María González",
        dni: "27889456",
        fechaNacimiento: "1985-08-22",
        telefono: "1156789012",
        email: "maria.gonzalez@email.com",
        direccion: "Calle Corrientes 567, CABA",
        obraSocial: {
            nombre: "Swiss Medical",
            plan: "SMG30",
            numeroSocio: "98765432101"
        },
        historial: [
            {
                fecha: "2024-03-10",
                motivo: "Consulta ginecológica",
                diagnostico: "Control normal",
                receta: "Vitamina D",
                presion: "110/70",
                peso: "62.3",
                notas: "Próximo control en 6 meses"
            }
        ],
        ultimaVisita: "2024-03-10",
        proximoTurno: "2024-09-10"
    },
    {
        id: 3,
        nombre: "Carlos Rodríguez",
        dni: "30123456",
        fechaNacimiento: "1990-03-30",
        telefono: "1145678901",
        email: "carlos.rodriguez@email.com",
        direccion: "Av. Santa Fe 789, CABA",
        obraSocial: {
            nombre: "Galeno",
            plan: "Plata",
            numeroSocio: "45678901234"
        },
        historial: [
            {
                fecha: "2024-01-05",
                motivo: "Dolor de garganta",
                diagnostico: "Faringitis aguda",
                receta: "Amoxicilina 500mg",
                presion: "118/75",
                peso: "80.1",
                notas: "Control en 7 días"
            }
        ],
        ultimaVisita: "2024-01-05",
        proximoTurno: null
    },
    {
        id: 4,
        nombre: "Ana Martínez",
        dni: "28567890",
        fechaNacimiento: "1987-11-12",
        telefono: "1167890123",
        email: "ana.martinez@email.com",
        direccion: "Calle Libertador 1234, Vicente López",
        obraSocial: {
            nombre: "Medicus",
            plan: "Gold",
            numeroSocio: "34567890123"
        },
        historial: [
            {
                fecha: "2024-02-28",
                motivo: "Control cardiológico",
                diagnostico: "Hipertensión controlada",
                receta: "Losartán 50mg",
                presion: "130/85",
                peso: "65.7",
                notas: "Mantener medicación actual"
            }
        ],
        ultimaVisita: "2024-02-28",
        proximoTurno: "2024-05-28"
    },
    {
        id: 5,
        nombre: "Luis García",
        dni: "31234567",
        fechaNacimiento: "1992-07-25",
        telefono: "1178901234",
        email: "luis.garcia@email.com",
        direccion: "Av. Cabildo 567, CABA",
        obraSocial: null,
        historial: [
            {
                fecha: "2024-03-15",
                motivo: "Consulta traumatología",
                diagnostico: "Esguince de tobillo",
                receta: "Ibuprofeno 600mg",
                presion: "120/80",
                peso: "78.3",
                notas: "Reposo y fisioterapia"
            }
        ],
        ultimaVisita: "2024-03-15",
        proximoTurno: "2024-03-29"
    },
    {
        id: 6,
        nombre: "Laura Fernández",
        dni: "29345678",
        fechaNacimiento: "1989-04-18",
        telefono: "1189012345",
        email: "laura.fernandez@email.com",
        direccion: "Calle Belgrano 890, San Isidro",
        obraSocial: {
            nombre: "Omint",
            plan: "Premium",
            numeroSocio: "23456789012"
        },
        historial: [
            {
                fecha: "2024-02-10",
                motivo: "Control dermatológico",
                diagnostico: "Dermatitis seborreica",
                receta: "Ketoconazol tópico",
                presion: "115/75",
                peso: "58.9",
                notas: "Evitar productos grasos"
            }
        ],
        ultimaVisita: "2024-02-10",
        proximoTurno: "2024-04-10"
    },
    {
        id: 7,
        nombre: "Roberto López",
        dni: "26789012",
        fechaNacimiento: "1978-09-30",
        telefono: "1190123456",
        email: "roberto.lopez@email.com",
        direccion: "Av. Maipú 1234, Olivos",
        obraSocial: {
            nombre: "Sancor",
            plan: "4000",
            numeroSocio: "12345678902"
        },
        historial: [
            {
                fecha: "2024-03-05",
                motivo: "Control diabetológico",
                diagnostico: "Diabetes tipo 2 controlada",
                receta: "Metformina 850mg",
                presion: "125/82",
                peso: "82.4",
                notas: "Mantener dieta y ejercicio"
            }
        ],
        ultimaVisita: "2024-03-05",
        proximoTurno: "2024-06-05"
    },
    {
        id: 8,
        nombre: "Patricia Sánchez",
        dni: "28901234",
        fechaNacimiento: "1988-12-15",
        telefono: "1123456789",
        email: "patricia.sanchez@email.com",
        direccion: "Calle French 567, CABA",
        obraSocial: {
            nombre: "Avalian",
            plan: "410",
            numeroSocio: "34567890124"
        },
        historial: [
            {
                fecha: "2024-01-20",
                motivo: "Control oftalmológico",
                diagnostico: "Miopía leve",
                receta: "Nueva graduación lentes",
                presion: "118/78",
                peso: "63.5",
                notas: "Control anual"
            }
        ],
        ultimaVisita: "2024-01-20",
        proximoTurno: "2025-01-20"
    },
    {
        id: 9,
        nombre: "Miguel Torres",
        dni: "32345678",
        fechaNacimiento: "1993-06-08",
        telefono: "1134567890",
        email: "miguel.torres@email.com",
        direccion: "Av. Del Libertador 2345, Vicente López",
        obraSocial: {
            nombre: "Federada",
            plan: "Premium",
            numeroSocio: "45678901235"
        },
        historial: [
            {
                fecha: "2024-02-25",
                motivo: "Consulta gastroenterología",
                diagnostico: "Gastritis",
                receta: "Omeprazol 20mg",
                presion: "122/80",
                peso: "75.8",
                notas: "Dieta blanda"
            }
        ],
        ultimaVisita: "2024-02-25",
        proximoTurno: "2024-03-25"
    },
    {
        id: 10,
        nombre: "Silvia Romero",
        dni: "27123456",
        fechaNacimiento: "1983-02-14",
        telefono: "1145678902",
        email: "silvia.romero@email.com",
        direccion: "Calle Paraná 789, CABA",
        obraSocial: {
            nombre: "Prevencion",
            plan: "Excellence",
            numeroSocio: "56789012345"
        },
        historial: [
            {
                fecha: "2024-03-01",
                motivo: "Control endocrinológico",
                diagnostico: "Hipotiroidismo",
                receta: "Levotiroxina 75mcg",
                presion: "115/75",
                peso: "68.2",
                notas: "Análisis de control en 3 meses"
            }
        ],
        ultimaVisita: "2024-03-01",
        proximoTurno: "2024-06-01"
    }
];


const turnos = [
    {
        id: 1,
        pacienteId: 1,
        fecha: '2024-04-25',
        hora: '09:00',
        tratamiento: 'limpieza',
        estado: 'pendiente',
        paciente: {
            nombre: 'Juan Pérez',
            telefono: '1122334455',
            email: 'juan.perez@email.com'
        }
    },
    {
        id: 2,
        pacienteId: 2,
        fecha: '2024-04-25',
        hora: '10:00',
        motivo: 'Consulta de seguimiento',
        estado: 'confirmado',
        paciente: {
            nombre: 'María González',
            telefono: '1156789012',
            email: 'maria.gonzalez@email.com'
        }
    },
    {
        id: 3,
        pacienteId: 3,
        fecha: '2024-04-26',
        hora: '11:00',
        motivo: 'Primera consulta',
        estado: 'pendiente',
        paciente: {
            nombre: 'Carlos Rodríguez',
            telefono: '1145678901',
            email: 'carlos.rodriguez@email.com'
        }
    }
];

function getPaciente(id) {
    return pacientes.find(p => p.id === id);
}

function getPacientePorDNI(dni) {
    return pacientes.find(p => p.dni === dni);
}

function buscarPacientes(termino) {
    termino = termino.toLowerCase();
    return pacientes.filter(p => 
        p.nombre.toLowerCase().includes(termino) ||
        p.dni.includes(termino) ||
        p.email.toLowerCase().includes(termino)
    );
}

function getTurnosPaciente(pacienteId) {
    return turnos.filter(t => t.pacienteId === pacienteId);
}

function getHistorialPaciente(pacienteId) {
    const paciente = getPaciente(pacienteId);
    return paciente ? paciente.historial : [];
}

function obtenerDatosPaciente(pacienteId) {
    const paciente = pacientes.find(p => p.id === pacienteId);
    if (!paciente) return null;
    return {
        nombre: paciente.nombre,
        telefono: paciente.telefono,
        email: paciente.email
    };
}

function agregarTurno(turno) {
    const datosPaciente = obtenerDatosPaciente(turno.pacienteId);
    const nuevoTurno = {
        id: turnos.length + 1,
        ...turno,
        estado: 'pendiente',
        paciente: datosPaciente
    };
    turnos.push(nuevoTurno);
    return nuevoTurno;
}

function obtenerTodosTurnos() {
    return turnos;
}

function obtenerTurnosPorFecha(fecha) {
    return turnos.filter(t => t.fecha === fecha);
}

function obtenerTurnosPendientes() {
    return turnos.filter(t => t.estado === 'pendiente');
}

function actualizarEstadoTurno(turnoId, nuevoEstado) {
    const turno = turnos.find(t => t.id === turnoId);
    if (turno) {
        turno.estado = nuevoEstado;
        
        if (nuevoEstado === 'completado') {
            const paciente = getPaciente(turno.pacienteId);
            if (paciente) {
                paciente.ultimaVisita = turno.fecha;
            }
        }
        
        return true;
    }
    return false;
}

function agregarPaciente(paciente) {
    if (getPacientePorDNI(paciente.dni)) {
        throw new Error('Ya existe un paciente con ese DNI');
    }
    
    paciente.id = pacientes.length + 1;
    paciente.historial = [];
    paciente.ultimaVisita = null;
    paciente.proximoTurno = null;
    
    if (paciente.obraSocial) {
        const os = obrasSociales[paciente.obraSocial.nombre.toLowerCase().replace(' ', '_')];
        if (os) {
            paciente.obraSocial.nombre = os.nombre;
        }
    }
    
    pacientes.push(paciente);
    return paciente;
}

function actualizarPaciente(id, datosPaciente) {
    const index = pacientes.findIndex(p => p.id === id);
    if (index === -1) {
        throw new Error('Paciente no encontrado');
    }
    
    if (datosPaciente.dni && datosPaciente.dni !== pacientes[index].dni) {
        if (getPacientePorDNI(datosPaciente.dni)) {
            throw new Error('Ya existe un paciente con ese DNI');
        }
    }
    
    const historialExistente = pacientes[index].historial;
    pacientes[index] = {
        ...pacientes[index],
        ...datosPaciente,
        id: pacientes[index].id,
        historial: historialExistente
    };
    
    return pacientes[index];
}

function agregarHistorialPaciente(pacienteId, entrada) {
    const paciente = getPaciente(pacienteId);
    if (paciente) {
        entrada.fecha = entrada.fecha || new Date().toISOString().split('T')[0];
        paciente.historial.unshift(entrada);
        paciente.ultimaVisita = entrada.fecha;
        return true;
    }
    return false;
}

function getPacientesRecientes(limite = 5) {
    return [...pacientes]
        .sort((a, b) => new Date(b.ultimaVisita) - new Date(a.ultimaVisita))
        .slice(0, limite);
}

function getPacientesProximosTurnos(limite = 5) {
    return [...pacientes]
        .filter(p => p.proximoTurno)
        .sort((a, b) => new Date(a.proximoTurno) - new Date(b.proximoTurno))
        .slice(0, limite);
}

function getObrasSociales() {
    return Object.values(obrasSociales);
}

function getPlanesObraSocial(nombreOS) {
    const os = obrasSociales[nombreOS.toLowerCase().replace(' ', '_')];
    return os ? os.planes : [];
}

function calcularCostoTratamiento(tratamiento, obraSocial = null, plan = null) {
    const costoBase = tratamientos[tratamiento]?.precio || 0;
    
    if (!obraSocial || !plan) return costoBase;
    
    const os = obrasSociales[obraSocial.toLowerCase().replace(' ', '_')];
    if (!os || !os.cobertura[tratamiento]) return costoBase;
    
    const cobertura = os.cobertura[tratamiento];
    return costoBase * (1 - cobertura/100);
}

function getTratamientosDisponibles() {
    return Object.entries(tratamientos).map(([id, info]) => ({
        id,
        ...info
    }));
}

function getEstadisticasClinica() {
    const hoy = new Date().toISOString().split('T')[0];
    const unMesAtras = new Date();
    unMesAtras.setMonth(unMesAtras.getMonth() - 1);
    const fechaUnMesAtras = unMesAtras.toISOString().split('T')[0];

    return {
        pacientes: {
            total: pacientes.length,
            nuevosUltimoMes: pacientes.filter(p => 
                p.ultimaVisita >= fechaUnMesAtras && p.ultimaVisita <= hoy
            ).length,
            distribucionEdades: calcularDistribucionEdades(),
            distribucionTratamientos: calcularDistribucionTratamientos()
        },
        turnos: {
            pendientes: turnos.filter(t => t.estado === 'pendiente').length,
            completados: turnos.filter(t => t.estado === 'completado').length,
            cancelados: turnos.filter(t => t.estado === 'cancelado').length,
            distribucionHoraria: calcularDistribucionHoraria()
        },
        finanzas: {
            facturacionMensual: calcularFacturacionMensual(),
            distribucionObrasSociales: calcularDistribucionObrasSociales()
        }
    };
}

function calcularDistribucionEdades() {
    const rangos = {
        '0-18': 0,
        '19-30': 0,
        '31-50': 0,
        '51-70': 0,
        '71+': 0
    };
    
    pacientes.forEach(p => {
        const edad = calcularEdad(p.fechaNacimiento);
        if (edad <= 18) rangos['0-18']++;
        else if (edad <= 30) rangos['19-30']++;
        else if (edad <= 50) rangos['31-50']++;
        else if (edad <= 70) rangos['51-70']++;
        else rangos['71+']++;
    });
    
    return rangos;
}

function calcularDistribucionTratamientos() {
    return turnos.reduce((acc, t) => {
        if (t.tratamiento) {
            acc[t.tratamiento] = (acc[t.tratamiento] || 0) + 1;
        }
        return acc;
    }, {});
}

function calcularDistribucionHoraria() {
    return turnos.reduce((acc, t) => {
        const hora = t.hora.split(':')[0];
        acc[hora] = (acc[hora] || 0) + 1;
        return acc;
    }, {});
}

function calcularFacturacionMensual() {
    const hoy = new Date();
    const inicioMes = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    
    return turnos
        .filter(t => 
            t.estado === 'completado' && 
            new Date(t.fecha) >= inicioMes
        )
        .reduce((total, t) => {
            const paciente = getPaciente(t.pacienteId);
            return total + calcularCostoTratamiento(
                t.tratamiento,
                paciente?.obraSocial?.nombre,
                paciente?.obraSocial?.plan
            );
        }, 0);
}

function calcularDistribucionObrasSociales() {
    return pacientes.reduce((acc, p) => {
        if (p.obraSocial) {
            acc[p.obraSocial.nombre] = (acc[p.obraSocial.nombre] || 0) + 1;
        }
        return acc;
    }, {});
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

if (typeof window !== 'undefined') {
    window.obrasSociales = obrasSociales;
    window.tratamientos = tratamientos;
    window.getPaciente = getPaciente;
    window.getPacientePorDNI = getPacientePorDNI;
    window.buscarPacientes = buscarPacientes;
    window.getTurnosPaciente = getTurnosPaciente;
    window.getHistorialPaciente = getHistorialPaciente;
    window.agregarTurno = agregarTurno;
    window.actualizarEstadoTurno = actualizarEstadoTurno;
    window.agregarPaciente = agregarPaciente;
    window.actualizarPaciente = actualizarPaciente;
    window.agregarHistorialPaciente = agregarHistorialPaciente;
    window.getPacientesRecientes = getPacientesRecientes;
    window.getPacientesProximosTurnos = getPacientesProximosTurnos;
    window.getObrasSociales = getObrasSociales;
    window.getPlanesObraSocial = getPlanesObraSocial;
    window.calcularCostoTratamiento = calcularCostoTratamiento;
    window.getTratamientosDisponibles = getTratamientosDisponibles;
    window.getEstadisticasClinica = getEstadisticasClinica;
    window.calcularEdad = calcularEdad;
} else {
    module.exports = {
        obrasSociales,
        tratamientos,
        getPaciente,
        getPacientePorDNI,
        buscarPacientes,
        getTurnosPaciente,
        getHistorialPaciente,
        agregarTurno,
        actualizarEstadoTurno,
        agregarPaciente,
        actualizarPaciente,
        agregarHistorialPaciente,
        getPacientesRecientes,
        getPacientesProximosTurnos,
        getObrasSociales,
        getPlanesObraSocial,
        calcularCostoTratamiento,
        getTratamientosDisponibles,
        getEstadisticasClinica,
        calcularEdad
    };
} 