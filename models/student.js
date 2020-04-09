const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
   name: String,
   surname: String,
   address: String,
   description: String,
   _deletedAt: {type: Date, default: null}
});



module.exports = model("student", studentSchema);