import httpStatus from 'http-status';
import User from '../models/user';
import Parking from '../models/parking';
import APIError from '../helpers/APIError';

/**
 * Load user and append to req.
 */
function load(req, res, next, cedula) {
  User.getByCedula(cedula)
    .then((user) => {
      req.user = user; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get vehicles from an user
 * @returns {[Vehicles]}
 */
function getVehiclesByUser(req, res, next) {
  User.getVehicles(req.user.cedula)
    .then((user) => {
      if (user) {
        return res.json(user.vehicles);
      }

      const err = new APIError('User Not Found', httpStatus.NOT_FOUND, true);
      return next(err);
    })
    .catch(e => next(e));
}

/**
 * Get parking register from an user  and specific month
 * @returns {[Parking]}
 */
function getParkingsByMonth(req, res, next) {
  const { cedula, month } = req.params;

  User.getVehicles(cedula)
    .then((user) => {
      if (user) {
        return user.vehicles;
      }

      const err = new APIError('User Not Found', httpStatus.NOT_FOUND, true);
      return next(err);
    })
    .then(vehicles => vehicles.map(vehicle => vehicle.placa))
    .then(placas => Parking.getByPlacas(placas, month))
    .then(parkings => res.json(parkings))
    .catch(e => next(e));
}

/**
 * Create new user
 * @returns {User}
 */
function create(req, res, next) {
  const user = new User({
    cedula: req.body.cedula,
    nombres: req.body.nombres,
    password: req.body.password,
    apellidos: req.body.apellidos
  });

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}


export default { load, getVehiclesByUser, create, getParkingsByMonth };
