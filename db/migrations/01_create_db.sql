CREATE DATABASE serenity;

\c serenity

CREATE TABLE experiences(
  experience_id SERIAL PRIMARY KEY,
  experience_name VARCHAR(50) NOT NULL,
  description VARCHAR(500) NOT NULL
);

CREATE TABLE services(
  service_id SERIAL PRIMARY KEY,
  experience_id INTEGER REFERENCES experiences(experience_id),
  service_name VARCHAR(50) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  allergens VARCHAR(50),
  duration INTEGER NOT NULL,
  price INTEGER NOT NULL
);

CREATE TABLE guests(
  guest_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  allergies VARCHAR(250),
  comments VARCHAR(500),
  created_on TIMESTAMP NOT NULL DEFAULT NOW()
);
