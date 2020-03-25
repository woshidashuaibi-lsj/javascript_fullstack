//服务端 
// 监听当前服务器上指定的ip与端口， 如果有数据发送到给IP和端口上，我就进行处理

const dgram = require('dgram');
//创建一个socket类，用来处理数据的一个标准API对象
//通过socket,我们就可以对网络数据读取和输出
// const socket= new dgram.Socket()
const server = dgram.createSocket('udp4');  //套接字  ipv4  ipv6


server.on('listening',() => {
    console.log('服务器开启成功，等待数据：')
})


//接收到的数据的时候
server.on('message',(data) => {
    console.log('接受到的数据'+data)
})





//监听指定的地址和端口
server.bind(12345,'127.0.0.1')