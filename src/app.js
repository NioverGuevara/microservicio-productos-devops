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

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Microservicio de productos funcionando'
    });
});

// Estado del microservicio
app.get('/health', (req, res) => {
    res.json({
        estado: 'OK'
    });
});

// Obtener todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return res.status(404).json({
            mensaje: 'Producto no encontrado'
        });
    }

    res.json(producto);
});

// Crear un nuevo producto
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