// Uses the db client from loader.js

import client from "./loader.js";

export default {
  create(newNote) {
    return client.db("noteTaker").collection("notes").insertOne(newNote);
  },
};
