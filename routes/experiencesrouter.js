const express = require('express'),
      ExperiencesRouter = express.Router(),
      Experiences = require('.././models/experiences');

//find all experiences
ExperiencesRouter.get('/', (req,res) => {
  Experiences.find().then((experiences) => {
    res.json(experiences);
  }).catch(error => {
    res.status(500).json({message: 'An error occurred'});
  });
});

//find experiences by experienceid
ExperiencesRouter.get('/:id', (req,res) => {
  Experiences.findById(req.params).then((experience) => {
    res.json(experience);
  }).catch(error => {
    res.status(500).json({message: 'An error occurred'});
  });
});

//find services by experienceid
ExperiencesRouter.get('/:id/services', (req,res) => {
  Experiences.findServicesByExperienceId(req.params).then((services) => {
    res.json(services);
  }).catch(error => {
    res.status(500).json({message: 'An error occured'});
  });
});

//find experienceid then service by id
ExperiencesRouter.get('/:experienceid/services/:serviceid', (req,res) => {
  Experiences.findByTwoIds(req.params).then((service) => {
    res.json(service);
  }).catch(error => {
    res.status(500).json({message: 'An error occurred'});
  });
});

module.exports = ExperiencesRouter;
