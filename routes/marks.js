const { Router } = require("express");
const asyncHandler = require("express-async-handler");

const {
    getAll,
    createMark,
    updateMark,
    deleteMark
} = require("../services/marks");

const api = Router();

api.get("/", asyncHandler(async (req, res) => {

    const marks = await getAll();

    res.send(marks);

}));

api.post("/", asyncHandler(async (req, res) => {


    if (!req.body) {

        return res.sendStatus(400);

    }

    const createdMark = await createMark(req.body);


    res.send(createdMark);

}));


api.patch("/:id", asyncHandler(async (req, res) => {

    const patchedMark = await updateMark(req.body);

    res.send(patchedMark);

}));


api.delete('/:id', asyncHandler(async (req, res) => {



    const { id } = req.params;

    console.log(id);

    //await deleteMark(id);

    res.send("");

}));

module.exports = api;