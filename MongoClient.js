const mongoose = require("mongoose");
exports.establishConnectionWithDB = (uri) => mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

