var getConectionString = () => {
  var connStr = "";
  //mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
  var userOption = "";
  if (config.database.username) {
    userOption =
      config.database.username + ":" + config.database.password + "@";
  }

  return (
    "mongodb://" +
    userOption +
    config.database.host +
    ":" +
    config.database.port +
    "/" +
    config.database.database
  );
};

module.exports = { getConectionString };
