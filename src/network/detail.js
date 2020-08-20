import {request} from './request';

//请求详情数据
export function getDetailInfo(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

//请求商品详情数据
export class Goods{
    constructor(itemInfo,columns,services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.oldPrice = itemInfo.oldPrice;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.newPrice = itemInfo.price;
        this.discountBgColor = itemInfo.discountBgColor;
        this.discountDesc = itemInfo.discountDesc;

        this.columns = columns;

        this.services = services;

    }
}

//请求店铺详情数据
export class Shops{
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.fans = shopInfo.cFans
        this.goods = shopInfo.cGoods
    }
}

//请求商品展示信息
export class GoodsParam {
    constructor(info, rule) {
      this.image = info.images ? info.images[0] : "";
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }

//请求推荐数据
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}