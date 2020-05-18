const { Artist } = require('../sequelize');

exports.create = (req, res) => {
  Artist.create(req.body).then(user => res.status(201).json(user));
};

exports.getter = (req,res) => {
  Artist.findAll().then(user=> {res.status(200).json(user);
  });
};