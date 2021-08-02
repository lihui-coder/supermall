<template>
  <div>
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/content/maintabbar.vue'

export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
</style>
