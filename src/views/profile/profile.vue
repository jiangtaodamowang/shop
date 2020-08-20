<template>
  <div class="home">
      <Header-com class="header"></Header-com>
      <UserInfo-com></UserInfo-com>
  </div>
</template>

<script>
import Header from "./profileChild/header";
import UserInfo from "./profileChild/userInfo";
export default {
  name: 'Home',
  components: {
     "Header-com": Header,
     "UserInfo-com":UserInfo
  }
}
</script>
