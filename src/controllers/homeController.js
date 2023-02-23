const { getUsers, createUser, deleteUser, getUserById, updateUser } = require('../services/CRUDdata');

const Home = async (req, res) => {
    result = await getUsers();
    res.render('home.ejs', { data: result });
};

const View = (req, res) => {
    //Model
    res.render('index.ejs');
};

const AddUserPage = (req, res) => {
    //Model
    res.render('create.ejs');
    // res.redirect('/');
};

const AddUser = async (req, res) => {
    await createUser(req);
    res.redirect('/');
};

const DeleteUser = async (req, res) => {
    await deleteUser(req);
    res.redirect('/');
};

const getUpdatePage = async (req, res) => {
    const data = await getUserById(req);
    res.render('update.ejs', { data: data });
};

const UpdateUser = async (req, res) => {
    await updateUser(req);
    res.redirect('/');
};

module.exports = { Home, View, AddUser, AddUserPage, DeleteUser, UpdateUser, getUpdatePage };
