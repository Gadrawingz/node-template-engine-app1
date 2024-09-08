// Variables initialization
const express = require('express');
const eLayout = require('express-ejs-layouts');
const app = express();

// Template engine definition(EJS):
app.use(eLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Route + rendering using EJS
app.get('', (request, response) => {
    const locals = {
        title: "Homepage | Simple Blog",
        description: "Simple Blog, created using Node.js"
    }
    response.render("index", {locals});
});

app.get('/about', (request, response) => {
    const locals = {
        title: "About Us | Simple Blog",
        description: "Simple Blog, created using Node.js"
    }
    response.render("about", {locals});
});

app.get('/contact', (request, response) => {
    response.render("contact");
});

// Start server
app.listen(3000, ()=> {
    console.log("Site is unning on port 3000");
});