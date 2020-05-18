const { Artist } = require('../sequelize');

exports.create = (req, res) => {
  Artist.create(req.body).then(user => res.status(201).json(user));
};

exports.getter = (req,res) => {
  Artist.findAll().then(user=> {res.status(200).json(user);
  });
};

exports.getById = (req,res) => {
  const {id} = req.params;
  Artist.findByPk(id).then( user => {
    res.status(200).json(user);
  });
}