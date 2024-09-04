/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Harley Davidson' });
   };
module.exports = {
index
};