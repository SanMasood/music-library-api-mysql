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
    if (!user)
      res.status(404).json({error: 'The artist could not be found.'});    
    else
    res.status(200).json(user);    
  });
};

exports.updateArtistById = (req, res) => {
  const {id} = req.params;
  Artist.findByPk(id).then( user => {
    Artist.update(req.body, { where: { id } })
    .then(([rowsUpdated]) => {
      if (!rowsUpdated) //dont get this.
        res.status(404).json({ error: 'The artist could not be found.' });
       else 
        res.status(200).json(rowsUpdated);     

  })
})
}


exports.deleteArtistById = (req, res) => {
  const { id } = req.params;
  Artist.findByPk(id).then(user => {
    if (!user) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Artist.destroy({ where: { id } }).then(() => {
        res.status(204).send();
      });
    }
  });
};