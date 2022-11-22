<script>
export default {
    name: 'MovieCard',
    props:{
        movie: Object
    }
}
</script>

<template>
    <!-- Titolo, Titolo Originale, Lingua, Voto -->
  <div class="sc-card col-3">
    <img :src="movie.image" :alt="movie.title">
    <h4>{{movie.title}}</h4>
    <p>{{movie.original-title}}</p>
    <p>{{movie.language}}</p>
    <p>{{movie.rating}}</p>
  </div>
</template>

<style lang="scss" scoped>
    .sc-card {
        text-align: center;
        margin-bottom: 50px;
        img {
            max-width: 100%;
            box-shadow: 0 0 5px 3px rgba( #000000, .15);
            transition: all .2s;
            margin-bottom: 20px;
            &:hover{
                transform: scale(1.05);
            }
        }
        h4 {
            text-transform: capitalize;
            &::after {
                content: '';
                display: block;
                border-bottom: 1px solid black;
                width: 50px;
                margin: 1rem auto;
            }
        }
    }
</style>