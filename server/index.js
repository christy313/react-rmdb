import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const database = {
  users: [
    {
      id: "1",
      username: "mary",
      email: "mary@gmail.com",
      password: "123",
    },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/login", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  }
  res.status(400).json("error");
});

app.post("/signup", (req, res) => {
  const { username, email } = req.body;

  database.users.push({
    id: "2",
    username: username,
    email: email,
  });
  res.json(database.users[database.users.length - 1]);
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
