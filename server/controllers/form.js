const SupplierInfo = require('../models').SupplierInfo;

module.exports = {
  create(req, res) {
    console.log(req.body)
    return SupplierInfo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};