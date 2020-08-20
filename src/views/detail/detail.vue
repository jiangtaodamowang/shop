<template>
  <div class="detail">
    <Header-com class="header" @titleClick='handleGoThemeY'></Header-com>
    <BackTop-com v-show="isShow" @click.native="handleBackTop()"></BackTop-com>
    <Scroll-com class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <Swiper-com :topImages="topImages"></Swiper-com>
      <GoodsInfo-com :goods='goods'></GoodsInfo-com>
      <Shop-com :goodsShop='goodsShop'></Shop-com>
      <ImageShow-com :detail-info='detailInfo' @detailImageLoad='detailImageLoad'></ImageShow-com>
      <Params-com ref="params" :paramInfo='paramInfo'></Params-com>
      <Rate-com ref="rate" :rate='rate'></Rate-com>
      <GoodsList-com ref="recommend" :goods='recommends'></GoodsList-com>
    </Scroll-com>
    <Toast-com :isShow='show' :message='message'></Toast-com>
    <FootBar-com @addToCart='addToCart'></FootBar-com>
  </div>
</template>
<script>
import { getDetailInfo, Goods, Shops, GoodsParam, getRecommend } from "../../network/detail";

import Scroll from "../../components/common/scroll/scroll";
import Header from "./detailChildView/header";
import Swiper from "./detailChildView/swiper";
import GoodsInfo from "./detailChildView/goodsInfo";
import Shop from './detailChildView/shop'
import ImageShow from './detailChildView/imageShow'
import Params from './detailChildView/params'
import Rate from './detailChildView/rate'
import BackTop from '../../components/content/backTop/backTop'
import GoodsList from "../../components/content/goods/goodsList";
import FootBar from './detailChildView/footBar'
import { mapActions } from 'vuex';
import Toast from '../../components/common/toast/toast'
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      goodsShop: {},
      detailInfo: {},
      paramInfo: {},
      rate: {},
      recommends: [],
      isShow: false,
      themeTopYs: [0,1000,3000,5000],
      show: false,
      message: ''
    };
  },
  components: {
    "Header-com": Header,
    "Swiper-com": Swiper,
    "Scroll-com": Scroll,
    "GoodsInfo-com": GoodsInfo,
    'Shop-com': Shop,
    "ImageShow-com": ImageShow,
    "Rate-com": Rate,
    "BackTop-com": BackTop,
    "GoodsList-com": GoodsList,
    "FootBar-com": FootBar,
    "Params-com": Params,
    "Toast-com": Toast
  },
  created() {
    //保存传入的id
    this.iid = this.$route.params.iid;
    //根据iid请求详情数据
    getDetailInfo(this.$route.params.iid).then((res) => {
      console.log(res);
      //1获取轮播图信息
      this.topImages = res.result.itemInfo.topImages;
      //2获取商品信息
      const result = res.result;
      this.goods = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );
      //3创建店铺信息
      this.goodsShop = new Shops(result.shopInfo);
      //4请求商品展示信息
      this.detailInfo = result.detailInfo
      //5请求商品的参数信息
      this.paramInfo = new GoodsParam(
        result.itemParams.info,
        result.itemParams.rule
      );
       //6 取出评论信息
      if (result.rate.cRate != 0) {
        this.rate = result.rate.list[0];
      }
    });
      //7请求推荐数据
      getRecommend().then((res)=>{
        console.log(res);
        this.recommends = res.data.list
      });
      this.$nextTick(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs);
      })

        //第一次获取值不对 原因是this.$refs.params.$el压根就没有渲染
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs);
  },
  methods: {
      ...mapActions(['addCart']),
      detailImageLoad() {
         this.$refs.scroll.scroll.refresh();
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          console.log(this.themeTopYs);
      },
      contentScroll(position) {
        if(position.y<0) {
          this.isShow = true
        }else {
          this.isShow = false
        }

        //获取Y值
        const positionY = -position.y
        let length = this.themeTopYs.length
        for(let i=0; i<length; i++) {
          if(this.currentIndex !== i && ((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i===length -1 && positionY >=this.themeTopYs[i]))) {
            this.currentIndex = i
            console.log(this.currentIndex);
          }
        }
      },
      handleBackTop() {
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      handleGoThemeY(index) {
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],200)
        console.log(index);
      },
      //加入购物车
      addToCart() {
        console.log('+++')
        //1 获取购物车信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.detailInfo.desc
        product.price = this.goods.lowNowPrice
        product.iid = this.iid
        //2 将商品添加到购物车
        // this.$store.dispatch('addCart',product).then(res=>{
        //   console.log(res);
        // })
        this.addCart(product).then(res=>{
          // console.log(res);
          this.show =true
          this.message = res
          setTimeout(()=>{
            this.show = false
            this.message = ''
          },1200)
        })
        //3 添加到购物车成功
      }
  },
  mounted() {
    //监听item中图片加载
    this.$bus.$on("detailItemImageLoad", () => {
      console.log("---");
      this.$refs.scroll.scroll.refresh();
    });
  
  },
  updated() {
    //第二次获取值不对 原因还是图片没有出来
    //根据最新的数据 对应的dom已经被渲染出来了
    //但是图片依然没有加载完成(目前获取到offsetTop不包含其中的图片)
    //offsetTop值不对的时候 都是因为图片的问题
    this.themeTopYs = []
    this.themeTopYs.push(0)
    this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    this.themeTopYs.push(this.$refs.rate.$el.offsetTop)
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    console.log(this.themeTopYs);
  }
};
</script>
<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 900000;
  background-color: #fff;
}
.header {
    position: relative;
    z-index: 9999;
    background-color: #fff;
}
.content {
  position: absolute;
  top: 0.88rem;
  bottom: 0.98rem;
  left: 0;
  right: 0;
}
</style>