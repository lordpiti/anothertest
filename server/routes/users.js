var router = require('express').Router();
var UserData = require('./../models/userdata');

router.post('/api/users', function (req, res, next) {
    var user = new UserData(req.body);

    user.save(function (error, data) {
        if (error) {
            return next(error);
        }

        return res.status(201).json(data);
    });
});

router.get('/api/users', function (req, res, next) {
    var query = {};

    if(req.query)
    {
        query = req.query;
    }
    UserData.find(query, function(err,userDatas){
        if(err)
            res.status(500).send(err);
        else
            res.json(userDatas);
    });
});

module.exports = router;
