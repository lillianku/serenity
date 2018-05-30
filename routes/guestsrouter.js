// ROUTES

//This is where we will use the methods from methods/guests.js
//This is where we do the .then/.catch stuff

const express = require('express');
const GuestsRouter = express.Router();
const Guest = require('.././models/guests.js');

// find all the guests
GuestsRouter.get('/', (req, res) => {
  Guest.find().then((guests) => {
    res.json(guests);
  }).catch((error) => {
    res.status(500).json({message: '500: Server Issue: Something Went Wrong: get'});
  });
});

// find a guest by ID
GuestsRouter.get('/:id', (req, res) => {
  Guest.findById(req.params).then((guest) => {
    res.json(guest);
  }).catch((error) => {
    res.status(400).json({message: '404: Cannot Find Guest'});
  });
});

// add a new guest
GuestsRouter.post('/', (req, res) => {
  Guest.save(req.body).then((guest) => {
    res.json(guest);
  }).catch((error) => {
    res.status(500).json({message: 'Something Went Wrong: post'});
  });
});

// update a guest
GuestsRouter.put('/:id', (req, res) => {
  Guest.findByIdAndUpdate(req.params, req.body).then((guest) => {
    res.json(guest);
  }).catch((error) => {
    res.status(500).json({message: 'Something Went Wrong: put'});
  });
});

// remove (delete) a guest
GuestsRouter.delete('/:id', (req, res) => {
  Guest.findByIdAndRemove(req.params).then((guest) => {
    res.json(guest);
  }).catch((error) => {
    res.status(500).json({message: 'Something Went Wrong: delete'});
  });
});

// get packages for each guest by guest ID
GuestsRouter.get('/:id/package', (req, res) => {
  Guest.findPackage(req.params).then((package) => {
    res.json(package);
  }).catch((error) => {
    res.status(400).json({message: '404: Cannot Find Package'});
  });
});

// add a package to a guest
GuestsRouter.post('/:id/package', (req, res) => {
  Guest.savePackage(req.body).then((package) => {
    res.json(package);
  }).catch((error) => {
    res.status(500).json({message: 'Something Went Wrong: post package'});
  });
});

// remove a package from the guest
GuestsRouter.delete('/:guestid/package/:packageid', (req, res) => {
  Guest.findByIdAndRemovePackage(req.params).then((package) => {
    res.json(package);
  }).catch((error) => {
    res.status(500).json({message: 'Something Went Wrong: delete package'});
  });
})

module.exports = GuestsRouter;
