<template>
  <div id="app">
    <app-nav></app-nav> 
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home'
import AllStaff from './views/AllStaff'
import Nav from './components/Nav'
export default {
  name: 'app',
  data () {
    return {
    
    }
  },
  components: {
    'app-home': Home,
    'app-staff': AllStaff,
    'app-nav': Nav
  }
}
</script>

<style>

</style>
