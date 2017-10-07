const User = require('../models').User;

const authentication = {
  validateUser(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
      return User.find({where: {'email': email}})
        .then(user => {
          if (user.password === password) {
            next();
          } else {
            res.status(403).send({message: 'Whollup! You are not authorized.'})
          }
        });
    } else {
      res.status(403).send({message: 'Whollup! You are not authorized.'})
    }
  }
}

module.exports = authentication;