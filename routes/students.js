const { Router } = require("express");
const asyncHandler = require("express-async-handler");

const {
    getAll,
    createStudent,
    deleteStudent,
    findBy
} = require("../services/students");

const api = Router();

api.get("/", asyncHandler(async (req, res) => {

    const possibleSearch = req.query.q;

    const students = possibleSearch ? await findBy(possibleSearch) : await getAll();

    res.send(students);


}));

api.post("/", asyncHandler(async (req, res) => {


    if (!req.body) {

        return res.sendStatus(400);

    }

    const createdStudent = await createStudent(req.body);


    res.send(createdStudent);

}));

api.delete('/:id', asyncHandler(async (req, res) => {



    const { id } = req.params;

    await deleteStudent(id);

    res.send("");

}));


module.exports = api;