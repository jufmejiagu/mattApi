import express from 'express';
import validate from 'express-validation';
import paramValidation from '../helpers/param-validation';
import authCtrl from '../controllers/auth';

const router = express.Router();

// POST /api/auth/login - Returns the user (JWT disabled)
router.route('/login')
  .post(validate(paramValidation.login), authCtrl.login);

export default router;
