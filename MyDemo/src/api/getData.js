const axios = require('axios');

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Token'] = localStorage.getItem('token');
axios.defaults.baseURL = "http://127.0.0.1:4000"

// //获取音乐排行榜
// export const getMusicTop = ()=> {
//     return axios.get('/musicRankings').then(res=> {
//         return res.data
//     })
// }
// //获取排行榜详情
// export const getMusicTopDetails = (type)=> {
//     return axios.get('/musicRankingsDetails?type='+type).then(res=> {
//         return res.data
//     })
// }
// //获取音乐详情
// export const getMusicDetails = (album_id)=> {
//     return axios.get('/musicDetails?id=' + album_id).then(res=> {
//         return res
//     })
// }
// //搜索音乐
// export const getSearchMusic = (name) => {
//     return axios.get('/searchMusic?name=' + name).then(res=> {
//         return res.data
//     })
// }
//登录接口
export const login= (params)=> {
    return axios.post('/user/login', params).then(res=> {
        return res
    })
}