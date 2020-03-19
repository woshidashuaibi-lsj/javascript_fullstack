// 独立对象 ， 创建2个独立的对象 一个是 xiaowang 一个是xiaoli
// 让 xiaoli 跟 xiaowang 通过门铃 进行通信 
// 先看xiaowang 家有没有门 ，如果有门 ，直接敲门didi， 如果没有门， 先建设门
// 两个单例开始通信

var xiaowang = (function(argument){
    var xiaowangjia = function (message) {
        this.menling = message
    }
    var men;
    var info ={
      sendMessage: function(message) {
        if(!men){
            men= new xiaowangjia(message)
        } 
        return men
      }
   }
   return info
}) ()

var xiaoli = {
    callXiaowang: function() {
       var _xw = xiaowang.sendMessage()
       alert (_xw)
    }
}










// var person = {
//     name: '',
//     age: 18,
//     eat = function() {

//     }
// }



// var animal ={
//     name: 'aa',
//     wight: '22kg',
//     run = function() {

//     }
// }