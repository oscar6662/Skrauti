DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id serial primary key,
  username varchar(255) NOT NULL unique,
  email varchar(70) NOT NULL unique,
  password character varying(255) NOT NULL,
  admin boolean default true
);

DROP TABLE IF EXISTS candidates CASCADE;

CREATE TABLE IF NOT EXISTS greinar (
  title varchar(1024) not null,
  link varchar(1024) not null
);
