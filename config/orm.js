//Here is the O.R.M. where write functions and conditions
var connection = require("./connection.js");
//orm.all(numbers, subtractNums)
var orm = {
  all: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    //"SELECT * FROM burgers"
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  orm.create(burgers, burgers_name, "CHEEZE BOOGAR", callback)
  create: function(table, cols, vals, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (" + vals + ") ";
 

    console.log(queryString);//INSERT INTO burgers (burger_name) VALUES ('CHEEZE BOOGAR');

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + "SET" + objColVals + " WHERE " + condition;

    // queryString += " SET ";
    // queryString += objColVals;
    // queryString += " WHERE ";
    // queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};
module.exports = orm;