import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  nombres: {
    type: String,
    required: true
  },
  cedula: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: false
  },
}, { toJSON: { virtuals: true } });

UserSchema.virtual('vehicles', {
  ref: 'Vehicle',
  localField: 'cedula',
  foreignField: 'cedulaUser',
});

/**
 * Methods
 */
UserSchema.method({
});

/**
 * Statics
 */
UserSchema.statics = {

  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * Get user by cedula
   * @param {ObjectId} cedula - cedula of user.
   * @returns {Promise<User, APIError>}
   */
  getByCedula(cedula) {
    return this.findOne({ cedula })
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * Get vehicles from a user by cedula
   * @param {ObjectId} cedula - cedula of user.
   * @returns {Promise<User, APIError>}
   */
  getVehicles(cedula) {
    return this.findOne({ cedula })
      .populate('vehicles')
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  }
};

/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
