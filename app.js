// Variables initialization
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Action:
app.engine('handlebars', exphbs.engine({
    extname: "handlebars",
    defaultLayout: "main",
    layoutsDir: __dirname + "/layouts",
}));

app.set('view engine', 'handlebars');

// Route + rendering using EJS
app.get('/', (request, response) => {
    response.render("index", {
        loggedIn: true,
        username: "Johnson", 
        title: "Home"
    })
});

// Start server
app.listen(3000, ()=> {
    console.log("Running on port 3000");
});