const { Router } = require("express");
const asyncHandler = require("express-async-handler");

const {
    getAll,
    createSubject,
    updateSubject,
    deleteSubject,
    findById
} = require("../services/subjects");

const api = Router();

const get = asyncHandler(async (req, res) => {

    const subjects = await getAll();

    res.send(subjects);


});

const post = asyncHandler(async (req, res) => {


    if (!req.body) {

        return res.sendStatus(400);

    }

    const createdSubject = await createSubject(req.body);


    res.send(createdSubject);

});

const patch = asyncHandler(async (req, res) => {

    const patchedSubject = await updateSubject(req.body);

    res.send(patchedSubject);

});

const remove = asyncHandler(async (req, res) => {

    const id  = req.subject[0]._id;

    await deleteSubject(id);

    res.send("");

});

const handleIdParam = asyncHandler(async (req, res, next, id) => {
    req.subject = await findById(id);
    next();
});

api.route("/")
    .get(get)
    .post(post);


api.param("id", handleIdParam);
api.route("/:id")
    .patch(patch)
    .delete(remove);


module.exports = api;