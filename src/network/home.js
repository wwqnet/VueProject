import {request} from "./request"

export function getHomeMultidate(){
    return request({
        url:'/home/multidata'  //请求首页数据信息
    })
}

export function getHomeGoodsitems(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
