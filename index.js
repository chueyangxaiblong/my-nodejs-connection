const express = require("express")
const mongoose = require("mongoose")

const app = express()

const username ="chueyang"
const password = "hnPB111"
const cluster = "cluster0"
const dbname = "log-monitoring"
const sty = "unsiei"


app.use(express.json())
app.use(express())

mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.cw347.mongodb.net/${dbname}?retryWrites=true&w=majority`
)
