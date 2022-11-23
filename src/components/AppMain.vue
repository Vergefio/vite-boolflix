<script>

import {store} from '../data/store'

export default {
    name:'AppMain',
    data(){
      return{
        store
      }
    },
    methods: {
      reset(){
        store.movieToSearch = '';
        store.statusToSearch = ''
      }
    }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center py-5">
      <div class="col-auto">
        <input v-model="store.movieToSearch" type="text" class="form-control" placeholder="Search">
      </div>
      <div class="col-auto">
        <select v-model="store.statusToSearch" class="form-select" aria-label="Default select example">
          <option value="" selected>Select Status</option>
          <option value="all">all</option>
          <option value="film">film</option>
          <option value="serie tv">serie tv</option>
        </select>
      </div>
      <div class="col-auto">
        <button @click="reset()" class="btn btn-warning">Reset</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>