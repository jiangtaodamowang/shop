<template>
  <div class="footbar">
    <div class="bottom_left">
      <div class="service">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom_right">
      <div class="cart" @click="handleAddCart()">加入购物车</div>
      <div class="buy" @click="handleToBuy()">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleAddCart() {
      this.$emit('addToCart')
    },
    handleToBuy() {
      
    }
  }
};
</script>
<style scoped>
.footbar {
  /* position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  background: greenyellow;
  width: 100%;
  height: 0.98rem; */
  font-size: 0.25rem;
  display: flex;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  right: 0;
  height: .98rem;
  text-align: center;
  box-shadow: 0 -0.04rem 0.4rem gray;
}
.bottom_left {
  display: flex;
  flex: 1;
}
.bottom_left > div {
  flex: 1;
  border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
}
.bottom_left .icon {
  display: block;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
  width: .35rem;
  height: .35rem;
  margin: 0.12rem auto;
}
service .icon {
  background-position: 0 12.4rem;
}
.shop .icon {
  background-position: 0 17.5rem;
}
/* .service .icon {
  background-position: 0 -5.4rem;
}
.shop .icon {
  background-position: 0 -3.5rem;
} */
.bottom_right {
  display: flex;
  flex: 1;
}
.bottom_right > div {
  flex: 1;
  line-height: .98rem;
}
.cart {
  background-color: rgb(255, 174, 0);
  line-height: .98rem;
  text-align: center;
}
.buy {
  background-color: #ff8198;
  color: white;
}
</style>