const cors = require("cors")
const express = require("express")
require("express-async-errors")
const app = express()

const middleware = require("./utils/middleware")
const notesRouter = require("./controllers/notes")


app.use(cors())
app.use(express.static("build"))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use("/api/notes", notesRouter)

if(process.env.NODE_ENV === "test"){
    const testRouter = require("./controllers/testing")
    app.use("/api/testing", testRouter)
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app