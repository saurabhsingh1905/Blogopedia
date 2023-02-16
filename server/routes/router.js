const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
var bcrypt = require("bcryptjs");

//FOR USER REGISTRATION / STORING USERS DATA


router.post("/register", async (req, res) => {

    console.log(req.body)
    console.log("try")

    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" });
    }
    console.log("just outside try")
    try {
        console.log(" inside try")
        const preuser = await userdb.findone({ email: email });
        if (preuser) {
            res.status(422).json({ error: "This email already exits" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and confirm password doesn't match" })
        } else {
            //finally database me value set kr rhe hai fname:fname krne se better, to use destructuring
            console.log("inside else")
            const finalUser = new userdb({
                fname, email, password, cpassword
            });



            const storeData = await finalUser.save();
            console.log(storeData);
        }
    } catch (error) {
        res.status(422).json(error)
        console.log("catch block error ");
    }
}
);

module.exports = router;



//password encryption/decryption is a 2 way procedure may have security issue
//12345 ----> @jvfnvnfvinfn
//@jvfnvnfvinfn -----> 12345

//Hashing algorithm is a one way connection
//12345 ----> @jvfnvnfvinfn
//12345 ----> @jvfnvnfvinfn jb user enter kiya password toh fir usko hash kr dega and compares with the hashed password stored in database 