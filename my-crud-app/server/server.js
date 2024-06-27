const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_app'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Create a table
app.get('/createTable', (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, title VARCHAR(255), firstName VARCHAR(255), lastName VARCHAR(255), position VARCHAR(255), company VARCHAR(255), businessArena VARCHAR(255), employees VARCHAR(255), street VARCHAR(255), additionalInfo VARCHAR(255), zipCode VARCHAR(255), place VARCHAR(255), country VARCHAR(255), code VARCHAR(255), phoneNumber VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Users table created...');
    });
});

// Insert user
app.post('/addUser', (req, res) => {
    let user = req.body;
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send('User added...');
    });
});

// Get users
app.get('/getUsers', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Update user
app.put('/updateUser/:id', (req, res) => {
    let sql = 'UPDATE users SET ? WHERE id = ?';
    db.query(sql, [req.body, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User updated...');
    });
});

// Delete user
app.delete('/deleteUser/:id', (req, res) => {
    let sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User deleted...');
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
