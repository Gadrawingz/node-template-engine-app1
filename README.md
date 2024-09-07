# NODE-EXPRESS DOJO - TEMPLATE ENGINE

## WHAT IS TEMPLATE ENGINE?

A template engine enables you to use static template files in your application. At runtime, the template engine
replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
This approach makes it easier to design an HTML page.

## USES

Template Engines allow you to generate dynamic HTML content by combining templates with data.

## SPECIFIC OBJECTIVES

This app demonstrates the crucial concepts of Template Engines and their integration with Node.js using the Express.js frameworks

## BENEFITS ALONGSIDE USING TEMPLATE ENGINE

**1. Code Reusability:**
Templates primarily helps to be reused across multiple pages or views.

**2. Modularity:**
Use of templates helps to break down complex UI components into manageable parts.

**3. Data Binding:**
Use of templates makes it easy to bind dynamic data to templates for rendering.

**4. Cleaner Code:**
Using templates also makes it easy to separate logic from presentation and organize code.

### COMMANDS ISSUES ARE BELOW:

#### I navigated to project like that

> cd project-directory

### Installed express dependency

> npm install express

### I created directory to store views like:

> mkdir views

I installed the main 3 template engine packages for node.js namely ejs, express-handlebars and pug

> npm install ejs express-handlebars pug

### I installed nodemon

This **nodemon** helps to automatically restart node app in case it is needed.

> npm install --save-dev nodemon

#### **Configurations**

>(Configure nodemon)
>"scripts": {
> "start": "node index",
> "dev": "nodemon index"
>},
>
>"devDependencies": {
> "nodemon": "^3.1.4"
>}

### Running the app

>npm run dev # for developing:
>npm start # for starting the server regularly

### For Version control

>git add .
>git commit -m "My message"
>git remote set-url origin https://Gadrawingz:ghp_??@github.com/Gadrawingz/node-template-engine-app1.git

### Happy coding
