<template>
    <div class="header">
        <div class="left" @click="handleBack()">
            <span> < </span>
        </div>
        <ul >
            <li v-for="(item,index) in titles" :key="index" :class="currentIndex==index?'axtive':''" @click="handleToggle(index)">
                {{item}}
            </li>
        </ul>
    </div>    
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods: {
       handleBack() {
           this.$router.push('/home')
       },
       handleToggle(index) {
           this.currentIndex = index
           this.$emit('titleClick',index)
       } 
    }
}
</script>
<style scoped>
.header {
    width: 100%;
    height: .88rem;
    background: ghostwhite;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
}
.header .left {
    width: 10%;
    /* background-color: gold; */
    height: 100%;
    float: left;
}
.header .left span {
    text-align: center;
    line-height: .88rem;
    margin-left: .25rem;
    font-size: .36rem;
    font-weight: bold;
}
.header ul {
    float: right;
    display: flex;
}
ul li  {
    margin-right: 1rem;
    line-height: .88rem;
}
.axtive {
    color: #ff8198;
}
</style>