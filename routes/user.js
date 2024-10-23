const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const userRouter = express.Router();




// Welcome route
userRouter.get("/", (req, res) => {
    res.send("Welcome to the Home page");
});

// Login route
userRouter.post('/login', async (req, res) => {
    console.log("loging route");
  //  return res.status(400).json({ message:  req.body });
    try {
        const { userId, password } = req.body;
        const userFound = await User.findOne({ userId });
        console.log(JSON.stringify(req.body, null, 2));
        if (!userFound) {
            return res.status(400).json({ message: "User not found" });
        } else {
            console.log("req.body " + req.body);
            console.log("userId" + userId);
            console.log("userFound " + userFound);
            console.log("password " + "password");
            console.log("userFound password " +userFound.password);
            // Compare hashed password
            const isMatch = await bcrypt.compare("123456", userFound.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Incorrect Password" });
            } else {
                console.log("SUCCESS isMatch " + isMatch);
                const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                const { password, ...userWithoutPassword } = userFound._doc;
                return res.json({ token, ...userWithoutPassword });
            }
        }
    } catch (e) {
        console.log('Catch block');
        console.log(e.message);
        res.status(500).json({ error: e.message });
    }
});

userRouter.post('/signup', async (req, res) => {
    try {
        const { userId, password,rule,
            discount,
            name, } = req.body;

        const userExists = await User.findOne({ userId });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            userId,
            password: hashedPassword,
            rule,
            discount,
            name,


        });

        await newUser.save();

       return res.status(201).json({message: "Succfully "});

        // const { password: _, ...userWithoutPassword } = newUser._doc;
        // return res.status(201).json({ ...userWithoutPassword });

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Doctor route
userRouter.get('/doctor', async (req, res) => {
    try {
        const doctors = await User.find({ rule: 'doctor' });
        res.json(doctors);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = userRouter;
