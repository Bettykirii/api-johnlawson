const mongoose = require("mongoose")

const schema = mongoose.Schema({
	tokenAddress: String,
	ethAmount: String,
    tokenAmount:String,
    numberOfBuys: String
})

module.exports = mongoose.model("Orders", schema)