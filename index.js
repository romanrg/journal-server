require("dotenv").config();
const PORT = process.env.PORT | 8080;
const URI = process.env.URI;

const express = require("express");
const app = express();
const cors = require("cors");
const api = require("./routes/api");

const { establishConnectionWithDB } = require("./MongoClient");

establishConnectionWithDB(URI);

app.use(express.json());

app.use(cors());

app.use("/api", api);

app.all("*", (req, res) => res.sendStatus(404));

app.listen(PORT);