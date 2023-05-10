const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialNetworkAPIDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
