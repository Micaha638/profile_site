const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/aboutme',(req,res) =>{
    res.render('aboutme')
})

app.get('/contact',(req,res) =>{
    res.render('contact')
})
app.get('/discordbot',(req,res) =>{
    res.render('discordbot')
})
app.get('/banksite',(req,res) =>{
    res.render('banksite')
})
app.listen(3000, () => {
    console.log("listening on port 3000");
});
