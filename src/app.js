const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Microservicio de productos funcionando'
    });
});

app.get('/health', (req, res) => {
    res.json({
        estado: 'OK'
    });
});

app.get('/productos', (req, res) => {
    const productos = [
        {
            id: 1,
            nombre: 'Notebook',
            precio: 599990
        },
        {
            id: 2,
            nombre: 'Mouse',
            precio: 19990
        },
        {
            id: 3,
            nombre: 'Teclado',
            precio: 29990
        }
    ];

    res.json(productos);
});

app.listen(PORT, () => {
    console.log(`Microservicio ejecutándose en http://localhost:${PORT}`);
});