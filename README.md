# Laboratorio 02: Despliegue de Minimal API y PostgreSQL con Docker Compose

**Estudiante:** Diego Chavez Romero  
**Curso:** Infraestructura como Código  
**Carrera:** Ingeniería de Sistemas e Inteligencia Artificial  


## ¿De qué trata este proyecto?

En este laboratorio configuré una arquitectura básica usando **Docker Compose**. La idea principal fue levantar tres instancias (réplicas) de una API hecha en Node.js/Express y conectarlas a una base de datos PostgreSQL, todo corriendo dentro de una misma red privada aislada.


## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

* `api/`: Contiene el código fuente de la API en Node.js (`index.js`, `package.json`) y el `Dockerfile` para armar la imagen.
* `docker-compose.yml`: Archivo de orquestación donde defino los 4 contenedores (las 3 réplicas de la API + PostgreSQL), las redes y los volúmenes.
* `.env.example`: Plantilla con las variables de entorno para que cualquiera pueda probar el proyecto.
* `.gitignore`: Configurado para no subir la carpeta `node_modules` ni el archivo `.env` local con credenciales.
* `screenshots/`: Carpeta con las capturas de pantalla que sirven como evidencia de las pruebas.

