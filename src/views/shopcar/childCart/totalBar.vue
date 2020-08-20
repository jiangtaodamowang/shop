<template>
  <div class="total">
    <div class="check-aera">
      <CheckButton class="check" :is-checked='isSelectAll' @click.native="checkClick"></CheckButton>
      <p>全选</p>
      <div class="totalPrice">合计{{totalPrice}}</div>
    </div>
    <div class="settleBtn" @click="handleSettlement()">去结算({{checkLength}})</div>
  </div>
</template>
<script>
import CheckButton from "../../../components/content/checkButton/checkButton";
import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if(this.cartList.length===0) return false
      //使用filter
      // return !(this.cartList.filter(item=>!item.checked).length)
      //使用find()
      return !this.cartList.find(item=>!item.checked)
    }
  },
  methods: {
    handleSettlement() {
     
    },
    //全选按钮点击
    checkClick() {
     if(this.isSelectAll) {
       this.cartList.forEach(item =>item.checked=false);
     }else {
        this.cartList.forEach(item =>item.checked=true);
     }
    }
  },
};
</script>
<style scoped>
.total {
  width: 100%;
  height: 1rem;
  bottom: 0.8rem;
  position: fixed;
  background-color: #ccc;
}
.check-aera {
  display: flex;
}
.check {
  margin-top: 0.19rem;
}
.check-aera p {
  margin-top: 0.28rem;
  margin-left: -0.2rem;
}
.totalPrice {
  margin-left: 3rem;
  margin-top: 0.28rem;
}
.settleBtn {
  /* margin-left: .5rem;
  margin-top: .18rem; */
  width: 1.5rem;
  height:1rem;
  text-align: center;
  line-height: 1rem;
  background-color: red;
  margin-left: 6rem;
  margin-top: -0.59rem;
  color: #ffffff;
}
</style>