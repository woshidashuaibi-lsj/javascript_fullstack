const http = require('http')

//http.Server 类
//new http.Server()
//http.createServer


const server = http.createServer()

//request: 客户端请求对象，保存了与当前这次请求的客户端相关的信息
//response: 服务端输出对象，提供了服务端输出相关的一些方法
server.on('request', (request, response) => {
    console.log('接受到了请求')

    //向客户端返回数据
    //request对象本质上是net.socket+http协议增加的一些内容
    //request.socket=>net.socket
    //  console.log(request.socket.remoteAddress)
    // console.log(request.url)
    // 我们可以根据这个url来判断用户需要什么

    switch (request.url) {
        default:
        case '/':
            response.write('Index')
            break;
        case '/list':
            response.write('List')
            break;
        case '/view':
            response.write('View')
            break;

    }
    response.end()
})
// 80 默认，约定， 给http使用
server.listen(80, '0.0.0.0')