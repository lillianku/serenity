//This is where we define the functions for the ExperiencesRouter
//find, findOne, fineOneAndUpdate, delete, save, etc.
const db = require('.././db/config'),
      Experiences = {};

//find all experiences
Experiences.find = () => {
  return db.query(`SELECT * FROM experiences`)
};

//find experiences by experienceid
Experiences.findById = (experienceid) => {
  const {id} = experienceid;
  return db.one(`SELECT * FROM experiences
    WHERE experience_id=$1`, id)
};

//find experienceid then service by id
Experiences.findByTwoIds = (paramsData) => {
  const {experienceid, serviceid} = paramsData;
  return db.one(`SELECT * FROM services
    WHERE experience_id=$1 AND service_id =$2`, [experienceid, serviceid])
};

module.exports = Experiences;
