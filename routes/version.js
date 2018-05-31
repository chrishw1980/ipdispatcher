var express = require('express');
var router = express.Router();
var datas = require("./util/dataConcreate");
var return_json = require("./util/returnCommon")

/* GET users listing. */
router.get('/', function(req, res, next) {
    var version = req.query["version"];
    var sysid = req.query["sysid"];
    var sysCurrentVersion = datas.loadmanifest(sysid);
    if(sysCurrentVersion > version){
        res.send(return_json.ejson("200",{"needUpdata":true,"version":sysCurrentVersion}));
    }else{
        res.send(return_json.ejson("200",{"needUpdata":false,"version":sysCurrentVersion}));
    }
});

module.exports = router;
