const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user.js");
const path = require("path");


//apna mongo url save karo
const MONGO_URL = "mongodb://127.0.0.1:27017/byteeDB";

main()
  .then(() => {
    console.log("Connected to DB");
  })
   .catch((err) => console.log(err));


async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("views", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Sign-up Route
app.get("/signup", async (req, res) => {
    try {
        const { username, email_id, photourl } = req.body;

        const existingUser = await User.findOne({ email_id });
        if (existingUser) {
            return res.status(400).send("Email already exists");
        }

        const newUser = new User({ username, email_id, image: photourl });

        await newUser.save();
        res.status(201).send("User created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 
    }
});

//Information taking from profile
app.get("/profile/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { tags, description, year } = req.body;

        const rating = Math.floor(Math.random() * 5) + 1
        
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send("User not found");
        }

        user.tags = tags;
        user.description = description;
        user.year = year;
        user.rating = rating;

        await user.save();

        res.status(200).send("Profile updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 
    }
});

//Search users by tags and sort by rating
app.get("/users/tag/:tag", async (req, res) => {
    try {
        const { tag } = req.params;
       
        const usersWithTag = await User.find({ tags: tag }).sort({ rating: -1 });
        res.render("./users/index.ejs", { allUsers: usersWithTag });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 
    }
});


//basic request
app.get("/", (req, res) => {
    res.send("Hi, i'm root");
});

//host server to 8080
app.listen(8080, () => {
    console.log("Server is listening to 8080");
});
