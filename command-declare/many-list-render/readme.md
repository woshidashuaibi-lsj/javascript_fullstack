##渲染
document.body.style.bgc='red';
setTimeout(()=>{
    document.body.style.bgc='blue';
},0);
先看到红色
在看到blue
说明 在 setTimeout 之前会发生一次，样式计算 浏览器并渲染它