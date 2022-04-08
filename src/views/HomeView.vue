<template>
  <div class="container">
    <the-header></the-header>
    <the-movie-list/>
  </div>
</template>

<script>
import TheMovieList from '@/components/TheMovieList.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: { TheMovieList, TheHeader },

}
</script>

<style lang="scss" scoped>
.container {
  
}
</style>