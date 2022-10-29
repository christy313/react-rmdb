const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const knex = require("knex");
const app = express();

const { handleSignup } = require("./controllers/signup");
const { handleLogin } = require("./controllers/login");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "christy",
    password: "",
    database: "movie",
  },
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).json("success"));

app.post("/login", (req, res) => handleLogin(req, res, db, bcrypt));

app.post("/signup", (req, res) => handleSignup(req, res, db, bcrypt));

app.listen(8080, () => {
  console.log(`server is running on PORT: 8080`);
});
