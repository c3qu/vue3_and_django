import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
export const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: 'http://localhost:8000/api/',
    // 超时
    timeout: 10000
})

export const getPptTemplateInfo = (data) => {
    return service({
        url: 'template/',
        method: 'get',
        params: data
    })
}

export const getPptTemplateInfoById = (id) => {
    return service({
        url: 'template/'+id+'/',
        method: 'get',
    })
}