const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes")
require("dotenv").config()
const cors = require('cors')


// Connect to MongoDB database
mongoose
	// .connect("mongodb://localhost:27017/form", { useNewUrlParser: true })
	.connect(process.env.MONGO_DB_URL,
		{ useUnifiedTopology: true },
		{ useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(cors())

		app.use(express.json()) 
		app.use("/api", routes) 


		app.listen(5000, () => {
			console.log("Server has started!")
		})

		// const express = require("express");
		// const debug = require("debug")("server");

		// const app = express();
		// const port = 5000 || 3001;

		// // NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
		// app.use(function (req, res, next) {
		// 	res.header("Access-Control-Allow-Origin", "*");
		// 	res.header(
		// 		"Access-Control-Allow-Headers",
		// 		"Origin, X-Requested-With, Content-Type, Accept"
		// 	);
		// 	next();
		// });

		// // API endpoint
		// app.post("/api/", (req, res) => {
		// 	res.send({

		// 	});
		// });

		// app.listen(port, () => debug(`Listening on port ${port}`));
	})