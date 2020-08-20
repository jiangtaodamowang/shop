<template>
  <div class="home">
    <!--导航-->
    <Header-com class="header"></Header-com>
    <Scroll-com ref="scroll" class="content">
      <!--商品列表-->
      <CartList-com></CartList-com>
    </Scroll-com>
    <!--底部汇总-->
    <TotalBar-com></TotalBar-com>
    <Toast-com :message='message' :isShow='show'></Toast-com>
  </div>
</template>

<script>
import Scroll from "../../components/common/scroll/scroll";
import Header from "./childCart/header";
import CartList from "./childCart/cartList";
import TotalBar from "./childCart/totalBar";
import Toast from '../../components/common/toast/toast'
export default {
  name: "Home",
  data() {
    return {
      message: '',
      show: false
    }
  },
  components: {
    "Header-com": Header,
    "CartList-com": CartList,
    "Scroll-com": Scroll,
    "TotalBar-com": TotalBar,
    "Toast-com": Toast
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: 0.88rem;
  bottom: 1.78rem;
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
</style>
