<template>
  <div class="wrapper" ref="aaa">
      <ul class="content">
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
           <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
           <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
          <li>分类列表</li>
        </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data() {
    return {
      scroll: null
    }
  },
  components: {
    
  },
  mounted() {
    console.log(this.$refs.aaa)
    const bscroll = new BScroll(this.$refs.aaa,{
      probeType:3,
      pullUpLoad: true
    })
    bscroll.on('scroll',(position)=>{
      // console.log(position);
    })
    bscroll.on('pullingUp',()=>{
      //发送网络请求，请求更多页数据
      //等数据请求完成，并且将新的数据展示出来后
      setTimeout(()=>{
        bscroll.finishPullUp()
      },2000)
      console.log('上拉加载');
    })
  }
}
</script>
<style scoped>
.wrapper {
  height: 250px;
  background-color: red;
  overflow: hidden;
}
</style>