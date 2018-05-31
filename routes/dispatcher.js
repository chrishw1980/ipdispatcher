var express = require('express');
var router = express.Router();
var datas = require("./util/dataConcreate");
var return_json = require("./util/returnCommon")

/* GET users listing. */
router.get('/', function(req, res, next) {
    var version = req.query["version"];
    var sysid = req.query["sysid"];
    var config = datas.loaddata(sysid);
    if(version == null && version ==''){
        res.send(return_json.ejson("501","wrong para!"));
    }else {
        res.send(return_json.ejson("200",config));
    }
});

module.exports = router;
