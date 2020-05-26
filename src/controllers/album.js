const { Album, Artist } = require('../sequelize');
  
exports.createAlbum = (req, res) => {
  const { artistId } = req.params;

  Artist.findByPk(artistId).then(artist => {
    if (!artist){
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.create(req.body).then(album => {
        album.setArtist(artistId).then(linkedAlbum => {
          res.status(201).json(linkedAlbum);
        });
      });
    }
  });
};

exports.getAlbumByArtist = (req,res) => {
  const { artistId } = req.params;

  Artist.findByPk(artistId).then(artist => {
    if(!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      Album.findAll({ where: { artistId } }).then(albums => res.status(200).json(albums));
        }
  });
};