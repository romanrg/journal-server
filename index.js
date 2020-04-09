require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 8080;


app.use(bodyParser.json({type: "application/json"}));
app.use(cors());


const api = require("./routes/api");

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect((err, db) => db.close());


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected", () => console.log("mongoose connected"));


app.use("/api", api);

app.all("*", (req, res) => res.sendStatus(404));







app.listen(PORT, () => console.log(`listen on ${PORT} port`));