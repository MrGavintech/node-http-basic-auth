const login = function(req, res, next) {
    res.json({
        userName: 'Gavin',
        lastName: 'McKenzie',
        canDoStuff: false,
        loggedIn: true
    });
    next();
};
const logout = function(req, res, next) {
    res.json({
        userName: 'Gavin',
        lastName: 'McKenzie',
        loggedOut: true
    });
    next();
};

module.exports = {
    login,
    logout
};