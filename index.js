const express = require("express");
const app = express();
const path = require("path");

// static frontend
app.use(express.static("public"));

// API
app.get("/data", (req, res) => {

    const data = [];

    for (let i = 1; i <= 125; i++) {
        data.push({
            id: i,
            name: `User ${i}`,
            email: `user${i}@example.com`,
            status: i % 2 === 0 ? "active" : "inactive",

            request: {
                method: req.method,
                url: req.originalUrl,
                headers: req.headers,
                query: req.query,
                params: req.params,
                ip: req.ip,
                hostname: req.hostname
            }
        });
    }

    res.json({
        success: true,
        count: data.length,
        data
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});