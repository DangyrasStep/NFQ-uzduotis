<template>
  <div id="app">
  </div>
</template>

<script>
import uzduotis from './components/uzduotis'
import pirmaUzduotis from './components/pirmauzduotis'
import antraUzduotis from './components/antrauzduotis'

export default {
  name: 'App',
  components: {
    uzduotis, pirmaUzduotis, antraUzduotis
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
