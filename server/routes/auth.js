const express = require("express");
const router = express.Router();

require('../db/conn.js');
const ContactUs = require("../models/contactUs.js");
const Donor = require("../models/donoeSchema.js");
router.get("/", (req, res) => {
    res.send("Hello home from donationService router.js");
});


router.post("/donorRegister", async (req, res) => {
    const {
        name,
        email,
        phone,
        gender,
        infection,
        infectionName,
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

    if (!name || !email || !phone || !gender || !infection || !infectionName || !pickupService || !NumberOfCloths || !weightOfCloths || !durationOfCloths || !conditionOfCloths || !AddressLine1 || !AddressLine2 || !state || !city || !country || !pinCode || !dateOfPickup) {
        return res.status(422).json({
            error: "plz"
        });
    };

    try {
        const donorExist = await Donor.findOne({
            email: email
        });
        if (donorExist) {
            return res.status(422).json({
                error: "already exist"
            });
        }

        const donor = new Donor({
            name,
            email,
            phone,
            gender,
            infection,
            infectionName,
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

        await donor.save();


        res.status(201).json({
            message: "user register s"
        });

    } catch (err) {
        console.log(err);
    }


});

router.post("/contactUs", async (req, res)=>{
    const {
        yname,
        yemail,
        about,}=req.body;
        if (!yname || !yemail || !about) {
            return res.status(422).json({
                error: "plz"
            });
        };
        const contactUs = new ContactUs({
            yname,
            yemail,
            about,
            
        });

        await contactUs.save();


        res.status(201).json({
            message: "send"
        });

    })


module.exports = router;

