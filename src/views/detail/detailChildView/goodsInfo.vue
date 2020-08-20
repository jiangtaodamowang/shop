<template>
  <div class="detailGoodsInfo" v-if="Object.keys(goods).length !==0">
    <div class="title">
        {{goods.title}}
    </div>
    <div class="info">
      <span class="n_price">￥{{ goods.lowNowPrice }}</span>
      <del>
        <span class="o_price">{{ goods.oldPrice }}</span>
      </del>
      <span
        :style="{ backgroundColor: goods.discountBgColor }"
        class="discount"
      >{{ goods.discountDesc }}</span>
    </div>
    <div class="columns">
      <span v-for="(item, index) in goods.columns" :key="index">
          {{item}}
      </span>
    </div>

    <div class="services">
      <div v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.detailGoodsInfo {
  padding: 0.18rem;
}
.title {
  font-size: 0.42rem;
  font-weight: bold;
}
.info {
  margin: 0.42rem 0;
}
.n_price {
  font-size: .55rem;
  color: #ff8198;
}
.o_price {
  margin: 0 0.21rem;
  font-size: 0.412rem;
  color: gray;
}
.discount {
  color: white;
  font-size: 0.45rem;
  padding: 0.128rem;
  border-radius: 0.21rem;
  margin-left: .28rem;
  position: relative;
  top: -0.21rem;
}
.columns {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.42rem;
  border-bottom: 0.042rem solid rgba(128, 128, 128, 0.3);
  /* 孩子span继承下面2个样式 */
  font-size: 0.32rem;
  color: gray;
}

.services {
  display: flex;
  font-size: .28rem;
  justify-content: space-between;
  padding: 0.45rem 0;
  
}
.services img {
  width: 0.412rem;
}
</style>