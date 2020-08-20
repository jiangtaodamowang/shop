<template>
  <div class="category">
    <Header-com class="header"></Header-com>
    <Scroll-com class="content">
      <CategoryLeft-com :leftList="leftList"></CategoryLeft-com>
    </Scroll-com>
  </div>
</template>

<script>
import { getCategory,getCategoryInfo } from "../../network/category";
import Scroll from "../../components/common/scroll/scroll";
import Header from "./childCategory/header";
import CategoryLeft from "./childCategory/categoryLeft";
import CategoryRight from "./childCategory/categoryRight";
export default {
  name: "Category",
  data() {
    return {
      leftList: [],
      rightList: null
    };
  },
  components: {
    "Header-com": Header,
    "CategoryLeft-com": CategoryLeft,
    'CategoryRight-com': CategoryRight,
    "Scroll-com": Scroll,
  },
  created() {
    this.getCategory();
    this.getCategoryInfo()
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        console.log(res);
        this.leftList = res.data.category.list;
      });
    },
    getCategoryInfo(maitKey) {
      getCategoryInfo(maitKey).then(res=>{
        console.log(res);
      })
    }
  },
  mounted() {},
};
</script>
<style scoped>
.category {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  top: 0.88rem;
  bottom: 0.98rem;
  left: 0;
  right: 0;
}
.header {
  z-index: 9;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>