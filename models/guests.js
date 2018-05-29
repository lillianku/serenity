// MODELS

//This is where we define the functions for the GuestsRouter
//find, findOne, fineOneAndUpdate, delete, save, etc.

const db = require('.././db/config');
const Guest = {};

// find all the guests
Guest.find = () => {
  return db.query(`SELECT * FROM guests`)
};

// find a guest by ID
Guest.findById = (guestId) => {
  let {id} = guestId;
  return db.one(`SELECT * FROM guests WHERE guest_id=$1`, id)
};

// add a new guest
Guest.save = (guestData) => {
  const {username, first_name, last_name, email, phone, allergies, comments} = guestData;
  return db.one(`INSERT INTO guests(username, first_name, last_name, email, phone, allergies, comments)
    VALUES($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`, [username, first_name, last_name, email, phone, allergies, comments])
};

// find a guest and update guest data
Guest.findByIdAndUpdate = (guestId, guestData) => {
  const {username, first_name, last_name, email, phone, allergies, comments} = guestData,
        {id} = guestId;
  return db.one(`UPDATE guests
    SET username=$1, first_name=$2, last_name=$3, email=$4, phone=$5, allergies=$6, comments=$7
    WHERE guest_id=$8
    RETURNING *`, [username, first_name, last_name, email, phone, allergies, comments, id])
};

// remove guest
Guest.findByIdAndRemove = (guestId) => {
  let {id} = guestId;
  return db.one(`DELETE FROM guests WHERE guest_id=$1 RETURNING *`, id)
};

module.exports = Guest;
