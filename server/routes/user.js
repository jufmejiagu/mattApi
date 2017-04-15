import express from 'express';
import validate from 'express-validation';
import userCtrl from '../controllers/user';
import paramValidation from '../helpers/param-validation';

const router = express.Router();

router.route('/')

  // POST /api/users - Create new user
  .post(validate(paramValidation.createUser), userCtrl.create);

router.route('/:cedula/vehicles')
  // GET /api/users/:cedula/vehicles - Get vehicles from a user
  .get(userCtrl.getVehiclesByUser);

router.route('/:cedula/parkings/:month')
  // GET /api/users/:cedula/parkings - Get parking register from a user in a specify month
  .get(userCtrl.getParkingsByMonth);

// Load user when API with cedula route parameter is hit
router.param('cedula', userCtrl.load);

export default router;
