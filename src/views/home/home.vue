<template>
  <div class="home">
    <Header-com class="header"></Header-com>
    <BackTOP-com @click.native="handleBackTop()" v-show="isTopShow"></BackTOP-com>
    <TabControl-com :titles="['流行', '新款', '精选']" @tabClick="handleShow" ref="topTabControl" class="tabControl" v-show="istabFixed"></TabControl-com>
    <Scroll-com class="content" ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load='true' @pullingUp='loadMore()'>
      <Banner-com :banners="banners" class="banner" @swiperImageLoad='swiperImageLoad'></Banner-com>
      <Nav-com :recommends="recommends"></Nav-com>
      <PopularView-com></PopularView-com>
      <TabControl-com :titles="['流行', '新款', '精选']" @tabClick="handleShow" ref="tabControl"></TabControl-com>
      <GoodsList-com :goods="goodsList[currentType].list"></GoodsList-com>
    </Scroll-com>
  </div>
</template>

<script>
import { getHomeMultiData, getHomeTabData } from "../../network/home";
import { debounce } from "../../utils/debounce"
import BScroll from "better-scroll";
import Header from "./homeChildView/header";
import Banner from "./homeChildView/banner";
import Nav from "./homeChildView/nav";
import PopularView from "./homeChildView/popularView";
import TabControl from "../../components/content/tabControl/tabcontrol";
import GoodsList from "../../components/content/goods/goodsList";
import Scroll from "../../components/common/scroll/scroll";
import BackTOP from "../../components/content/backTop/backTop";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isTopShow: false,
      tabControlOffsetTop: 0,
      istabFixed: false
    };
  },
  components: {
    "Header-com": Header,
    "Banner-com": Banner,
    "Nav-com": Nav,
    "PopularView-com": PopularView,
    "TabControl-com": TabControl,
    "GoodsList-com": GoodsList,
    "Scroll-com": Scroll,
    "BackTOP-com": BackTOP,
  },

  created() {
    // 1.请求多个数据
    this.getHomeMultiData();
    // 2.请求商品数据
    this.getHomeTabData("pop");
    this.getHomeTabData("new");
    this.getHomeTabData("sell");
  },
  mounted() {
    //监听item中图片加载
    // this.$bus.$on("itemImageLoad", () => {
    //   console.log("---");
    //   this.$refs.scroll.scroll.refresh();
    // });
   
     this.$bus.$on('itemImageLoad',()=>{
        const refresh = debounce(this.$refs.scroll.refresh,500)
        console.log("---");
        refresh()
    })
   
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeTabData(type) {
      const page = this.goodsList[type].page + 1;
      getHomeTabData(type, page).then((res) => {
        // console.log(res);
        this.goodsList[type].list.push(...res.data.list);
        this.goodsList[type].page += 1;
        //每一次上拉加载完成后 要刷新一次
        this.$refs.scroll.finishPullUp();
      });
    },
    handleShow(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      if(this.$refs.topTabControl.currentIndex !== undefined) {
         this.$refs.topTabControl.currentIndex = index
         this.$refs.tabControl.currentIndex = index
      }
    },
    handleBackTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      if (position.y < 0) {
        this.isTopShow = true;
      } else {
        this.isTopShow = false;
      }
      //决定tancontrol 是否吸顶 position: fixed
      this.istabFixed = (-position.y>this.tabControlOffsetTop)
    },
    loadMore() {
      console.log("上啦加载更多");
      this.getHomeTabData(this.currentType);
      //图片加载产生bug
      this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
       console.log(this.$refs.tabControl.$el.offsetTop);
       this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.content {
  height: calc(100%-1.86rem);
  position: absolute;
  top: 0.88rem;
  bottom: 0.98rem;
  left: 0;
  right: 0;
}
.header {
  z-index: 9;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.tabControl {
  margin-top: .88rem;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>