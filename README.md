# Aplicación de consumo de API - JSONPlaceholder

## Requisitos
- Un navegador actualizado (Chrome, Edge o Firefox).
- Conexión a Internet.

## Cómo ejecutar
1. Descomprime `consumo_jsonplaceholder.zip`.
2. Abre la carpeta `consumo_jsonplaceholder`.
3. Abre `index.html` en el navegador. También puedes abrir la carpeta en Visual Studio Code y ejecutarla con la extensión Live Server.
4. Espera a que carguen las 10 tarjetas.
5. Pulsa cualquier tarjeta para abrir la ventana flotante con ID, nombre, username, email, phone y website.

## Archivos
- `index.html`: estructura de la página y ventana modal.
- `style.css`: diseño visual y estilos responsivos.
- `script.js`: petición a la API y eventos para mostrar/cerrar el modal.

## API utilizada
https://jsonplaceholder.typicode.com/users

La aplicación usa `fetch()` para solicitar los usuarios al endpoint y convierte la respuesta a JSON.

## Para completar la entrega
- Publica esta carpeta en un repositorio público de GitHub.
- Copia la URL del repositorio en el PDF.
- Ejecuta la aplicación y toma capturas reales: vista general de las tarjetas y ventana modal abierta (puedes mostrar usuarios distintos).
