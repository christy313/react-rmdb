import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "christy",
    password: "",
    database: "movie",
  },
});

db.select("*")
  .from("users")
  .then((data) => console.log(data));

const app = express();
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/login", (req, res) => {
  db.select("email", "hash")
    .from("login")
    .where("email", "=", req.body.email)
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json("unable to get user"));
      } else {
        res.status(400).json("wrong credentials");
      }
    })
    .catch((err) => res.status(400).json("wrong credentials"));
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password, saltRounds);

  db.transaction((trx) => {
    trx
      .insert({
        hash: hash,
        email: email,
      })
      .into("login")
      .returning("email")
      .then((email) => {
        return trx("users")
          .returning("*")
          .insert({
            username: username,
            email: email[0].email,
          })
          .then((user) => {
            res.send(user[0]);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json("unable to sing up"));
});

// app.get("/:id", (req, res) => {
//   const { id } = req.params;
//   let found = false;
//   database.users.forEach((user) => {
//     if (user.id === id) {
//       found = true;
//       return res.json(user);
//     }
//   });
//   if (!found) {
//     res.status(404).json("no such user");
//   }
// });

// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//   // Store hash in your password DB.
// });

// Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
//   // result == true
// });
// bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
//   // result == false
// });

app.listen(8080, () => {
  console.log(`server is running on PORT: 8080`);
});

// /signup -> POST user
// /login -> post success/fail
// /movie => movie id = get
