import express from "express";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const database = {
  users: [
    {
      id: "1",
      name: "mary",
      email: "mary@gmail.com",
      password: "123",
    },
  ],
};

app.get("/", (req, res) => {
  res.send("hello");
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

app.listen(8080, () => {
  console.log(`server is running on PORT: ${8080}`);
});

// /signup -> POST user
// /login -> post success/fail
// /movie => movie id = get
