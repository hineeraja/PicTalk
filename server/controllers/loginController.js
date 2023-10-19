const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/Login.js");

// SignUp Controller
exports.signup = (req, res) => {
	const { name, email, password } = req.body;
	// Empty Field  Validation
	if (!name || !password || !email) {
		return res.json({ error: "Please submit all required field" });
	}
	// User validation
	User.findOne({ Email: email })
		.then((savedUser) => {
			// User validation
			if (savedUser) {
				return res.json({ error: "This Email Is Already Used !" });
			}
			// Encrypt password before storing into DB
			bcrypt.hash(password, 10).then((encyptedHashPW) => {
				const user = new User({
					Name: name,
					Email: email,
					Password: encyptedHashPW,
				});
				// User saved to DB
				user.save()
					.then((user) => {
						res.json({ message: "User information saved successfully " });
					})
					.catch((err) => {
						console.log(err);
					});
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

// SignIn Controller
exports.signin = (req, res) => {
	const { email, password } = req.body;
	// Empty Field  Validation
	if (!email || !password) {
		return res.json({ error: "Please provide Email or Password" });
	}
	// Verify if the email is invalid or already exists
	User.findOne({ Email: email })
		.then((savedUser) => {
			if (!savedUser) {
				return res.json({ error: "Invalid Email or Password" });
			}
			bcrypt.compare(password, savedUser.Password).then((doMatch) => {
				if (doMatch) {
					// jwt token created
					const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
					// retrieve the user info
					const { _id, Name, Email, Followers, Following } = savedUser;
					res.json({ token, user: { _id, Name, Email, Followers, Following } });
				} else {
					return res.json({
						error: "Invalid Email or Password",
					});
				}
			});
		})
		.catch((err) => {
			console.log(err);
		});
};