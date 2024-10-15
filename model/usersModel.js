var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

const userModel = mongoose.model("users", userSchema);

model = () => {
  return userModel;
};

createUser = (params) => {
  return new Promise((reject, resolve) => {
    try {
      console.log(params);
      userModel.findOne({ email: params.email }).then((data) => {
        if (data) {
          reject("The user already exists");
        } else {
          userModel
            .create(params)
            .then((data) => {
              console.log(data);

              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

updateUser = (params) => {
  return new Promise((reject, resolve) => {
    try {
      console.log(params);
      userModel
        .findByIdAndUpdate(params._id, params, { new: true })
        .then((data) => {
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};

deleteUser = (id) => {
  return new Promise((reject, resolve) => {
    try {
      console.log(id);
      userModel.findByIdAndDelete(id).then((data) => {
        console.log(data);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

getAll = () => {
  return new Promise((reject, resolve) => {
    try {
      userModel.find().then((data) => {
        console.log(data);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { model, createUser, updateUser, deleteUser, getAll };
