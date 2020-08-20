<template>
  <div class="left">
      <ul class="content">
        <li
          v-for="(item,index) in leftList"
          :key="index"
          :class="index==currentIndex?'active':''"
          @click="handleToggle(index)"
        >{{item.title}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "CategoryLeft",
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {
   
  },
  props: {
    leftList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleToggle(index) {
      this.currentIndex = index;
      console.log(index);
    },
  },
};
</script>
<style scoped>
.left {
  width: 25%;
  /* height: 100%; */
  background-color: #f6f6f6;
}

.content li {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.active {
  background-color: #fff;
  border-left: 0.06rem solid #ff8198;
  color: #ff8198;
  font-weight: bold;
}
</style>