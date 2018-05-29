//This is where we will use the methods from methods/experiences.js
//This is where we do the .then/.catch stuff
const express = require('express'),
      ExperiencesRouter = express.Router(),
      db = require('.././db/donfig'),
      Experiences = require('.././models/experiences');

ExperiencesRouter.get('/', (req,res) => {
  Experiences.find().then((experiences) => {
    res.json(experiences);
  }).catch(error => {
    res.status(500).json({message: 'An error occurred'});
  });
});

ExperiencesRouter.get('/:experienceid', (req,res) => {
  Experiences.findById(req.params).then((experience) => {
    res.json(experience);
  }).catch(error => {
    res.status(500).json({message: 'An error occurred'});
  });
});

ExperiencesRouter.get('/:experienceid/:serviceid', (req,res) => {
  Experiences.findByTwoIds(req.params).then((service) => {
    res.json(service);
  }).catch(error => {
    res.status(500).json({message: 'An error occurred'});
  });
});
