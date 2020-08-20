<template>
    <div class="cart-list">
        <cartListItem v-for="(item,index) in cartList" :key="index" :product='item'>{{item}}</cartListItem>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import cartListItem from './cartListItem'
export default {
    name: 'CartList',
    components: {
        cartListItem
    },
    computed: {
        ...mapGetters(['cartList'])
    }
}
</script>
<style scoped>

</style>