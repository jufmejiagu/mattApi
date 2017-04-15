import Joi from 'joi';

export default {

  // POST /api/users
  createUser: {
    body: {
      nombres: Joi.string().required(),
      password: Joi.string().required(),
      cedula: Joi.string().required(),
      apellidos: Joi.string(),
    }
  },

  // POST /api/vehicles
  createVehicle: {
    body: {
      cedulaUser: Joi.string().required(),
      placa: Joi.string().required(),
      tipo: Joi.object({
        nombre: Joi.string().valid('carro', 'moto', 'bicicleta').required(),
        modelo: Joi.string(),
        numPuertas: Joi.number(),
        cilindraje: Joi.string(),
        tiempos: Joi.string(),
      }).required(),
      fotografia: Joi.string().uri({ scheme: ['http', 'https'] }).required(),
    }
  },

  // POST /api/parking
  createParking: {
    body: {
      numeroCelda: Joi.string().required(),
      placa: Joi.string().required(),
      fechaEntrada: Joi.date(),
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      cedula: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
