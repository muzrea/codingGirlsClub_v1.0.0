/**
 * Created by muzrea on 17-8-16.
 */
// import * as server from sever.js;
// const sever = required('../../sever.js');
window.onload = function(){
    alert(333);
    $.get('127.0.0.1:8081/checkCode?mail=2491572953@qq.com',function(err,usr){
        alert(222);
        let str = ` <p>亲爱的${usr.id},您已注册成功，点击下面的链接进入主页：</p>
                    <a href="127.0.0.1:8081/html/home.html" style="color: #2aabd2">汉字</a>`;
        $("#notification").append(str);
    })
}