const { Schema, model } = require("mongoose");

const markSchema = new Schema({
    student: String,
    subject: String,
    value: Number,
    time: Number,
    _deletedAt: {type: Date, default: null}
});



module.exports = model("mark", markSchema);