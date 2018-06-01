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

// find packages for a guest by guest ID
Guest.findPackage = (guestId) => {
  let {id} = guestId;
  return db.query(`SELECT * FROM packages WHERE guest_id=$1`, id)
};

// add a new package to a guest
Guest.savePackage = (packageData) => {
  const {guest_id, service_id} = packageData;
  return db.one(`INSERT INTO packages(guest_id, service_id)
    VALUES($1, $2)
    RETURNING *`, [guest_id, service_id])
};

// remove a package from a guest
Guest.findByIdAndRemovePackage = (packageData) => {
  const {guestid, packageid} = packageData;
  return db.one(`DELETE FROM packages WHERE package_id=$1 AND guest_id=$2 RETURNING *`, [packageid, guestid])
};

// find service name by service ID
Guest.findServiceName = (serviceId) => {
  const {id} = serviceId;
  return db.one(`SELECT * FROM services WHERE service_id=$1`, id);
};

// find guest id by username
Guest.findId = (guestUsername) => {
  const {username} = guestUsername;
  return db.one(`SELECT guest_id FROM guests WHERE username=$1`, username);
};

module.exports = Guest;
