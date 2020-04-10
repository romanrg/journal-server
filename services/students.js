const Student = require("../models/student");

exports.getAll = async function () {

    return await Student.find({_deletedAt: null});

};

exports.createStudent = async function (student = {}) {

    return (new Student(student)).save();

};

exports.updateStudent = async function ({id, name, surname, address, description, _deletedAt}) {

    return await Student.updateOne({_id: id}, {_deletedAt})

};

exports.deleteStudent = async function(id) {

    return await exports.updateStudent({id, _deletedAt: Date.now() });

};

exports.findBy = async function (search) {

    return await Student.find(
        {
            $or: [
                {name: {$regex: search}},
                {surname: {$regex: search}},
                {address: {$regex: search}},
                {description: {$regex: search}}
            ],
            _deletedAt: null
        }
    );

};

exports.findById = async function (id) {
    return await Student.find({_id: id});
};


