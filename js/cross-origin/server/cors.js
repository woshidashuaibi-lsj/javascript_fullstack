const http =require('http')

http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.writeHead(200,{
        'content-type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'x-auth,conten-type',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Credentials':true
    })
    //允许cookie 传输的
// res.end(JSON.stringify({
//     bookName: 'php'
// }));
 res.end(`
 getBook(${JSON.stringify({bookName:'php'})})
 `)
})
.listen(3000,()=>{
    console.log('server is running');
})