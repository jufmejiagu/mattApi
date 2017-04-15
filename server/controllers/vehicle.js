import Vehicle from '../models/vehicle';

/**
 * Load vehicle and append to req.
 */
function load(req, res, next, placa) {
  Vehicle.getByPlaca(placa)
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
 * Create new vehicle
 * @returns {Vehicle}
 */
function create(req, res, next) {
  const { cedulaUser, placa, tipo, fotografia } = req.body;

  const vehicle = new Vehicle({
    cedulaUser,
    placa,
    tipo,
    fotografia
  });

  vehicle.save()
    .then(savedVehicle => res.json(savedVehicle))
    .catch(e => next(e));
}

export default { load, get, create };
