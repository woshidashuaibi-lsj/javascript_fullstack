const net =require('net');



// 创建客户端与udp不同
// net.Socket
// 1. new net.Socket()
// 2. net.createConnection()



//要连接的目标主机与端口号
const clientSocket =  net.createConnection(12344,'127.0.0.1')

//监听数据传输
clientSocket.on('data',data =>{
    // console.log('服务器返回：'+data)
    // clientSocket.write('get money')
    // clientSocket.write('getbaby')
    console.log('数据' + data);
    
})


//当数据接受完的时候触发
clientSocket.on('end',() => {
    console.log('数据包接受完成')


    // 把接收到的数据组合起来
    
})