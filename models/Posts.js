const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("posts", PostsSchema);