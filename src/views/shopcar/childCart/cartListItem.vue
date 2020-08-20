<template>
  <div class="cart_list_item">
    <CheckButton @click.native="checkClick" :is-checked='product.checked'/>
    <div class="item_img">
      <img :src="product.image" alt="" />
    </div>
    <div class="item_info">
      <p class="item_title">{{ product.title }}</p>
      <p class="item_desc">{{ product.desc }}</p>
      <span class="item_price">￥{{ product.price }}</span>
      <span class="item_count">x{{ product.count }}</span>
    </div>
  </div>
</template>
<script>
import CheckButton from "../../../components/content/checkButton/checkButton";
export default {
  props: {
    product: {
        type: Object,
        default() {
            return {}
        }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  },
  components: {
    CheckButton
  }
};
</script>
<style scoped>
.cart_list_item {
  width: 100%;
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 0.4rem;
  padding-left: 0rem;
}

.item_img {
  width: 2.5rem;
  height: 2rem
}
.item_img img {
  width: 100%;
  height: 100%;
}

.item_info {
  position: relative;
  width: calc(100% - 1.5rem - 1.2rem - 0.4rem);
  margin-left: 0.4rem;
}
.item_info p {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_title {
  font-size: 0.25rem;
  padding-bottom: 0.25rem;
}
.item_desc {
  font-size: 0.22rem;
  color: gray;
}
.item_price {
  position: absolute;
  left: 0;
  top: 1.2rem;
  font-size: 0.45rem;
  color: orange;
}
.item_count {
  position: absolute;
  right: 0.4rem;
  top: 1.2rem;
  font-size: 0.45rem;
}
</style>