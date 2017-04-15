import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../helpers/param-validation';
import vehicleCtrl from '../controllers/vehicle';
import config from '../../config/config';

const router = express.Router();

router.route('/')

  // POST /api/vehicles - Create new vehicle
  .post(validate(paramValidation.createVehicle), vehicleCtrl.create);

router.route('/:placa')
  // GET /api/vehicles/:placa - Get an specific vehicle by placa
  .get(vehicleCtrl.get);

// Load vehicle when API with placa route parameter is hit
router.param('placa', vehicleCtrl.load);

export default router;
