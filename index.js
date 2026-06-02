const express = require("express");
const cors = require("cors");
const os = require("os");
const process = require("process");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // JSON handle karne ke liye
app.set("trust proxy", true); // Real IP ke liye agar cloud par host karein

// ==========================================
// 🚀 GET API ENDPOINT
// ==========================================
app.get("/api/data", (req, res) => {
  // 1. Client (User) ki basic information
  const clientInfo = {
    ip_address:
      req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    user_agent: req.headers["user-agent"], // Browser aur device ki detail
    method: req.method,
    url_path: req.originalUrl,
  };

  // 2. Server (Aapke Node.js Host) ki system details
  const serverInfo = {
    os_platform: os.platform(),
    os_release: os.release(),
    total_ram_mb: Math.round(os.totalmem() / 1024 / 1024),
    free_ram_mb: Math.round(os.freemem() / 1024 / 1024),
    cpu_architecture: os.arch(),
    node_version: process.version,
    uptime_seconds: Math.round(process.uptime()),
  };

  // 3. Dummy Data (Jaise aapne pehle banaya tha)
  const usersData = [];
  for (let i = 1; i <= 5; i++) {
    // Maine loop 5 tak rakha hai testing ke liye
    usersData.push({
      id: i,
      name: `User ${i}`,
      status: i % 2 === 0 ? "active" : "inactive",
    });
  }

  // 4. Response send karna (JSON format mein)
  res.status(200).json({
    success: true,
    message: "GET request successful!",
    client_info: clientInfo,
    server_info: serverInfo,
    data: usersData,
  });
});

app.get("/data", (req, res) => {
  const data = [];

  for (let i = 1; i <= 5; i++) {
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
        hostname: req.hostname,
      },
    });
  }
  ``;

  console.log("/data");
  res.json({
    success: true,
    count: data.length,
    data,
  });
});

// Server Start Karna
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on: http://localhost:${PORT}`);
  console.log(
    `👉 GET API Test karne ke liye browser mein kholiye: http://localhost:${PORT}/api/data`,
  );
});
