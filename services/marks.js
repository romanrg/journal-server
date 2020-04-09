const Mark = require("../models/mark");

exports.getAll = async function () {

    return await Mark.find({_deletedAt: null});

};

exports.createMark = async function (mark = {}) {

    return (new Mark(mark)).save();

};

exports.updateMark = async function (mark) {

    console.log("UPDATE:", mark);

    return await Mark.updateOne({_id: mark.id}, {...mark})

};

exports.deleteMark = async function(id) {

    console.log("DELETE:", id);

    return await exports.updateMark({id, _deletedAt: Date.now()});

};

