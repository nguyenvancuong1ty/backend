const connection = require('../config/connect');

const getUsers = async() => {
    sql = 'select * from Users';
    const [result, fields] = await connection.query(sql);
    return result;
}

const createUser = async(req) => {
    const {email, name, city} = req.body;
    const sql = `INSERT INTO Users(email, name, city) values(?,?,?)`;
    let [result, fields] = await connection.query( sql,[email,name,city]);
}

const deleteUser = async(req) => {
    const idUser = req.params.id;
    sql = 'delete from Users where id =?';
    const [result, fields] = await connection.query(sql,[idUser]);
}

const updateUser = async(req) => {
    const {email, name, city} = req.body;
    const idUser = req.params.id;
    console.log(idUser);
    sql = 'update Users set email = ?, name = ?, city = ? where id = ?';
    const [result, fields] = await connection.query(sql, [email, name, city, idUser])
}

const getUserById = async(req) => {
    const sql = 'select * from Users where id = ?';
    const idUser = req.params.id;
    const [result, fields] = await connection.query(sql, [idUser]);
    return result;
}

module.exports = {getUsers, createUser, deleteUser, updateUser, getUserById}