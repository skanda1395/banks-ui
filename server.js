const express = require("express");
const app = express();
const serveStatic = require("serve-static");
const path = require("path");

const port = process.env.PORT || 8080;

// Handle static files
app.use(serveStatic(path.join(__dirname, "/dist/")));

// Serve index.html for every request
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

// Spin up our server
app.listen(port, () => {
  console.log(`Node.js listening on port ${port}...`);
});
