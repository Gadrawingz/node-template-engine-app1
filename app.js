// Initialized variables
const express = require('express');
const app = express();

// Set EJS as template engine
app.set("view engine", "ejs");

// Routes
app.get("/", (request, response) => {
    response.render("index", 
        {loggedIn: true, username: "Gad"}
    );
})

// Start server
app.listen(3000, ()=> {
    console.log("Running on port 3000");
});