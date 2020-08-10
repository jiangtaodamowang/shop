<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index" class="swiperItem">
      <!-- <router-link :to="item.link">
        <img :src="item.image" />
      </router-link> -->
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from '../../../components/common/swiper'
export default {
  name: 'Banner',
  data() {
    return {
      isLoad: false
    }
  },
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
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
         this.$emit('swiperImageLoad')
         this.isLoad = true
      }
    }
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}

</style>