<template>
  <div class="home">
    <Header-com></Header-com>
    <Banner-com :banners='banners'></Banner-com>
    <Nav-com :recommends='recommends'></Nav-com>
    <PopularView-com></PopularView-com>
  </div>
</template>

<script>
import { getHomeMultiData } from "../../network/home";
import Header from "./homeChildView/header";
import Banner from './homeChildView/banner'
import Nav from './homeChildView/nav'
import PopularView from './homeChildView/popularView'

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    "Header-com": Header,
    'Banner-com': Banner,
    'Nav-com': Nav,
    'PopularView-com': PopularView
  },

  created() {
    this.getHomeMultiData()
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      });
    },
  },
};
</script>
