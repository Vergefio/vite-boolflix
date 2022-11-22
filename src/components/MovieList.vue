<script>

import {store} from '../data/store'
import MovieCard from './MovieCard.vue'
import AppLoading from './AppLoading.vue'

export default {
    name:'MovieList',
    components:{
        MovieCard,
        AppLoading
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <div class="container h-100">
        <div v-if="store.isLoaded" class="row">
            <MovieCard
            v-for="movie in store.movieListData" 
            :key="movie.id"
            :movie="movie"
            />
        </div>
        <div v-else> 
            <AppLoading title="Boolflix loading"/>
        </div>

    </div>

</template>

<style lang="scss" scoped>

</style>