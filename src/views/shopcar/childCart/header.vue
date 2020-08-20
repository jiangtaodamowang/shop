<template>
    <div class="header">
        购物车({{cartLength}})
    </div>    
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Header',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['cartLength'])
        // cartLength() {
        //     return this.$store.state.cartList.length
        // }
    }
}
</script>
<style scoped>
.header {
    width: 100%;
    background-color: #ff8198;
    text-align: center;
    height: .88rem;
    line-height: .88rem;
    font-size: .44rem;
    color: #fff
}
</style>