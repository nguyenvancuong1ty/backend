const connection = require('../config/connect');

const getUsers = async () => {
    const sql = 'select * from users';
    const [result, fields] = await connection.query(sql);
    return result;
};

const createUser = async (req) => {
    const { email, username, password } = req.body;
    const sql = `INSERT INTO users(email, userName,authorization, password) values(?,?,?,?)`;
    let [result, fields] = await connection.query(sql, [email, username, 0, password]);
};

const deleteUser = async (req) => {
    const idUser = req.params.id;
    sql = 'delete from users where id =?';
    const [result, fields] = await connection.query(sql, [idUser]);
};

const updateUser = async (req) => {
    const { email, name, city } = req.body;
    const idUser = req.params.id;
    console.log(idUser);
    sql = 'update users set email = ?, name = ?, city = ? where id = ?';
    const [result, fields] = await connection.query(sql, [email, name, city, idUser]);
};

const getUserById = async (req) => {
    const sql = 'select * from users where id = ?';
    const idUser = req.params.id;
    const [result, fields] = await connection.query(sql, [idUser]);
    return result;
};

module.exports = { getUsers, createUser, deleteUser, updateUser, getUserById };
