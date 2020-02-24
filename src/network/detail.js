import {request} from './request'
export function getDetailinfo(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getrecommend(iid){
    return request({
        url:'/recommend'
    })
}

export class shopinfo{
    constructor(data){
        this.logo = data.shopLogo;
        this.name = data.name;
        this.fans = data.cFans;
        this.sells = data.cSells;
        this.score = data.score;
        this.goodscount = data.cGoods;
    }
}

export class goodsParams{
     constructor(info,rule){
         this.img = info.images ? info.images[0] : "";
         this.info = info.set;
         this.rule = rule.tables;
     }
}