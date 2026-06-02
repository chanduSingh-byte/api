const express = require("express");
const path = require("path");

// Express Router initialize karein
const router = express.Router();

// Route 1: Home Page ( / )
router.get("/", (req, res) => {
    // Dhyan dein: hum yahan "../" use kar rahe hain kyunki ye file 'routes' folder ke andar hai,
    // aur public folder ek step bahar (pichhe) hai.
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Route 2: User Page ( /user )
router.get("/server", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "user.html"));
});


router.use((req, res) => {
    // get("*") ki jagah use() lagaya aur status(404) add kiya
    res.status(404).sendFile(path.join(__dirname, "../public", "404.html"));
});
// Is router ko export karein taaki server.js isko use kar sake
module.exports = router;