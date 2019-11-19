import Vue from 'vue'
import axios from 'axios'
// import { promises, resolve } from 'dns'
// import { rejects } from 'assert'


const vue=new Vue()

// axios配置 10秒没有请求到直接掐断
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://localhost:3000'

// 判断返回状态,响应拦截
axios.interceptors.response.use((res)=>{
  if (res.data.code !==200) {
      alert('网络异常')
      return Promise.reject(res)
  }
  return res
},(error)=>{
   alert('网络异常')
   return Promise.reject(error)
})

export function fetchGet(url,param) {
  return new promise((resolve,reject) => {
      axios.get(url, {
          params:param
      })
      .then(response => {
          resolve(response.data)
      },err => {
          rejects(err)
      })
      .catch((error) => {
          reject(error)
      })
  })
}

export default {
    //用户登录
    Login (params) {
        return fetchGet('/login',params)
    },
    //banners图片
    BannerList () {
        return fetchGet('/banner')
    },
    //歌单
    DiscLists (params) {
        return fetchGet('/top/playlist',params)
    }
}//封装