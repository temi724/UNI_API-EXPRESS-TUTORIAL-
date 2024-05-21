// import express from "express"
const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const app = express()
const router = require("./routes/index")

app.use(express.json())
app.use(cors())
app.use(body_parser.json())
app.use("/api/unilist/v1", router())

const port = 4000
app.listen(port, () => console.log("This app is running on port", port))