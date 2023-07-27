const express = require("express");
const dotenv = require("dotenv");
const app = express();
// app.use( cors())
dotenv.config({
  path: "./.env"
});
require("./db/conn");
const Donor = require("./models/donoeSchema");
app.use(express.json());
app.use(require("./routes/auth.js"));
app.use(require("./routes/donorTimeline.js"));
const cors = require("cors");
app.use( cors());

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("middleware occures");
  next();
};

app.listen(PORT, () => {
  console.log(`donationService listening http://localhost:${PORT}`);
});

//   mongodb+srv://varidhsrivastava:<password>@cleanclosetcluster.bcprnbj.mongodb.net/?retryWrites=true&w=majority