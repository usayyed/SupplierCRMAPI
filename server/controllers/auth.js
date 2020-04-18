const Users = require("../models").Users;

module.exports = {
  login(req, res) {
    return Users.findAll({
      limit: 1,
      where: {
        username: req.body.username,
      },
    })
      .then((users) => {
        if (users === null || users.length === 0 || users[0].password !== req.body.password) {
            return res.status(401).send({
                error: "Invalid username or password",
            });
        }

        return res.status(201).send({
          username: users[0].username,
          password: users[0].password,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          error: error.message,
        });
      });
  },

  create(req, res) {
    return Users.create(req.body)
      .then((resp) => res.status(201).send(resp))
      .catch((error) => {
        return res.status(400).send({
          error: error.message,
        });
      });
  },
};
