const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const async = require("hbs/lib/async");
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "./public");
const templates_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");

require("./db/conn");
const Contact = require("./models/contact");

app.use(express.static(static_path));
            
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index"); 
}) 

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/contact", (req, res) => { 
    res.render("contact"); 
})

app.post("/contact", async (req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            question: req.body.question
        })

        const contact = await newContact.save();
        res.render("about");

    } catch (error) {
        res.status(400).send(error)
    }
    
})

app.listen(port, () => {
    console.log(`The server is listening at port no. ${port}`);
});  




