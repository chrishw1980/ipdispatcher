var sd = require('silly-datetime');

exports.ejson = function return_json(code,data) {
    var return_json = {};
    return_json["code"] = code;
    return_json["time"] = new Date().getTime();
    return_json["hr_time"] = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    if(code == "200"){
        if(data != null && data != null) {
            return_json["data"] = data;
        }
    }else{
        return_json["error_msg"] = data;
    }
    return return_json;
}