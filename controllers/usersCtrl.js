const User = require('../models').User;

const usersCtrl = {
  signUp(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    return User.create({
      email: email,
      password: password
    }).then(user => {
      res.status(201).send('User signup successful.');
    }).catch(error => {
      res.status(400).send('Error while signing up.');
    })
  },

  signIn(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    return User.find({where: {'email': email}})
      .then(user => {
        if (user.password === password) {
          res.status(200).send({message: 'Login successful.'})
        } else {
          res.status(404).send({message: 'Invalid login.'})
        }
      });
  }
}

module.exports = usersCtrl;

