import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import User from '../models/user';

/**
 * Returns jwt token if valid cedula and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function login(req, res, next) {
  User.getByCedula(req.body.cedula)
    .then((user) => {
      if (user && req.body.password === user.password) {
        return res.json(user);
      }
      const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
      return next(err);
    })
  .catch(e => next(e));
}

export default { login };
