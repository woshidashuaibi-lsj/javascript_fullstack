const debounce = (fn,delay) =>{
    let timer=null
      return(...args) =>{
       clearTimeout(timer)//清除定时器，过了delay的时间，又重新创建定时器，然后过了delay时间清除，重复
       //不让fn方法在delay 时间内重复执行，在delay的时间内只能执行一次
        timer= setTimeout(()=>{
            fn.apply(this, ...args)
        },delay) 
      }
}
