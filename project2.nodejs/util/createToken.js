/**
 * Created by lzhan on 2017/4/26.
 */
function createToken(userId) {
    var date=new Date().valueOf();
    var _token=userId+date;
    return _token;
}
module.exports=createToken;