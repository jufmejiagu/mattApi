import express from 'express';
import validate from 'express-validation';
import paramValidation from '../helpers/param-validation';
import parkingCtrl from '../controllers/parking';

const router = express.Router();

router.route('/')

  // POST /api/parking - Create new parking register
  .post(validate(paramValidation.createParking), parkingCtrl.create);


export default router;
