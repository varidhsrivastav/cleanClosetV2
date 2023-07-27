const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const app = express();

require('../db/conn.js');
// const Addngo = require("../models/addngoSchema.js");
const Donated = require("../models/donatedItem.js");
const Addngo = require("../models/addNgo.js");
const ContactUs = require("../models/contactUs.js");
const Donor = require("../models/donoeSchema.js");
const User = require("../models/registerAdmin.js");
const DonorForm = require("../models/DonateForm.js");
router.get("/", (req, res) => {
    res.send("Hello home from donationService router.js");
});



// Donor form
router.post('/donateItem', async (req, res) => {
    // res.send("hiiii")
    const {
        donorName,
        donorEmail,
        donorPhone,
        donorAddress,
        typeofcloth,
        quantity,
        condition,
        additionalDetails,
    } = req.body;
    if (!donorName || !donorEmail || !donorPhone || !donorAddress || !typeofcloth || !quantity || !condition || !additionalDetails) {
        return res.status(422).json({
            "error": "Please fill all fields to donate"
        });
    }
    try {
        const donorExist = await DonorForm.findOne({
            donorEmail: donorEmail
        });
        if (donorExist) {
            return res.status(422).json({
                error: "ngo already exist"
            });

        }
        const donatedcloth = new DonorForm({
            donorName,
            donorEmail,
            donorPhone,
            donorAddress,
            typeofcloth,
            quantity,
            condition,
            additionalDetails,
        });

        await donatedcloth.save();


        res.status(201).json({
            message: "user register s"
        });
    } catch (err) {
        console.log('Error:', err);
    }


})
// Admin Registeration 
router.post('/registerAdmin', async (req, res) => {
    // console.log(req.body);
    // res.json({
    //     message: req.body
    // });
    const {
        name,
        email,
        phone,
        work,
        password,
        cpassword,
    } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({
            "error": "Please fill all fields to regiaster admin"
        })
    }
    try {
        const userExist = await User.findOne({
            email: email
        });
        if (userExist) {
            return res.status(422).json({
                error: "Admin already exist"
            });
        } else if (password != cpassword) {
            return res.status(422).json({
                error: "pass not matching"
            });
        } else {

            const user = new User({
                name,
                email,
                phone,
                work,
                password,
                cpassword,
            })

            await user.save();
            res.status(201).json({
                message: "user registeration sucess"
            })
        }

    } catch (err) {
        console.log('Error:', err);
    }
})
// adminLogin

router.post('/login', async (req, res) => {
    // console.log(req.body)
    try {

        const {
            email,
            password
        } = req.body;
        if (!email || !password) {
            return res.status(422).json({
                "error": "Please fill all fields"
            })
        }
        const userLogin = await User.find({
            email: email
        });
        // console.log(userLogin);
        if (userLogin) {

            if (userLogin.password != password) {
                res.status(400).json({
                    error: "Invalid credential f"
                })
            } else {
                res.status(201).json({
                    message: "user Signin Successfully"
                });
            }
        } else {
            res.status(400).json({
                error: "Invalid credential c"
            })
        }

    } catch (err) {
        console.log('Error:', err);
    }
});
// Add ngo 
router.post('/addngo', async (req, res) => {
    // console.log(req.body);
    // res.send("reg page") 
    const {
        ngoname,
        ngoType,
        NgoAddress,
        ngodescription,
    } = req.body;
    if (!ngoname || !ngoType || !NgoAddress || !ngodescription) {
        return res.status(422).json({
            "error": "Please fill all fields"
        })
    }
    try {
        const ngoExist = await Addngo.findOne({
            ngoname: ngoname
        });
        if (ngoExist) {
            return res.status(422).json({
                error: "ngo already exist"
            });

        }
        const ngo = new Addngo({
            ngoname,
            ngoType,
            NgoAddress,
            ngodescription,
        });

        await ngo.save();


        res.status(201).json({
            message: "user register s"
        });
    } catch (err) {
        console.log('Error:', err);
    }
})


// Add donatedItems
router.post('/donateItem',
    async (res, req) => {
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
            const donorExist = await Donated.findOne({
                email: email
            });
            if (donorExist) {
                return res.status(422).json({
                    error: "already exist"
                });

            }

            const donated = new Donated({
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

            await donated.save();


            res.status(201).json({
                message: "user registers"
            });

        } catch (err) {
            console.log(err);
        }

    });

router.post("/contactUs", async (req, res) => {
    const {
        yname,
        yemail,
        about,
    } = req.body;
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


// geting user data{}
router.get("/getAdmin", async (req, res) => {
    const rootuser = await User.find({})
    res.send(rootuser)
})
router.get("/getDonatedItem", async (req, res)=>{
    const DonatedItem = await DonorForm.find({})
    res.send(DonatedItem)
})
router.get("/getAddedNgo", async (req, res)=>{
    const AddedNGO= await Addngo.find({})
    res.send(AddedNGO)
})

module.exports = router;