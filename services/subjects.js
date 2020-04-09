const Subject = require("../models/subject");

exports.getAll = async function () {

    return await Subject.find({_deletedAt: null});

};

exports.createSubject = async function (subject = {}) {

    return (new Subject(subject)).save();

};

exports.updateSubject = async function (subject) {

    return await Subject.updateOne({_id: subject.id}, {...subject})

};

exports.deleteSubject = async function(id) {

    return await exports.updateSubject({id, _deletedAt: Date.now() });

};

