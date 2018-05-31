exports.loaddata = function loadJsonBySysID(sysid) {
    var filePath = "../../data/"+sysid+".json";
    console.log(filePath);
    var config = require(filePath);
    console.log(JSON.stringify(config));
    return config;
}