const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true }
});

const Posts = mongoose.model("posts", postSchema);

module.exports = Posts;