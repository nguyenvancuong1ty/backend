const connection = require('../config/connect')
const Home = (req, res) => {
        res.render('home.ejs');
}

const View = (req,res) => {
    //Model
    res.render('index.ejs');
}

const AddUser =  (req, res) => {
    const {email, name, city} = req.body;
    const sql = 'INSERT INTO Users(email, name, city) values(?,?,?)';
    connection.query(sql,[email, name, city], (error, result) => {
            console.log(result);
            res.send('finish')
        }
    );  
}

module.exports = {Home, View, AddUser}