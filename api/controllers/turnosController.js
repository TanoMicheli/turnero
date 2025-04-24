const { turnos } = require('../../js/data.js');

// Horarios disponibles por defecto
const HORARIOS_DISPONIBLES = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

// Duración por defecto de cada turno en minutos
const DURACION_TURNO = 30;

class TurnosController {
    // Obtener turnos disponibles para una fecha específica
    getTurnosDisponibles(fecha) {
        // Obtener todos los turnos existentes para esa fecha
        const turnosExistentes = turnos.filter(turno => turno.fecha === fecha);
        
        // Crear un conjunto de horarios ocupados
        const horariosOcupados = new Set(turnosExistentes.map(turno => turno.hora));
        
        // Filtrar los horarios disponibles
        return HORARIOS_DISPONIBLES.filter(horario => !horariosOcupados.has(horario));
    }

    // Verificar si un horario específico está disponible
    isHorarioDisponible(fecha, hora) {
        return !turnos.some(turno => 
            turno.fecha === fecha && 
            turno.hora === hora &&
            turno.estado !== 'cancelado'
        );
    }

    // Verificar si hay superposición de turnos
    haySuperposicion(fecha, hora, duracionMinutos = DURACION_TURNO) {
        const horaInicio = this.convertirAMinutos(hora);
        const horaFin = horaInicio + duracionMinutos;

        return turnos.some(turno => {
            if (turno.fecha !== fecha || turno.estado === 'cancelado') return false;

            const turnoInicio = this.convertirAMinutos(turno.hora);
            const turnoFin = turnoInicio + DURACION_TURNO;

            return (horaInicio < turnoFin && horaFin > turnoInicio);
        });
    }

    // Convertir hora formato "HH:mm" a minutos
    convertirAMinutos(hora) {
        const [horas, minutos] = hora.split(':').map(Number);
        return horas * 60 + minutos;
    }

    // Validar y crear un nuevo turno
    crearTurno(datosTurno) {
        const { fecha, hora } = datosTurno;

        // Verificar disponibilidad
        if (!this.isHorarioDisponible(fecha, hora)) {
            throw new Error('El horario seleccionado no está disponible');
        }

        // Verificar superposición
        if (this.haySuperposicion(fecha, hora)) {
            throw new Error('Existe superposición con otro turno');
        }

        // Crear el nuevo turno
        const nuevoTurno = {
            id: turnos.length + 1,
            ...datosTurno,
            estado: 'pendiente'
        };

        turnos.push(nuevoTurno);
        return nuevoTurno;
    }

    // Obtener próximos turnos disponibles
    getProximosTurnosDisponibles(diasSiguientes = 7) {
        const turnosDisponibles = [];
        const hoy = new Date();

        for (let i = 0; i < diasSiguientes; i++) {
            const fecha = new Date(hoy);
            fecha.setDate(hoy.getDate() + i);
            
            // Saltar fines de semana
            if (fecha.getDay() === 0 || fecha.getDay() === 6) continue;

            const fechaStr = fecha.toISOString().split('T')[0];
            const horariosDisponibles = this.getTurnosDisponibles(fechaStr);

            if (horariosDisponibles.length > 0) {
                turnosDisponibles.push({
                    fecha: fechaStr,
                    horarios: horariosDisponibles
                });
            }
        }

        return turnosDisponibles;
    }
}

module.exports = new TurnosController(); 