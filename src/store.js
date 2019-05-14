import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    introduce: {name: 'ShaneLin', describe: '若人生的道路上遇到了瓶頸，就靜下心來好好學習吧。'}
  },
  mutations: {

  },
  getters: {

  },
  actions: {
    //後端post proxy代理
    PostAPI(context, url, req){
      return new Promise((resolve, reject) => {
        axios.post(`${url}`, req)
        .then((res) => {
          if (res.status == 200)
            resolve(res.data);
          else
            reject(`response's status isn't 200`);
        })
        .catch((err) => {
          reject(err)
        })
      });
    },
    //後端get proxy代理
    GetAPI(context, req){
      return new Promise((resolve, reject) => {
        axios.get(`${req.url}`, {
          headers: {
            Authorization: req.header
          }
        })
        .then((res) => {
          if (res.status == 200)
            resolve(res.data);
          else
            reject(`response's status isn't 200`);
        })
        .catch((err) => {
          reject(err);
        })
      });
    }
  }
})
