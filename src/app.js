const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let productos = [
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
    res.json(productos);
});

app.post('/productos', (req, res) => {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };

    productos.push(nuevoProducto);

    res.status(201).json(nuevoProducto);
});

app.listen(PORT, () => {
    console.log(`Microservicio ejecutándose en http://localhost:${PORT}`);
});