const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      minlength: 5,
      maxlength: 255,
    },
    completed: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

var todoModel = mongoose.model("todo", schema);

module.exports = todoModel
