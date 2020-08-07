<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index" class="swiperItem">
      <!-- <router-link :to="item.link">
        <img :src="item.image" />
      </router-link> -->
      <a :href="item.link">
        <img :src="item.image" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper'
export default {
  name: 'Banner',
  props: {
    banners: {
      type: Array,
      dafault() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}

</style>