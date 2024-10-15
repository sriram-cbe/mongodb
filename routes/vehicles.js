const { request } = require("express");
var express = require("express");
var router = express.Router();

router.post("/newvehicle", async (req, res, next) => {
  var body = req.body;
  //   call your createUser function here
  vehicleModel
    .createVehicle(body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

// router.get("/getVehiclesByBrand/:brand", (req, res) => {
//   try {
//     vehicleModel
//       .getVehiclesByBrand(req.params.brand)
//       .then((data) => {
//         if (data && data.length > 0) {
//           res.send(data);
//         } else {
//           res.send("No vehicles found for the given brand");
//         }
//       })
//       .catch((err) => {
//         res.send(err);
//       });
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;
