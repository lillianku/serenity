-- \c serenity

ALTER TABLE guests
ADD UNIQUE (username);
