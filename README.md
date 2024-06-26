# Estructura de proyecto REACT/NODE

Estructura para proyecto estándar con React/Node, creada con Vite, con las dependencias y scripts más típicas.

- **Frontend:**
  - axios
  - react-router-dom
  - eslint

- **Backend:**
  - nodemon
  - cors
  - dotenv
  - express
  - jsonwebtoken
  - express-async-errors
  - bcrypt

Además, ya viene con algunos componentes, datos y servicios por defecto, para que todo sea funcional y para usar como base o como guía.

El repositorio es un monorepo, por lo que podras instalar y activar tanto el front como el back, con una sola linea de script desde la raiz.

## Guía de pasos

1. Clonar el repositorio: 
    ``` 
    git clone --depth=1 https://github.com/locodasi/estructura-React_Node.git 
    ```
2. Crear un archivo `.env` en el backend con este código:
    ```
    PORT=3003
    ```
3. Ejecutar los siguientes comandos:
    ```bash
    npm install
    npm run dev
    ```
4. Si cambiaste el valor del PORT en el archivo .env ir a vite.config.js de la carpeta frontend y cambiar el valor al que pusiste
6. Listo, a personalizar
