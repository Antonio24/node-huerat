exports.login_page = function(req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/');
        return;
    }
    res.render('login', { title: "Login", messages: req.flash('error') });
};