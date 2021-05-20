const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Handle static files
app.use(express.static(__dirname + "/dist/"));

// Serve index.html for every request
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname, "/dist/index.html");
});

// Spin up our server
app.listen(port, () => {
  console.log(`Node.js listening on port ${port}...`);
});
