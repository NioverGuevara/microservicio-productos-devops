# Microservicio de Productos - Ingeniería DevOps

## Descripción

Este repositorio contiene un microservicio de productos desarrollado con Node.js y Express.

El proyecto se utiliza como base para aplicar prácticas de Ingeniería DevOps, incluyendo control de versiones con Git, trabajo colaborativo mediante GitHub, estrategia de ramificación, Pull Requests e integración continua mediante GitHub Actions.

El objetivo principal es implementar un flujo de trabajo que permita mantener la trazabilidad de los cambios, separar el desarrollo de la versión estable y automatizar validaciones mediante un pipeline de integración continua.

---

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- Git
- GitHub
- GitHub Actions
- Visual Studio Code
- PowerShell

---

## Estructura del proyecto

La estructura principal del repositorio es la siguiente:

```text
microservicio-productos-devops/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── src/
│   └── app.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

### Descripción de los archivos principales

- `.github/workflows/ci.yml`: contiene la configuración del workflow de GitHub Actions.
- `src/app.js`: contiene la implementación del microservicio y sus endpoints.
- `.gitignore`: evita versionar archivos y carpetas innecesarias.
- `package.json`: contiene la configuración y dependencias del proyecto.
- `package-lock.json`: mantiene las versiones exactas de las dependencias.
- `README.md`: contiene la documentación del proyecto y del flujo DevOps.

---

## Funcionalidades del microservicio

El microservicio cuenta con diferentes endpoints para gestionar productos.

### GET /

Permite comprobar que el microservicio se encuentra funcionando.

Ejemplo:

```text
http://localhost:3000/
```

### GET /health

Permite consultar el estado del microservicio.

Ejemplo:

```text
http://localhost:3000/health
```

### GET /productos

Retorna la lista completa de productos registrados.

Ejemplo:

```text
http://localhost:3000/productos
```

### GET /productos/:id

Permite buscar un producto mediante su identificador.

Ejemplo:

```text
http://localhost:3000/productos/1
```

Si el producto existe, se retorna su información.

Ejemplo:

```json
{
    "id": 1,
    "nombre": "Notebook",
    "precio": 599990
}
```

Si el producto no existe, el microservicio retorna un código HTTP 404 y un mensaje indicando el problema.

Ejemplo:

```json
{
    "mensaje": "Producto no encontrado"
}
```

### POST /productos

Permite registrar un nuevo producto.

Para crear un producto se deben enviar los campos:

- `nombre`
- `precio`

El microservicio valida que ambos datos sean enviados.

Si falta alguno de los campos obligatorios, se retorna un código HTTP 400:

```json
{
    "mensaje": "Nombre y precio son obligatorios"
}
```

---

# Estrategia de ramificación

Para el desarrollo del proyecto se implementó una estrategia basada en **GitFlow**.

La utilización de esta estrategia permite separar el código estable de los cambios que se encuentran en desarrollo, facilitando el trabajo colaborativo, el control de versiones y la trazabilidad.

Las ramas principales utilizadas son:

### main

Contiene la versión estable del proyecto.

Los cambios no se desarrollan directamente sobre esta rama. Las modificaciones deben llegar mediante Pull Requests.

### develop

Es la rama principal de integración.

Las nuevas funcionalidades desarrolladas mediante ramas `feature` son integradas primero en `develop`.

### feature/\<nombre\>

Estas ramas se utilizan para desarrollar nuevas funcionalidades de manera aislada.

Durante el proyecto se utilizaron:

```text
feature/agregar-producto
feature/buscar-producto
feature/github-actions
feature/documentacion-readme
```

### hotfix/\<nombre\>

Estas ramas se utilizan para realizar correcciones específicas.

Durante el proyecto se utilizó:

```text
hotfix/validar-producto
```

---

# Justificación de la estrategia utilizada

Se seleccionó una estrategia basada en GitFlow porque permite separar claramente los diferentes estados del proyecto.

`main` representa la versión estable, mientras que `develop` permite integrar y revisar los cambios antes de incorporarlos a la versión principal.

Las ramas `feature` permiten desarrollar funcionalidades sin afectar directamente el código estable.

Las ramas `hotfix` permiten identificar y solucionar errores de forma separada.

Esta estructura facilita:

- El trabajo colaborativo.
- La trazabilidad de los cambios.
- La revisión mediante Pull Requests.
- La separación entre desarrollo y versión estable.
- La identificación del propósito de cada rama.
- La reducción del riesgo de modificar directamente la versión principal.

---

# Flujo de trabajo

El flujo utilizado para desarrollar nuevas funcionalidades es:

```text
develop
   │
   ├── feature/agregar-producto
   │          │
   │          └── Pull Request
   │                    ↓
   ├──────────────── develop
   │
   ├── feature/buscar-producto
   │          │
   │          └── Pull Request
   │                    ↓
   └──────────────── develop
                         │
                         └── Pull Request
                                   ↓
                                  main
```

De manera resumida:

```text
feature/* → develop → main
```

Para las correcciones se utilizan ramas:

```text
hotfix/* → main
```

Los cambios relevantes son integrados mediante Pull Requests para mantener registro de las modificaciones y revisar posibles conflictos antes de realizar un merge.

---

# Cambios realizados mediante ramas

## Feature 1 - Agregar productos

Rama utilizada:

```text
feature/agregar-producto
```

Se implementó el endpoint:

```text
POST /productos
```

Posteriormente la funcionalidad fue integrada a `develop` mediante un Pull Request.

---

## Feature 2 - Buscar producto por ID

Rama utilizada:

```text
feature/buscar-producto
```

Se implementó:

```text
GET /productos/:id
```

Esta funcionalidad permite obtener un producto específico utilizando su identificador.

También se agregó el manejo del error HTTP 404 cuando el producto solicitado no existe.

Posteriormente se realizó un Pull Request hacia `develop`.

---

## Hotfix - Validación de productos

Rama utilizada:

```text
hotfix/validar-producto
```

Se agregó una validación al endpoint de creación de productos para evitar registrar productos sin nombre o precio.

Cuando faltan datos obligatorios, el microservicio retorna un código HTTP 400.

El cambio fue integrado mediante Pull Request.

---

# Convención para nombres de ramas

Los nombres de las ramas deben indicar claramente el propósito del cambio.

Se utilizan nombres en minúsculas y palabras separadas mediante guiones.

Formato para funcionalidades:

```text
feature/nombre-funcionalidad
```

Ejemplos:

```text
feature/agregar-producto
feature/buscar-producto
feature/github-actions
feature/documentacion-readme
```

Formato para correcciones:

```text
hotfix/nombre-correccion
```

Ejemplo:

```text
hotfix/validar-producto
```

Esta convención permite identificar rápidamente el propósito de cada rama.

---

# Convención de commits

Para mantener un historial comprensible se utilizaron mensajes basados en **Conventional Commits**.

Los principales prefijos utilizados fueron:

### feat

Indica la incorporación de una nueva funcionalidad.

Ejemplo:

```text
feat: agregar creacion de productos
```

### fix

Indica la corrección de un problema.

Ejemplo:

```text
fix: validar datos obligatorios del producto
```

### ci

Indica cambios relacionados con integración continua.

Ejemplo:

```text
ci: agregar workflow de GitHub Actions
```

### docs

Se utiliza para cambios relacionados con documentación.

Ejemplo:

```text
docs: agregar documentacion del proyecto
```

### chore

Se utiliza para tareas de mantenimiento, configuración o estructura.

Ejemplo:

```text
chore: crear estructura inicial del microservicio
```

Otros commits utilizados durante el desarrollo incluyen:

```text
feat: agregar busqueda de producto por id
ci: agregar workflow de GitHub Actions
```

---

# Pull Requests y estrategia de revisión

Los cambios importantes del proyecto se integran mediante Pull Requests.

Para las funcionalidades se utiliza principalmente:

```text
feature/* → develop
```

Posteriormente, cuando los cambios se encuentran integrados:

```text
develop → main
```

Antes de realizar un merge se revisan los siguientes aspectos:

1. Que la rama de origen sea correcta.
2. Que la rama de destino sea correcta.
3. Que no existan conflictos.
4. Que el código corresponda al objetivo de la rama.
5. Que los commits tengan mensajes descriptivos.
6. Que los archivos modificados correspondan al cambio realizado.
7. Que las validaciones automáticas sean revisadas cuando se encuentren disponibles.

Este procedimiento permite mantener la trazabilidad y disminuir la posibilidad de integrar cambios incorrectos.

---

# Integración continua con GitHub Actions

El proyecto incluye un workflow de integración continua utilizando **GitHub Actions**.

El archivo se encuentra ubicado en:

```text
.github/workflows/ci.yml
```

El workflow está configurado para activarse automáticamente en los siguientes escenarios:

### Push hacia develop

```yaml
push:
  branches:
    - develop
```

### Pull Request hacia main

```yaml
pull_request:
  branches:
    - main
```

De esta manera, GitHub puede detectar automáticamente cambios realizados durante el proceso de integración.

---

# Etapas del workflow

El workflow realiza las siguientes tareas:

## 1. Descargar el repositorio

Se utiliza:

```yaml
uses: actions/checkout@v4
```

Esto permite que el runner de GitHub Actions tenga acceso al código fuente.

## 2. Configurar Node.js

Se utiliza:

```yaml
uses: actions/setup-node@v4
```

El entorno queda preparado para ejecutar el proyecto Node.js.

## 3. Instalar dependencias

Se ejecuta:

```bash
npm ci
```

Este comando instala las dependencias utilizando las versiones registradas en `package-lock.json`.

## 4. Verificar sintaxis

Se ejecuta:

```bash
node --check src/app.js
```

Este comando permite detectar errores de sintaxis en el archivo principal del microservicio.

---

# Buenas prácticas utilizadas

Durante el desarrollo se aplicaron diferentes buenas prácticas de control de versiones.

- No realizar cambios directamente sobre `main`.
- Utilizar ramas específicas para nuevas funcionalidades.
- Utilizar ramas específicas para correcciones.
- Mantener nombres de ramas descriptivos.
- Utilizar mensajes de commits claros.
- Utilizar Pull Requests para integrar cambios.
- Revisar conflictos antes de realizar merges.
- Mantener sincronizadas las ramas locales y remotas.
- Revisar `git status` antes de realizar commits.
- Mantener actualizada la documentación.
- No versionar dependencias instaladas localmente.
- Utilizar `.gitignore`.
- Mantener una estructura ordenada de carpetas.
- Utilizar GitHub Actions para automatizar validaciones.

---

# Control de versiones y trazabilidad

Git permite registrar todas las modificaciones realizadas durante el desarrollo.

Entre los comandos utilizados se encuentran:

```bash
git init
git status
git add
git commit
git branch
git checkout
git checkout -b
git push
git pull
git log
```

El historial de Git permite identificar:

- Qué cambio se realizó.
- En qué rama fue desarrollado.
- Qué commit lo registró.
- Cuándo fue integrado.
- Mediante qué Pull Request llegó a otra rama.

---

# Problemas encontrados y soluciones aplicadas

Durante el desarrollo de la evaluación se presentaron diferentes problemas relacionados con el entorno, Git, Express y GitHub Actions.

A continuación se documentan los principales inconvenientes encontrados y las soluciones aplicadas.

## 1. PowerShell bloqueaba la ejecución de npm

Durante la configuración inicial, PowerShell presentó problemas para ejecutar `npm` debido a las políticas de ejecución de scripts de Windows.

Para permitir la ejecución se utilizó:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Posteriormente se verificó la instalación mediante:

```powershell
node --version
npm --version
git --version
```

Esto permitió continuar con la instalación y utilización de las dependencias del proyecto.

---

## 2. node_modules aparecía en Git

Inicialmente la carpeta:

```text
node_modules/
```

aparecía entre los archivos no rastreados al ejecutar:

```bash
git status
```

Se revisó la configuración de `.gitignore` y su ubicación dentro del proyecto.

El archivo `.gitignore` debía encontrarse en la raíz:

```text
microservicio-productos-devops/
├── src/
│   └── app.js
├── .gitignore
├── package.json
└── package-lock.json
```

Dentro de `.gitignore` se configuró:

```text
node_modules/
.env
```

Posteriormente se utilizaron comandos como:

```bash
git check-ignore -v node_modules
git status
```

para comprobar que la carpeta ya no fuera considerada para el control de versiones.

---

## 3. Error al implementar la búsqueda de productos

Durante la implementación inicial de:

```text
GET /productos/:id
```

la nueva ruta fue ubicada incorrectamente dentro de la definición de:

```text
GET /productos
```

Esto impedía que Express registrara el endpoint de la forma esperada.

La estructura fue corregida dejando ambas rutas de forma independiente:

```javascript
app.get('/productos', (req, res) => {
    res.json(productos);
});

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
```

---

## 4. Error "Cannot GET /productos/1"

Después de agregar la ruta de búsqueda, al ingresar a:

```text
http://localhost:3000/productos/1
```

el navegador mostró:

```text
Cannot GET /productos/1
```

Se revisó el archivo `app.js` y la ruta se encontraba correctamente definida.

El problema estaba relacionado con una instancia anterior de Node.js que continuaba ejecutándose con una versión previa del código.

Se detuvo el proceso:

```powershell
taskkill /F /IM node.exe
```

y posteriormente se inició nuevamente el microservicio:

```powershell
node src/app.js
```

Después del reinicio, el endpoint funcionó correctamente.

También se comprobó el comportamiento con un producto inexistente:

```text
http://localhost:3000/productos/99
```

obteniendo:

```json
{
    "mensaje": "Producto no encontrado"
}
```

---

## 5. Pull Requests dirigidos inicialmente hacia main

Durante la creación de algunas ramas `feature`, GitHub seleccionaba inicialmente:

```text
base: main
```

Sin embargo, según el flujo definido para el proyecto, las funcionalidades debían integrarse primero en:

```text
develop
```

Por lo tanto, antes de crear los Pull Requests se corrigió la configuración:

```text
base: develop
compare: feature/<nombre>
```

Esto permitió mantener el flujo:

```text
feature/* → develop → main
```

---

## 6. ci.yml no había sido creado físicamente

Durante la configuración inicial de GitHub Actions, Visual Studio Code mostraba la estructura:

```text
.github/workflows
```

pero Git no detectaba el archivo `ci.yml`.

Se comprobó utilizando:

```powershell
Get-Content .github\workflows\ci.yml
```

PowerShell indicó que el archivo no existía.

Para solucionarlo se creó explícitamente la estructura:

```powershell
New-Item -ItemType Directory -Force -Path ".github\workflows"
```

y posteriormente el archivo:

```powershell
New-Item -ItemType File -Force -Path ".github\workflows\ci.yml"
```

Después de agregar el contenido y guardar el archivo se utilizó:

```powershell
git status --untracked-files=all
```

Git comenzó a detectar correctamente:

```text
.github/workflows/ci.yml
```

---

## 7. El workflow estaba en develop pero no se observaba en main

El workflow de GitHub Actions fue desarrollado inicialmente mediante:

```text
feature/github-actions
```

y posteriormente integrado en:

```text
develop
```

Debido a esto, al revisar inicialmente `main`, el archivo todavía no se encontraba disponible en esa rama.

Se realizó un Pull Request:

```text
develop → main
```

Posteriormente se actualizó la copia local:

```bash
git checkout main
git pull origin main
```

Finalmente se comprobó la estructura mediante:

```powershell
dir .github -Recurse
```

obteniendo:

```text
.github/
└── workflows/
    └── ci.yml
```

De esta forma se confirmó que el workflow estaba disponible también en la rama principal.

---

## 8. GitHub Actions detectó el workflow pero el job no pudo iniciar

Después de configurar el workflow, GitHub Actions detectó correctamente los eventos configurados.

Se observaron checks asociados tanto a:

```text
build (push)
```

como a:

```text
build (pull_request)
```

Sin embargo, GitHub mostró el siguiente mensaje:

```text
The job was not started because your account is locked due to a billing issue.
```

Posteriormente se identificó el mensaje:

```text
Invalid payment method - authorization hold failed.
```

Por lo tanto, GitHub reconoció el workflow y sus disparadores, pero el runner no pudo comenzar la ejecución debido a una restricción asociada a la cuenta utilizada.

Este problema no correspondía a un error de sintaxis de `app.js` ni a la ausencia de `.github/workflows/ci.yml`.

La configuración del workflow permaneció en el repositorio para permitir su ejecución una vez resuelta la restricción de la cuenta.

---

# Aprendizajes técnicos obtenidos durante la resolución de problemas

A partir de los problemas encontrados se reforzó el uso de diferentes herramientas de diagnóstico y control del repositorio.

Entre los principales aprendizajes técnicos se encuentran:

- Utilizar `git status` para comprobar el estado del repositorio.
- Utilizar `git branch` antes de modificar archivos para comprobar la rama activa.
- Comprobar correctamente la configuración de `.gitignore`.
- Mantener `node_modules` fuera del repositorio.
- Probar los endpoints antes de integrar los cambios.
- Reiniciar el servidor cuando se modifica el código que se encuentra en ejecución.
- Revisar cuidadosamente `base` y `compare` al crear Pull Requests.
- Mantener separadas las ramas `main`, `develop`, `feature` y `hotfix`.
- Comprobar físicamente la existencia de `.github/workflows/ci.yml`.
- Revisar los logs de GitHub Actions antes de modificar el código.
- Diferenciar errores producidos por el proyecto de problemas externos de la plataforma.
- Mantener sincronizadas las ramas locales y remotas.

---

# Ejecución local

## Requisitos

Para ejecutar el proyecto se requiere:

- Node.js
- npm

## Instalar dependencias

Desde la raíz del proyecto ejecutar:

```bash
npm install
```

## Iniciar el microservicio

Ejecutar:

```bash
node src/app.js
```

El servidor mostrará:

```text
Microservicio ejecutándose en http://localhost:3000
```

El microservicio podrá ser consultado desde:

```text
http://localhost:3000
```

---

# Integrantes

- **Niover Guevara**
- **Alexander Rojas**

---

# Uso de Inteligencia Artificial

Durante el desarrollo de esta evaluación se utilizaron herramientas de Inteligencia Artificial como apoyo en actividades de orientación técnica, explicación de conceptos, diagnóstico de errores, revisión de comandos y apoyo en la elaboración de documentación.

Las sugerencias generadas mediante Inteligencia Artificial fueron revisadas durante el desarrollo antes de ser incorporadas al repositorio.

El uso de estas herramientas se realizó como apoyo al proceso de desarrollo y aprendizaje.