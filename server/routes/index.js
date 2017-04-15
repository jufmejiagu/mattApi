import express from 'express';
import vehiclesRoutes from './vehicles';
import authRoutes from './auth';
import usersRoutes from './user';
import parkingRoutes from './parking';

const router = express.Router();

// GET / - Check service health
router.get('/', (req, res) =>
  res.send('OK')
);

// mount user routes at /vehicles
router.use('/vehicles', vehiclesRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount auth routes at /users
router.use('/users', usersRoutes);

// mount parking routes at /parking
router.use('/parking', parkingRoutes);

export default router;
