\c serenity

CREATE TABLE packages(
  package_id SERIAL PRIMARY KEY,
  guest_id INTEGER REFERENCES guests(guest_id),
  service_id INTEGER REFERENCES services(service_id)
);
