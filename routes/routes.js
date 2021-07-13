const express = require("express")
const Orders = require("../models/Orders")
const router = express.Router()



router.post("/orders", async (req, res) => {
	const post = new Orders({
		tokenAddress: req.body.tokenAddress,
		ethAmount: req.body.ethAmount,
		tokenAmount:req.body.tokenAmount,
		numberOfBuys:req.body.numberOfBuys
	})
	await post.save()
	res.send(post)
})

module.exports = router