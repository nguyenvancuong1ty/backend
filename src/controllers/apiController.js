const connection = require('../config/connect');

const apiGetUsers = async (req, res) => {
    const sql = 'select * from Users';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiCreateUser = async (req, res) => {
    const { email, username, password } = req.body;
    const sql = `INSERT INTO Users(email, userName,authorization, password) values(?,?,?,?)`;
    let [result, fields] = await connection.query(sql, [email, username, 0, password]);
    return res.status(200).json({
        statusCode: 200,
    });
};

const apiUpdateUser = async (req, res) => {
    const { id, email, username, password } = req.body;
    const sql = 'update Users set email = ?, userName = ?, password = ? where id = ?';
    const [result, fields] = await connection.query(sql, [email, username, city, id]);
    return res.status(200).json({
        statusCode: 200,
    });
};

const apiDeleteUser = async (req, res) => {
    const sql = 'delete from Users where id = ?';
    const userId = req.body.id;
    const [result, fields] = await connection.query(sql, [userId]);
    return res.status(200).json({
        statusCode: 200,
        result: result,
    });
};

//Login
const apiLogin = async (req, res) => {
    const { username, password } = req.body;
    const sql = 'select * from Users where userName = ? and password = ?';
    const [result, fields] = await connection.query(sql, [username, password]);
    if (result.length) {
        return res.status(200).json({
            statusCode: 200,
            data: result,
        });
    } else {
        res.send('Invalid Username or Password');
    }
};

//Info

const apiGetInfo = async (req, res) => {
    const sql = 'select * from introduceshop';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

//Get Cakes
const apiGetCakes = async (req, res) => {
    const sql = 'select * from cakes';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiGetNewProduct = async (req, res) => {
    const sql = 'select * from newproduct';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiGetVoucher = async (req, res) => {
    const sql = 'select * from voucher';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

//
const apiGetCakedatil = async (req, res) => {
    const sql = 'select * from cakedetail';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiGetCakedatilA = async (req, res) => {
    const sql = 'select * from cakedetail where sale >= ?';
    const { sale } = req.params;
    const [result, fields] = await connection.query(sql, [sale]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

//
// News
const apiGetNews = async (req, res) => {
    const sql = 'select * from news';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

//Recipe
const apiGetRecipe = async (req, res) => {
    const sql = 'select * from cakerecipe';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

module.exports = {
    apiGetUsers,
    apiCreateUser,
    apiDeleteUser,
    apiUpdateUser,
    apiLogin,
    apiGetInfo,
    apiGetCakes,
    apiGetNewProduct,
    apiGetVoucher,
    apiGetCakedatil,
    apiGetCakedatilA,
    apiGetNews,
    apiGetRecipe,
};
