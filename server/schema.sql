/* delete db cpmmand goes */
DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (

  id INTEGER PRIMARY KEY,
  user TEXT NOT NULL,
  room INTEGER NOT NULL,
  msg TEXT NOT NULL,
  timesent TIMESTAMP NOT NULL
);

CREATE TABLE users (

  id INTEGER PRIMARY KEY,
  userName TEXT NOT NULL
);

CREATE TABLE posts (

  msgId INTEGER NOT NULL,
  userId INTEGER NOT NULL,
  FOREIGN KEY (msgId) REFERENCES messages(id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

