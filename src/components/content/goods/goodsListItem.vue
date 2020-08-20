<template>
  <div class="goods-item" @click="handleItemGo()">
    <img v-lazy="showImage" @load='imageLoad()' />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    handleItemGo() {
      this.$router.push("/detail/" + this.goodsItem.iid);
      //console.log('点击到详情页');
    },
    imageLoad() {
      if(this.$route.path.indexOf('/home')) {
        this.$bus.$emit('homeItemImageLoad')
      }else if(this.$route.path.indexOf('/detail')) {
        this.$bus.$emit('detailItemImageLoad')
      }
    }
  },
};
</script>
<style scoped>
.goods-item {
     /* display: flex; */
    padding-bottom: .8rem;
    width: 46%;
    position: relative;
    margin-left: .25rem;
    margin-top: .35rem;
  }

  .goods-item img {
    width: 100%;
    border-radius: .01rem;
    
  }
.goods-info {
    font-size: .24rem;
    position: absolute;
    bottom: .01rem;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .06rem;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: .4rem;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -.3rem;
    top: -.02px;
    width: .28rem;
    height: 28rem;
    background: url("../../../assets/img/collect.svg") 0 0/14px 14px;
  }
</style>