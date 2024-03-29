require("dotenv").config()

const PORT = process.env.PORT
//Si usas mongo-db
// let MONGO_URL = process.env.MONGODB_URL
// if (process.env.NODE_ENV === "test") {
//   MONGO_URL = process.env.TEST_MONGODB_URI
// }
module.exports = { PORT }