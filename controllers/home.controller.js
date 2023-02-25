exports.Index = async (data, req, res, next) => {
    res.render('home/home', data);
}