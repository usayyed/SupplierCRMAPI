const formController = require('../controllers').form;
const authController = require('../controllers').auth;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/submitForm', formController.create);

  app.post('/api/login', authController.login);
  app.post('/api/register', authController.create);
};