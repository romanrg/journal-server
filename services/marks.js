const Mark = require("../models/mark");

exports.getAll = async function () {

    return await Mark.find({_deletedAt: null});

};

exports.createMark = async function (mark = {}) {

    if (Array.isArray(mark)) {
        const handler = mark.reduce((acc, mark) => {
            mark._id ? acc.update.push(mark) : acc.create.push(mark);
            return acc;
        }, {create: [], update: []});

        // create new
        const created =  await Mark.insertMany(handler.create);

        // update old
        handler.update.reduce(
            (acc, current) => {
                const updated = exports.updateMark(current);
                acc = [...acc, updated];
                return acc;
            }, []
        );

        return created;


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

