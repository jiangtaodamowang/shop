<template>
  <div id="app">
    <Footer-com></Footer-com>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import Footer from './components/common/footer/footer'
export default {
  name: 'App',
  components: {
    'Footer-com': Footer
  }
}
</script>
<style>

</style>
