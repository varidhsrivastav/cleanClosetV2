const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
// app.use( cors())
dotenv.config({ path: "./.env" });
require("./db/conn");
const Donor = require("./models/donoeSchema");
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use(require("./routes/auth.js"));
app.use(require("./routes/donorTimeline.js"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("middleware occures");
  next();
};

app.listen(PORT, () => {
  console.log(`donationService listening http://localhost:${PORT}`);
});

//   mongodb+srv://varidhsrivastava:<password>@cleanclosetcluster.bcprnbj.mongodb.net/?retryWrites=true&w=majority
