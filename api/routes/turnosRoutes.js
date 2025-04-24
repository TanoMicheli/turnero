const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnosController');

router.get('/disponibles/:fecha', (req, res) => {
    try {
        const turnosDisponibles = turnosController.getTurnosDisponibles(req.params.fecha);
        res.json(turnosDisponibles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/proximos-disponibles', (req, res) => {
    try {
        const diasSiguientes = req.query.dias ? parseInt(req.query.dias) : 7;
        const turnosDisponibles = turnosController.getProximosTurnosDisponibles(diasSiguientes);
        res.json(turnosDisponibles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/verificar-disponibilidad', (req, res) => {
    try {
        const { fecha, hora } = req.query;
        if (!fecha || !hora) {
            return res.status(400).json({ error: 'Fecha y hora son requeridas' });
        }
        
        const disponible = turnosController.isHorarioDisponible(fecha, hora);
        res.json({ disponible });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/crear', (req, res) => {
    try {
        const nuevoTurno = turnosController.crearTurno(req.body);
        res.status(201).json(nuevoTurno);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router; 