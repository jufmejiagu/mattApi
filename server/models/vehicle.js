import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Vehicle Schema
 */
const VehicleSchema = new mongoose.Schema({
  cedulaUser: {
    type: String,
    required: true
  },
  placa: {
    type: String,
    required: true,
    unique: true
  },
  tipo: {
    type: Object,
    required: true
  },
  fotografia: {
    type: String,
    required: true
  },
});

/**
 * Methods
 */
VehicleSchema.method({
});

/**
 * Statics
 */
VehicleSchema.statics = {
  /**
   * Get vehicle
   * @param {ObjectId} id - The objectId of vehicle.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((vehicle) => {
        if (vehicle) {
          return vehicle;
        }
        const err = new APIError('No such vehicle exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * Get vehicle by placa
   * @param {ObjectId} placa - vehicle's placa
   * @returns {Promise<Vehicle, APIError>}
   */
  getByPlaca(placa) {
    return this.findOne({ placa })
      .exec()
      .then((vehicle) => {
        if (vehicle) {
          return vehicle;
        }
        const err = new APIError('No such vehicle exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  }
};

/**
 * @typedef Vehicle
 */
export default mongoose.model('Vehicle', VehicleSchema);
