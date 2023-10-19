// const express = require('express')
// const mongoose = require('mongoose');
// const app = express()
// const port = 3001


// app.get('/', (req, res) => {
//     res.send({
//         status: 200,
//         msg: "App is working fine "
//     })
// })

// app.use(express.json())

// app.listen(port, () => {
//     console.log(`example port ${port}`)
// })

const express = require("express");
const mongoose = require("mongoose");
const todoModal = require("./model/todo");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

const port = 3001;
mongoose
  .connect("mongodb+srv://blog:blog@cluster0.hw5owlh.mongodb.net/")
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  const todo = await todoModal.find({});
  res.send({
    status: 200,
    msg: "All ",
    todo,
  });
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const todo = await todoModal.create({ ...req.body });
    res.status(201).send({ status: 201, todo });
  } catch (err) {
    res
      .status(500)
      .send({ status: 500, error: err, msg: "internal sever error" });
  }
});

app.delete("/:id", async (req, res) => {
  
  try {
    const todo = await todoModal.findByIdAndDelete(req.params.id);
    res.status(200).send({ status: 200, todo });
  } catch (err) {
    res
      .status(500)
      .send({ status: 500, error: err, msg: "internal sever error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
