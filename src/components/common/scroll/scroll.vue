<template>
    <div class="wrapper" ref="wrapper">
       <div class="content">
            <slot></slot>    
       </div>
    </div>    
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
          // 1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            click:true
        })
           // 2.监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            // console.log(position)
            this.$emit('scroll', position)
        })
         // 3.监听上拉事件
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    },
    methods: {
        //封装home用
        finishPullUp() {
            this.scroll.finishPullUp()
        }
    }
}
</script>
<style scoped>

</style>