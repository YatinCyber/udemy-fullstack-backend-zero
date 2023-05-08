const getHomePage = (req, res) => {
    res.send('HOME PAGE') 
}
const getABC = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC
}