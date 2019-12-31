import { encode } from "punycode"
import { encodeHTML } from "entities"

let xhr=new XMLHttpRequest()

//初始化
xhr.open(method,url,async)
//发送请求
xhr.send(data)
//设置状态变化回调处理请求结果
xhr.onreadystatechange=()=>{
    if(xhr.readyState===4 && xhr.status===200){
        console.log(xhr.responseText)
        // var data=JSON.parse(xhr.responseText)
        // document.querySelector('.name').innerHTML=data.persion.name
    }
}
function ajax(options){
const url=options.url
const method=options.method.toLocaleLowerCase() ||  'get'//转换为小写
const async=options.async
const data=options.data

//实例化
const xhr=new XMLHttpRequest()
if(options.timeout && options.timeout>0){
     xhr.timeout=options.timeout
}

//返回一个promise实例
return new Promise((resolve,reject)=>{
    xhr.ontimeout = ()=>reject && reject('请求超时')

    //监听状态回调
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4){
            //200到300 的状态码表示请求成功
            if(xhr.status>=200&&xhr.status<300 ||xhr.status===304){
             resolve &&resolve(xhr.responseText)
            }else{
                reject&&reject()
            }
        }
    }

    //错误回调
    xhr.onerror = err=>reject && reject(err)

    //处理请求参数
    let paramArr=[]
    let encodeData
    if(data instanceof object){
        for(let key in data){
            // 参数拼接需要通过 
            paramArr.push(encodeURIComponent(key)+'='+encodeURIComponent(data[key]))
        }
        encodeData =paramArr.join('&')
    }
    //get 请求拼接参数
    if(method==='get'){
        //检测url中是否有？，及其位置
        const index =url.indexof('?')
        if(index===-1) url+='?'
        else if(index !== url.length - 1) url += '&'

        //拼接
        url += encodeData
    }

    xhr.open(method,url,async)
    if(method==='get') xhr.send(null)
    else{
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
        xhr.send(encodeData)
    }
})
}