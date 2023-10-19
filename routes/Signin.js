const JWT_SECRET = process.env.JWT_SECRET; 

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please add both email and password" });
    }

    try {
        const savedUser = await User.findOne({ email });

        if (!savedUser) {
            return res.status(422).json({ error: "Invalid Email or password" });
        }

        const doMatch = await bcrypt.compare(password, savedUser.password);
        
        if (doMatch) {
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            const { _id, name, followers, following, pic } = savedUser;
            return res.json({ token, user: { _id, name, email, followers, following, pic } });
        } else {
            return res.status(422).json({ error: "Invalid Email or password" });
        }
    } catch (err) {
        console.error("Error during sign in:", err);   
        return res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
});
