import Parking from '../models/parking';

/**
 * Load vehicle and append to req.
 */
function load(req, res, next, placa) {
  Parking.getByPlaca(placa)
    .then((vehicle) => {
      req.vehicle = vehicle; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get vehicle
 * @returns {Vehicle}
 */
function get(req, res) {
  return res.json(req.vehicle);
}

/**
 * Create new Parking register
 * @returns {Parking}
 */
function create(req, res, next) {
  const { numeroCelda, placa, fechaEntrada } = req.body;

  const parking = new Parking({
    numeroCelda,
    placa,
    fechaEntrada
  });

  parking.save()
    .then(savedParking => res.json(savedParking))
    .catch(e => next(e));
}

export default { load, get, create };
