<template>
    <swiper class="detail_swiper">
        <swiper-item v-for="(item,index) in topImages" :key="index">
             <img :src="item" alt />
        </swiper-item>    
    </swiper>  
</template>
<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
    props: {
        topImages: {
            type: Array,
            default() {
                return []
            }
        }
    },
    components: {
      Swiper,
      SwiperItem
    },
}
</script>
<style scoped>
.detail_swiper {
  width: 100%;
  height: 8.8rem;
}
.detail_swiper img {
  width: 100%;
  height: 100%;
}
</style>