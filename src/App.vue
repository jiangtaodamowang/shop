<template>
  <div id="app">
    <Footer-com></Footer-com>
    <router-view/>
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
