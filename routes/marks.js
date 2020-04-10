const { Router } = require("express");
const asyncHandler = require("express-async-handler");

const {
    getAll,
    createMark,
    updateMark,
} = require("../services/marks");

const api = Router();

const returnMarks = asyncHandler(async (req, res) => {

    const marks = await getAll();

    res.send(marks);

});

const postMark = asyncHandler(async (req, res) => {


    if (!req.body) {

        return res.sendStatus(400);

    }

    const createdMark = await createMark(req.body);


    res.send(createdMark);

});

const patchMark = asyncHandler(async (req, res) => {

    const patchedMark = await updateMark(req.body);

    res.send(patchedMark);

});

api.route("/")
    .get(returnMarks)
    .post(postMark);

api.route("/:id")
    .patch(patchMark);

module.exports = api;