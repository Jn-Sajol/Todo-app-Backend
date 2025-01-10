const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://julkar10121:K8y6B23sXMW2GQJE@cluster0.p6yvg.mongodb.net/"
      )
      .then(() => {
        console.log("connect succesfully database");
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    console.log(error)
  }
};

module.exports = dbConnect;
