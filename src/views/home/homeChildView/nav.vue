<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommendsItem">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommends {
  display: flex;
  padding-bottom: 6.66667vw;
  border-bottom: 2.13333vw solid #eee;
}
.recommendsItem {
  flex: 1;
  text-align: center;
  margin-top: 2.96667vw;
  font-size: 3.46667vw;
  margin-left: 0.3rem;
}
.recommends .recommendsItem img {
  width: 85%;
}
.title {
    margin-top: .35rem;
}
</style>