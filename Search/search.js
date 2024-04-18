const mysql = require("mysql")
const express = require("express");
const path = require("path");


let db =mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log("Connected to database:", db.config.database);
});
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/search.html'));
});

app.post("/form-submit", (req, res) => {
    const choice = req.body.search_choice
    const value = req.body.search_value

app.use('/', (req, res) => {
    console.log("404: Invalid accessed")
    res.status(404).sendFile(path.join(__dirname + '/html/notfound.html'));
});

app.listen(process.env.PORT, () => 
    console.log("Server listening on port:", process.env.PORT)
)
})