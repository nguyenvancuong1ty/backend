const Home = (req, res) => {
    //Model
    res.send('Hello World with Express say hi');
}

const View = (req,res) => {
    //Model
    res.render('index.ejs');
}

module.exports = {Home, View}