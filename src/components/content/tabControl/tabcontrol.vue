<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" class="
        tabItem" :class="currentIndex==index?'active':''" @click="handleToggle(index)" >
            <span>{{item}}</span>
        </div>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        handleToggle(index) {
            this.currentIndex = index
            this.$emit("tabClick",index)
        }
    }
}
</script>
<style scoped>
.tabcontrol {
    display: flex;
    height: .8rem;
}
.tabItem {
    flex: 1;
    text-align: center;
    margin-top: .2rem;
    font-size: .32rem;
}
.active span{
    color: #ff8198;
    border-bottom: 4px solid #ff8198;
    padding: .16rem;
}
</style>