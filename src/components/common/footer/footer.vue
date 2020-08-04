<template>
  <div class="footer">
    <ul>
      <li v-for="(item,index) in navs" :key="index">
        <router-link :to="{name: item.name}">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      navs: [
        {
          name: "Home",
          icon: "&#xe602;",
          title: "首页",
        },
        {
          name: "Category",
          icon: "&#xe606;",
          title: "分类",
        },
        {
          name: "Shopcar",
          icon: "&#xe601;",
          title: "购物车",
        },
        {
          name: "Profile",
          icon: "&#xe600;",
          title: "我的",
        },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  font-size: .28rem;
  border-top: 1px solid #ccc;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
  z-index: 500;
  background: #fff;
}
.footer ul {
    display: flex;
    justify-content: space-between;
}
.footer>ul, .footer>ul>li,.footer>ul>li>a{
   width: 100%;
   height: 100%;
}
.footer>ul>li>a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.router-link-active {
    color: #ff8198;
}
.iconfont {
  font-size: .32rem;
}
</style>