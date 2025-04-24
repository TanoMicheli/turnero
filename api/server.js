const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const turnosRoutes = require('./routes/turnosRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// Rutas de la API
app.use('/api/turnos', turnosRoutes);

// Rutas básicas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin-login.html'));
});

app.get('/admin-panel', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin-panel.html'));
});

// Ruta para la página de prueba
app.get('/test-turnos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'test-turnos.html'));
});

// Manejo de errores mejorado
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`El puerto ${PORT} está en uso. Intentando con el puerto ${PORT + 1}...`);
        server.close();
        app.listen(PORT + 1, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT + 1}`);
        });
    } else {
        console.error('Error al iniciar el servidor:', err);
    }
}); 