const express = require("express");
const router = express.Router();

const Donor = require("../models/donoeSchema");
require("../db/conn.js");

router.get("/donor/reg", async (req, res) => {
  await Donor.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/donor/reg", async (req, res) => {
  const {
    name,
    email,
    phone,
    gender,
    infection,
    pickupService,
    NumberOfCloths,
    weightOfCloths,
    durationOfCloths,
    conditionOfCloths,
    AddressLine1,
    AddressLine2,
    state,
    city,
    country,
    pinCode,
    dateOfPickup,
  } = req.body;

  const donor = new Donor({
    name,
    email,
    phone,
    gender,
    infection,
    pickupService,
    NumberOfCloths,
    weightOfCloths,
    durationOfCloths,
    conditionOfCloths,
    AddressLine1,
    AddressLine2,
    state,
    city,
    country,
    pinCode,
    dateOfPickup,
  });

  donor
    .save()
    .then(() => res.json("Successfully Saved"))
    .catch((err) => res.json(err));
});

module.exports = router;
