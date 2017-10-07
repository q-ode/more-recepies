const router = require('express').Router();
const usersCtrl = require('./controllers/usersCtrl');
const recipiesCtrl = require('./controllers/recipiesCtrl');
const authentication = require('./middlewares/authentication');

module.exports = (app) => {
  router.get('/', (req, res) => {
    return res.send({ message: 'More recipies...' });
  });

  //User routes
  router.post('/api/users/signup', usersCtrl.signUp);
  router.post('/api/users/signin', usersCtrl.signIn);

  //Recipie routes
  router.post('/api/recipies', authentication.validateUser, recipiesCtrl.addRecipie);
  router.get('/api/recipies', recipiesCtrl.listRecipies);

  app.use('/', router);
};
