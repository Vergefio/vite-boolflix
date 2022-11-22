<script>

import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  components:{
    AppHeader,
    AppMain,
    MovieList
  },
  mounted:(){
    axios.get('metteri qui API')
    .then( result => {
      console.log(result)
    }) 
    .catch( error => {
      console.log(error)
    })
  }
}
</script>


<template>
  <AppHeader title="Boolando"/>

  <main>
    <AppMain />
    <MovieList />
  </main>

</template>



<style lang="scss">
  @use './styles/general';
</style>