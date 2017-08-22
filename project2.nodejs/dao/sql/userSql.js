/**
 * Created by lzhan on 2017/4/21.
 */
var sql={
    getAllUserData:'select * from view_user',
    upLoadIcon:'update user_info set user_icon=? where user_tel=?',   //修改用户头像

    getUserById:'select * from view_user where user_tel=?',
    userAllByTel:'select * from view_user where user_tel=?',
    addUser:'insert into user_info(user_tel,user_password) values(?,?)',
    getUserPassword:'select user_password from user_info where user_tel =?',

    //移动端
    setToken:'update user_info set token=? where user_tel=?',
    getToken:'select token from user_info where user_tel=?'


}
module.exports=sql;