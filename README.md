# Microservicio de Productos - Ingeniería DevOps

## Descripción

Este proyecto corresponde a un microservicio de productos desarrollado con Node.js y Express.

El objetivo del proyecto es aplicar prácticas de Ingeniería DevOps utilizando Git, GitHub, estrategias de ramificación, Pull Requests y GitHub Actions.

## Tecnologías utilizadas

- Node.js
- Express
- Git
- GitHub
- GitHub Actions

## Funcionalidades del microservicio

El microservicio permite:

- Consultar el estado del servicio.
- Obtener todos los productos.
- Buscar un producto mediante su ID.
- Crear nuevos productos.
- Validar datos al momento de agregar productos.

## Endpoints

### Ruta principal

GET /

Permite comprobar que el microservicio está funcionando.

### Health Check

GET /health

Permite verificar el estado del microservicio.

### Obtener productos

GET /productos

Retorna la lista completa de productos.

### Buscar producto

GET /productos/:id

Permite buscar un producto mediante su identificador.

### Crear producto

POST /productos

Permite agregar un nuevo producto.

Ejemplo:

{
  "nombre": "Monitor",
  "precio": 149990
}

## Estrategia de ramificación

Para este proyecto se utiliza una estrategia basada en GitFlow.

Se seleccionó GitFlow porque permite separar el desarrollo estable de las nuevas funcionalidades y correcciones.

Las ramas utilizadas son:

- `main`: contiene la versión estable del proyecto.
- `develop`: contiene los cambios que se encuentran en desarrollo.
- `feature/<nombre>`: se utiliza para desarrollar nuevas funcionalidades.
- `hotfix/<nombre>`: se utiliza para realizar correcciones importantes.

## Flujo de trabajo

Para implementar una nueva funcionalidad se crea una rama feature a partir de develop.

Después de finalizar los cambios se realiza un commit y se envían los cambios a GitHub.

Posteriormente se utiliza un Pull Request para integrar los cambios.

Para las correcciones urgentes se utiliza una rama hotfix.

## Convención de nombres de ramas

Ejemplos:

- `feature/agregar-producto`
- `feature/buscar-producto`
- `hotfix/validar-producto`

Los nombres deben escribirse en minúsculas y utilizar guiones para separar palabras.

## Convención de commits

Los commits deben ser claros y describir el cambio realizado.

Ejemplos:

- `feat: agregar endpoint para crear productos`
- `feat: agregar búsqueda de productos por id`
- `fix: validar datos obligatorios del producto`
- `chore: configurar GitHub Actions`

## Pull Requests

Los cambios realizados en las ramas feature deben integrarse mediante Pull Requests.

Antes de realizar un merge se debe revisar:

- Que el código funcione correctamente.
- Que no existan errores.
- Que los nombres de variables sean claros.
- Que GitHub Actions finalice correctamente.

## Integración Continua

El proyecto utiliza GitHub Actions para automatizar la validación del código.

El workflow se encuentra en:

`.github/workflows/ci.yml`

La automatización se ejecuta:

- Con cada push realizado a la rama `develop`.
- Con cada Pull Request dirigido hacia la rama `main`.

El workflow realiza las siguientes tareas:

1. Descarga el repositorio.
2. Configura Node.js.
3. Instala las dependencias.
4. Verifica la sintaxis del archivo `src/app.js`.

## Buenas prácticas

Durante el desarrollo del proyecto se aplican las siguientes buenas prácticas:

- Utilizar nombres descriptivos para las ramas.
- Realizar commits pequeños y claros.
- No trabajar directamente sobre `main`.
- Utilizar Pull Requests para integrar cambios.
- Revisar el código antes de realizar merge.
- Mantener documentado el repositorio.
- Utilizar automatización mediante GitHub Actions.

## Ejecución del proyecto

Primero instalar las dependencias:

npm install

Después ejecutar:

node src/app.js

El servidor quedará disponible en:

http://localhost:3000