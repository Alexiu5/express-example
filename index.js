const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const pug = require("pug")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/public/')

app.get('/', function(req, res){
    res.render('index', {
        title: 'Te quiero',
        contenidos:'hellouuu',
        people: {}
    });
});

app.get('/home', function(req, res){
    console.log("i love u")
    res.render('pagina', {
        people: {}
    });
});

app.post('/saludar', function(req, res){
    console.log(req.body)
    res.redirect("/")
});

app.listen(5050, function(){
    console.log("holii")
})

