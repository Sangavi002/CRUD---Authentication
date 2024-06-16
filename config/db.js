const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGO_URl);

module.exports = connection