<template>
  <div class="item_check">
    <div class="check_box" :class="{ checked: isChecked }"></div>
  </div>
</template>
<script>
export default {
  props: {
    isChecked: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.item_check {
  width: 1.2rem;
}
.check_box {
  position: relative;
  top: calc(50% - 0.35rem);
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 auto;
  border-radius: 0.2rem;

  border: 0.04rem solid rgba(128, 128, 128, 0.4);
}

.check_box.checked {
  width: .5rem;
  height: .5rem;
  border-style: none;
  top: calc(50% - 0.25rem);
  background: url("../../../assets/img/cart/yes.svg") 0 0/90% no-repeat;
}
</style>
