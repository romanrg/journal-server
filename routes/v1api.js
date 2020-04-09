const { Router } = require("express");

const studentsApi = require("./students");
const subjectsApi = require("./subjects");
const marksApi = require("./marks");

const api = Router();

api.use("/students", studentsApi);
api.use("/subjects", subjectsApi);
api.use("/marks", marksApi);


module.exports = api;