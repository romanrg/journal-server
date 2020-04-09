const { Schema, model } = require("mongoose");

const subjectSchema = new Schema({
    name: String,
    teacher: String,
    address: String,
    description: String,
    uniqueDates: Array,
    _deletedAt: {type: Date, default: null}
});

module.exports = model("subject", subjectSchema);