var http=require("http");
var url="http://baijiahao.baidu.com/s?id=1642400785146395181&wfr=spider&for=pc";
http.get(url,function(res){
 console.log(res);
 var html="";
res.on("data",function(chunk){
console.log(chunk);
html +=chunk;
});
res.on("end",function(){
    console.log(html);
})
});