const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const d = process.env;
const uri = require("./config/db.config.js");

// mysql://root:macbookair@localhost:3306/test_db

const db = require("./model/index");
const morgan = require("morgan");
db.sequelize
  .sync()
  .then(() => {
    console.log("====================================");
    console.log(
      `${uri.dialect}://${uri.USER}:${uri.PASSWORD}@${uri.HOST}:${uri.PORT}/${uri.DB}`
    );
    console.log("====================================");
    console.log("====================================");
    console.log("Database Connected");
    console.log("====================================");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(morgan('tiny'))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to SQL-Node application." });
});
require("./router/tutorial.routes")(app);

const PORT =  8080;
app.listen(PORT, () => {
  console.log("====================================");
  console.log(
    `${uri.dialect}://${uri.USER}:${uri.PASSWORD}@${uri.HOST}:${uri.PORT}/${uri.DB}`
  );
  console.log("====================================");
  console.log(`Server is running on port ${PORT}.`);
});
