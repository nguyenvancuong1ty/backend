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

//Add Cake
const apiAddCake = async (req, res) => {
    const { iconLink, nameCategory } = req.body;
    const sql = 'insert into cakes(nameCategory, iconLink) values(?,?)';
    await connection.query(sql, [nameCategory, iconLink]);
    const [result, fields] = await connection.query('select * from cakes');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Update cake
const apiUpdateCake = async (req, res) => {
    const { iconLink, nameCategory, categoryCake } = req.body;
    const sql = 'update cakes set nameCategory = ?, iconLink = ? where categoryCake = ?';
    await connection.query(sql, [nameCategory, iconLink, categoryCake]);
    const [result, fields] = await connection.query('select * from cakes');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};
// Delete type of Cakes
const apiDeleteCakes = async (req, res) => {
    const { id } = req.body;
    const sql = 'delete from cakes where categoryCake = ?';
    const [result, fields] = await connection.query(sql, [id]);
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

// Voucher Get
const apiGetVoucher = async (req, res) => {
    const sql = 'select * from voucher';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Voucher Add
const apiAddVoucher = async (req, res) => {
    const data = req.body;
    const sql = 'insert into voucher(code, date, detail, requirement) values(?,?,?,?)';
    await connection.query(sql, [data.code, data.date, data.detail, data.requirement]);
    const [result, fields] = await connection.query('select * from voucher');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Voucher delete
const apiDeleteVoucher = async (req, res) => {
    const { id } = req.body;
    const sql = 'delete from voucher where id = ?';
    const [result, fields] = await connection.query(sql, [id]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Voucher update

const apiUpdateVoucher = async (req, res) => {
    const data = req.body;
    const sql = 'update voucher set code =?, date =?, detail =? requirement = ? where id = ?';
    await connection.query(sql, [data.code, data.date, data.detail, data.requirement, data.id]);
    const [result, fields] = await connection.query('select * from news');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Get cakes detail
const apiGetCakedatil = async (req, res) => {
    const sql = 'select * from cakedetail';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Delete cake detail

const apiDeleteCakeDetail = async (req, res) => {
    const { id } = req.body;
    const sql = 'delete from cakedetail where id = ?';
    const [result, fields] = await connection.query(sql, [id]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Add cake detail
const apiAddCakeDetail = async (req, res) => {
    const data = req.body;
    const sql = 'insert into news(categoryCake, nameCake, price, sold, inventory, images, sale) values(?,?,?,?,?,?,?)';
    await connection.query(sql, [
        data.categoryCake,
        data.nameCake,
        data.price,
        data.sold,
        data.inventory,
        data.images,
        data.sale,
    ]);
    const [result, fields] = await connection.query('select * from cakedetail');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Update cake details

const apiUpdateCakeDetail = async (req, res) => {
    const data = req.body;
    const sql =
        'update cakedetail set categoryCake =?, nameCake =?, price =?, sold =?, inventory =?, images =?, sale =? where id = ?';
    await connection.query(sql, [
        data.categoryCake,
        data.nameCake,
        data.price,
        data.sold,
        data.inventory,
        data.images,
        data.sale,
        data.id,
    ]);
    const [result, fields] = await connection.query('select * from cakedetail');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

//
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
// News Read
const apiGetNews = async (req, res) => {
    const sql = 'select * from news';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// News Add
const apiAddNews = async (req, res) => {
    const data = req.body;
    const sql = 'insert into news(title, images, detail) values(?,?,?)';
    await connection.query(sql, [data.title, data.images, data.detail]);
    const [result, fields] = await connection.query('select * from news');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// News delete
const apiDeleteNews = async (req, res) => {
    const { id } = req.body;
    const sql = 'delete from news where id = ?';
    const [result, fields] = await connection.query(sql, [id]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// News update

const apiUpdateNews = async (req, res) => {
    const data = req.body;
    const sql = 'update news set title =?, images =?, detail =? where id = ?';
    await connection.query(sql, [data.title, data.images, data.detail, data.id]);
    const [result, fields] = await connection.query('select * from news');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

//Recipe Read
const apiGetRecipe = async (req, res) => {
    const sql = 'select * from cakerecipe';
    const [result, fields] = await connection.query(sql);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Recipe Add
const apiAddRecipe = async (req, res) => {
    const data = req.body;
    const sql = 'insert into cakerecipe(title, images, detail) values(?,?,?)';
    await connection.query(sql, [data.title, data.images, data.detail]);
    const [result, fields] = await connection.query('select * from cakerecipe');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Recipe Delete

const apiDeleteRecipe = async (req, res) => {
    const { id } = req.body;
    const sql = 'delete from cakerecipe where id = ?';
    const [result, fields] = await connection.query(sql, [id]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Recipe Update

const apiUpdateRecipe = async (req, res) => {
    const data = req.body;
    const sql = 'update cakerecipe set title =?, images =?, detail =? where id = ?';
    await connection.query(sql, [data.title, data.images, data.detail, data.id]);
    const [result, fields] = await connection.query('select * from cakerecipe');
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

// Get Cart

const apiGetCart = async (req, res) => {
    const id = req.params.userId;
    const sql =
        'SELECT *, SUM(cart.quantity) as total_quantity FROM cart JOIN cakedetail  ON cart.cakeId = cakedetail.id JOIN users ON cart.userId = users.id WHERE cart.userId = ? GROUP BY userId, cakeId';
    const [result, fields] = await connection.query(sql, [id]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiGetCartById = async (req, res) => {
    const id = req.params.userId;
    const sql = 'select * from cart where userId = ?';
    const [result, fields] = await connection.query(sql, [id]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiPutCart = async (req, res) => {
    const { quantity, userId, cakeId } = req.body;
    const sql = 'UPDATE cart SET quantity = ? WHERE id = (SELECT id FROM cart WHERE userId = ? AND cakeId = ? LIMIT 1)';
    const [result, fields] = await connection.query(sql, [quantity, userId, cakeId]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiDeleteCart = async (req, res) => {
    const { userId, cakeId } = req.body;
    const sql = 'delete from cart where userId = ? and cakeId = ?';
    const [result, fields] = await connection.query(sql, [userId, cakeId]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};

const apiAddCart = async (req, res) => {
    const { userId, cakeId } = req.body;
    const sql = 'insert into cart(userId, cakeId, quantity) values(?,?,1)';
    const [result, fields] = await connection.query(sql, [userId, cakeId]);
    return res.status(200).json({
        statusCode: 200,
        data: result,
    });
};
// End Cart
module.exports = {
    apiGetUsers,
    apiCreateUser,
    apiDeleteUser,
    apiUpdateUser,
    apiLogin,
    apiGetInfo,
    apiGetCakes,
    apiAddCake,
    apiUpdateCake,
    apiDeleteCakes,
    apiGetNewProduct,
    apiGetVoucher,
    apiAddVoucher,
    apiUpdateVoucher,
    apiDeleteVoucher,
    apiGetCakedatil,
    apiAddCakeDetail,
    apiUpdateCakeDetail,
    apiGetCakedatilA,
    apiGetNews,
    apiAddNews,
    apiUpdateNews,
    apiDeleteNews,
    apiGetRecipe,
    apiAddRecipe,
    apiUpdateRecipe,
    apiDeleteRecipe,
    apiGetCart,
    apiGetCartById,
    apiPutCart,
    apiDeleteCart,
    apiAddCart,
    apiDeleteCakeDetail,
};
