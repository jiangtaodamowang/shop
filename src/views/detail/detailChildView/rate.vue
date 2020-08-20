<template>
  <div class="detail_rate" v-if="Object.keys(rate).length !== 0">
    <div class="comment_title">
      <span class="comment_name">用户评价</span>
      <span class="comment_more">更多</span>
    </div>
    <div class="comment_info">
      <div class="u_info">
        <img :src="rate.user.avatar" alt />
        <span>{{ rate.user.uname }}</span>
      </div>

      <div class="comment_content">
        <div class="content">{{ rate.content }}</div>
        <p class="content_info">
          {{ rate.created | dateShow}} {{ rate.style }}
        </p>
      </div>
    </div>
    <div class="comment_img" v-if="rate.images != null">
      <img :src="item" v-for="(item, index) in rate.images" :key="index"/>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../../../utils/date'
export default {
  name: "DetailGoodsRate",
  data() {
    return {};
  },
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  filters: {
    dateShow(value) {
      //将时间戳转成date对象
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd-hh:mm:ss");
    }
  }
}
</script>
<style scoped>
.detail_rate {
  font-size: 0.28rem;
  padding: 0.22rem 0.14rem;
  /* background-color: pink; */
  margin-top: .28rem;
}
.comment_title {
  /* padding: 0.42rem 0; */
  padding-bottom: 0.4rem;
  border-bottom: 0.08rem solid rgba(128, 128, 128, 0.3);
  position: relative;
}
.comment_more {
  position: absolute;
  right: .1rem;
  top: -.03rem;
}
.comment_more::after {
  background: url("../../../assets/img/right_arrow.svg") 0 0/1.06rem 1.06rem;
  display: inline-block;
  position: relative;
  top: 0.53rem;
  right: .13rem;
  width: .88rem;
  height: .88rem;
}
.u_info {
   display: flex;
   margin-bottom: .1rem;
   margin-top: .1rem;
}
.u_info img {
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  border: 0.04rem solid rgba(128, 128, 128, 0.3);
}
.u_info span {
  margin-left: .25rem;
  margin-top: .25rem;
  font-weight: bold;
}
.comment_img img {
  margin-right: 0.21rem;
  width: auto;
  height: 3.26rem;
}
.content {
  margin-bottom: .1rem;
}
</style>