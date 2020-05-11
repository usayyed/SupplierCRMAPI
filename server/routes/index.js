const formController = require('../controllers').form;
const authController = require('../controllers').auth;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/submitForm', formController.create);
  app.post('/api/admin/getSuppliers', formController.listAll);
  app.get('/api/admin/getSupplier/:id', formController.listOne);
  app.get('/api/states', formController.listAllStates);
  app.get('/api/cities/:id', formController.listAllCities);
  app.get('/api/certificates', formController.listAllCertificates);

  app.post('/api/login', authController.login);
  app.post('/api/admin/register', authController.create);
};