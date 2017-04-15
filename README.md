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
>- JWT -> Se hace la arquitectura para usar JSON WEB TOKEn, aunque por rapidez no se implementa completamente.
>- Las imagenes se suben como strings, se decide no hacer la funcionalidad completa por el tiempo.

MODELOS

* Se asume que las bicicletas también tendrán un identificador único, placa.
* Se usan subtipos para clasificar los tipos de vehiculos
* Se asume la fotografía como un String.

```sh
vehiculo = {
  cedulaUser: 'Int',
  placa: 'string', 
  fotografia: 'string',
  tipo: {
    nombre: 'carro',
    modelo: '',
    numPuertas: '',
  },
  tipo: {
    nombre: 'moto',
    cilindraje: 'string',
    tiempos: 'string',
  },
  tipo: {
    nombre: 'bicicleta',
  },
};

empleado = {
  nombres: 'String',
  apellidos: 'String',
  cedula: 'Int',
  contraseña: 'string'
};

registroParqueadero = {
  placa: 'string',
  numeroCelda: 'string',
  fechaEntrada: 'Date',
};

```

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
