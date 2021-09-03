/* eslint-disable new-cap */
// Uses the db client from loader.js
import { ObjectId } from "mongodb";
import client from "./loader.js";

export default {
  index() {
    return client.db("noteTaker").collection("notes").find({}).toArray();
  },
  create(newNote) {
    return client.db("noteTaker").collection("notes").insertOne(newNote);
  },
  show(id) {
    return client.db("noteTaker").collection("notes").findOne(ObjectId(id));
  },
  update(id, updatedNote) {
    return client
      .db("noteTaker")
      .collection("notes")
      .updateOne({ _id: ObjectId(id) }, { $set: updatedNote });
  },
  delete(id) {
    return client
      .db("noteTaker")
      .collection("notes")
      .deleteOne({ _id: ObjectId(id) });
  },
  deleteAll() {
    return client.db("noteTaker").collection("notes").deleteMany({});
  },
};
