// Importing necessary modules and packages
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profile");
// const courseRoutes = require("./routes/courseRoutes");
const paymentRoutes = require("./routes/Payments");
const contactUsRoute = require("./routes/Contact");
// const adminRoutes = require("./routes/adminRoutes")
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// Setting up port number
const PORT = process.env.PORT || 5000;

// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: ["http://localhost:3000", "https://edtech-website-tau.vercel.app", "*"],
		credentials: true
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/"
	})
);

// Connecting to cloudinary
cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/reach", contactUsRoute);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
