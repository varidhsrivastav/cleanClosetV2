require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Donor = require('./models/donor')

main().catch(err => console.log(err))
async function main() {
    await mongoose.connect(process.env.MONGO_URL)
}

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/donorRegister', async (req, res) => {
    const data = req.body
    const newDonor = new Donor(data)
    await newDonor.save()
    res.status(200).json(newDonor)
})

app.listen(8080, () => {
    console.log("Server started at 8080 port!")
})