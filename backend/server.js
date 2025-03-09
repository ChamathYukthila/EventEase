const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-paser");
const cors = require('cors');
const app = express();

require("dotenv").config();



app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log("Listening to port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });                   