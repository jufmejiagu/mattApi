Mattelsa Parking!
===================

Backend para la administración del parqueadero
Creado por: Juan Felipe Mejía Guerra


Tecnologías
-------------


> - NodeJS -> Framework elegido por gusto y porque es el único framework backend que conozco
> - Gulp -> Se usó gulp como automatizador de tareas
> - Joi -> Joi para la validación de parametros en las rutas
> - Infraestructura -> Express
> - MongoDB -> Se usa una base de datos no relacional debido a la facilidad para interactuar con los datos,
  Se escoge MongoDB y no otra, como por ejemplo Rethink, debido a la familiaridad con el motor

Instalar dependencias:
Instalar [mongoDB](https://docs.mongodb.com/manual/installation/)

```sh
npm install
```

Set environment (vars):
```sh
Edit file .env
```

Iniciar el servidor:
```sh
npm start

# Debuging selectivo
DEBUG=matt:* npm start
```
Documentación [debug](https://www.npmjs.com/package/debug)

Lint:
```sh
# Linter => Eslint
npm run lint

Otras tareas de gulp:
# Limpia la carpeta dist
gulp clean

gulp
```
