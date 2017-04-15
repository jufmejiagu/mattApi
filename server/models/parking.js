import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Parking Schema
 */
const ParkingSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true
  },
  numeroCelda: {
    type: String,
    required: true
  },
  fechaEntrada: {
    type: Date,
    default: Date.now
  },
}, { toJSON: { virtuals: true } });

/**
 * Statics
 */
ParkingSchema.statics = {

  /**
   * Get parking by placas
   * @param {[String]} placas - placas of many vehicles
   * @returns {Promise<[Parkings], APIError>}
   */
  getByPlacas(placas, month) {
    const start = new Date(2017, month - 1, 1);
    const end = new Date(2017, month, 1);

    return this.find({
      placa: { $in: placas },
      fechaEntrada: {
        $gte: start,
        $lt: end
      }
    })
    .exec()
    .then(parkings => parkings);
  }
};

/**
 * @typedef Parking
 */
export default mongoose.model('Parking', ParkingSchema);
