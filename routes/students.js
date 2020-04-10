const { Router } = require("express");
const asyncHandler = require("express-async-handler");

const {
    getAll,
    createStudent,
    findBy,
    findById,
    deleteStudent
} = require("../services/students");

const api = Router();



const handleIdParam = asyncHandler(async (req, res, next, id) => {
    req.student = await findById(id);
    next();
});

const getStudents = asyncHandler(async (req, res) => {

    const possibleSearch = req.query.q;

    const students = possibleSearch ? await findBy(possibleSearch) : await getAll();

    res.send(students);


});

const postStudent = asyncHandler(async (req, res) => {


    if (!req.body) {

        return res.sendStatus(400);

    }

    const createdStudent = await createStudent(req.body);


    res.send(createdStudent);

});

const removeStudent = asyncHandler(async (req, res) => {

    const id = req.student[0]._id;

    await deleteStudent(id);

    res.send("");

});

api.param("id", handleIdParam);

api.route("/")
    .get(getStudents)
    .post(postStudent);

api.route("/:id")
    .delete(removeStudent);


module.exports = api;