<script>

import axios from 'axios'
import {store} from './data/store'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: 'App',
  data(){
    return{
      store
    }
  },
  components:{
    AppHeader,
    AppMain,
    MovieList
  },
  methods:{
    getMovie(){
      store.isLoaded = false;
      axios.get(store.apiUrl)
      //{} params:{name:'', status:''}
    .then( result => {
      store.movieListData = result.data
      store.isLoaded = true;
    }) 
    .catch( error => {
      console.log(error)
    })
    }
  },
  mounted(){
    this.getMovie()
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