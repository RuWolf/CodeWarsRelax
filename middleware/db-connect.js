const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://elbrus111:elbrus@cluster0-s6jaa.mongodb.net/usersCodeWars?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

module.exports = mongoose.connection;
