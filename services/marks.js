const Mark = require("../models/mark");

exports.getAll = async function () {

    return await Mark.find({_deletedAt: null});

};

exports.createMark = async function (mark = {}) {

    if (Array.isArray(mark)) {
        const handler = mark.reduce((acc, mark) => {
            mark._id ? exports.updateMark(mark) : acc.create.push(mark);
            return acc;
        }, {create: []});

        return await Mark.insertMany(handler.create);

    } else {
        return (new Mark(mark)).save();
    }



};

exports.updateMark = async function (mark) {

    return await Mark.updateOne({_id: mark.id}, {...mark})

};

exports.deleteMark = async function(id) {

    return await exports.updateMark({id, _deletedAt: Date.now()});

};

