
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 8134;

app.use(bodyParser.json());

const dbConn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

app.get('/products', (req, res) => {
    const { color, size, price } = req.query;
    let query = 'SELECT * FROM products';

    if (color || size || price) {
        query += ` WHERE color = '${color}' OR size = '${size}' OR price = '${price}'`;
    }

    dbConn.query(query, (err, results) => {
        if (err) {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// const mysql = require("mysql")
// const express = require("express");
// const path = require("path");

// let db =mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
// })

// .then((connection) => {
//     db = connection
//     console.log("Connected DB: Sec03PjGr10", db.config.database)
// })
// const app = express()

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/html/search.html'));
// });

// app.post("/form-submit", (req, res) => {
//     const choice = req.body.search_choice
//     const value = req.body.search_value

// app.use('/', (req, res) => {
//     console.log("404: Invalid accessed")
//     res.status(404).sendFile(path.join(__dirname + '/html/notfound.html'));
// });

// app.listen(process.env.PORT, () => 
//     console.log("Server listening on port:", process.env.PORT)
// )
// })