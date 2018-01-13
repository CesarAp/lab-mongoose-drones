const Drones = require('../models/drone.model');

module.exports.index = (req, res, next) => {
  Drones.find().then((drones) => {
    console.log(drones);
    res.render('drones/index', {
      drones: drones
    })
  })
}
