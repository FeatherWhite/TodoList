import axios from 'axios'
import {getLocal} from '@/common/utils'
// import store from '@/store';

// function setInterceptor(instance) {
//   // 每次请求时，都要加上一个loading效果
//   instance.interceptors.request.use((config) => {
//       // 在请求拦截中，每次请求，都会加上一个Authorization头
//       config.headers.Authorization = getLocal("token");
//       // 第1次请求时，显示Loading动画
//       // if (Object.keys(this.queue).length === 0) {
//       //     store.commit('showLoading'); //只让小动画 显示一次  后来在一直请求 就不用一直转转
//       // }
//       // this.queue[url] = url;
//       return config;
//   });
  // instance.interceptors.response.use((res) => {

  //     delete this.queue[url]
  //     if (Object.keys(this.queue).length === 0) {
  //         store.commit('hideLoading')
  //     }
  //     // store.commit('hideLoading')
  //     return res.data;  //相应拦截 过滤数据 
  // });
// }

export function request(config) {
  let token = getLocal("token");
  const instance = axios.create({
    baseURL: 'https://thinkingme.xyz:44301',
    // baseURL: 'http://localhost:5001',
    // timeout: 5000,
    headers: {
      Authorization: "Bearer " + token
    },
  })
  return instance(config)
}


