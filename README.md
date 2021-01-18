## BACKEND EXAMEN FULLSTACK

Usar el comando ```node index.js``` para levantar el backend.

El endpoint a consumer es el siguiente:

```http://localhost:4000/api/fullstack/points```

Este trae todos los puntos que se encuentren en la base de datos.
Por lo cual deben de estar cargados antes.

Se debe generar un archivo ```.env``` con las siguientes variables:

```PORT=4000``` Puerto donde se levantara el backend.

```POSTGRES_USER=[YouUser]``` Usuario de postgres

```POSTGRES_HOST=localhost``` Host de donde levanta postgres

```POSTGRES_DATABASE=mapa``` Nombre de la base de datos, deberan de generar una base de datos llamada "mapa" e insertarle la información del csv. En el mismo orden como se compartio.
 
```POSTGRES_PASSWORD=[Password]``` Se debe ingresar la contraseña de su usuario postgres o con el que se desea acceder

```POSTGRES_PORT=5232``` Puerto donde levanta postgres.


