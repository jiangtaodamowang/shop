<template>
    <div class="goodsList">
        <GoodsListItem-com v-for="(item,index) in goods" :key="index" :goodsItem="item">

        </GoodsListItem-com>
    </div>    
</template>
<script>
import GoodsListItem from './goodsListItem' 
export default {
    name: 'GoodsList',
    components: {
        'GoodsListItem-com': GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
.goodsList {
    display: flex;
    flex-wrap: wrap;
}
</style>