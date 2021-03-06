const mongoose = require('mongoose');

require('../config/db.config');

const Drone = require('../models/drone.model');

const droneData = [
  {
    name: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12
  },
  {
    name: 'Racer 57',
    propellers: 4,
    maxSpeed: 20 },
  {
    name: 'Courier 3000i',
    propellers: 6,
    maxSpeed: 18
  }
];

Drone.create(droneData).then((docs) => {
  docs.forEach((elem) => {
    console.log(elem.name)
  });

  mongoose.connection.close();
});
