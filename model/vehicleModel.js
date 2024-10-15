var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const vehicleSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  color: String,
  vehicleType: String,
  userId: { type: Schema.Types.ObjectId, ref: "users" },
});

const vehicleModel = mongoose.model("vehicles", vehicleSchema);

model = () => {
  return vehicleModel;
};

createVehicle = (params) => {
  return new Promise((reject, resolve) => {
    try {
      vehicleModel.create(params).then((data) => {
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { model, createVehicle };
