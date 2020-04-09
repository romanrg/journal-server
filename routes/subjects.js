const { Router } = require("express");
const asyncHandler = require("express-async-handler");

const {
    getAll,
    createSubject,
    updateSubject,
    deleteSubject
} = require("../services/subjects");

const api = Router();

api.get("/", asyncHandler(async (req, res) => {

    const subjects = await getAll();

    res.send(subjects);


}));

api.post("/", asyncHandler(async (req, res) => {


    if (!req.body) {

        return res.sendStatus(400);

    }

    const createdSubject = await createSubject(req.body);


    res.send(createdSubject);

}));


api.patch("/:id", asyncHandler(async (req, res) => {

    const patchedSubject = await updateSubject(req.body);

    res.send(patchedSubject);

}));


api.delete('/:id', asyncHandler(async (req, res) => {



    const { id } = req.params;

    await deleteSubject(id);

    res.send("");

}));


module.exports = api;