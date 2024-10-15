const { request } = require("express");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send("Service is up and running..");
});

router.post("/newuser", async (req, res, next) => {
  var body = req.body;
  console.log(body);
  // call your createUser function here
  userModel
    .createUser(body)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/updateuser", async (req, res, next) => {
  var body = req.body;
  console.log(body);
  // call your updateUser function here
  userModel
    .updateUser(body)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/deleteuser/:id", async (req, res, next) => {
  var id = req.params.id;
  console.log(id);
  userModel
    .deleteUser(id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  res.sendStatus(200);
});

router.get("/getAll", (req, res) => {
  try {
    userModel
      .getAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
