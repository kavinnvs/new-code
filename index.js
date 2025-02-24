const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to serve static files (like your homepage)
app.use(express.static("public"));

// Route for the homepage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
