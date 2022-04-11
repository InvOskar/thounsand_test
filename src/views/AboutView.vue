<template>
  <div class="container">
    <img class="bg_img" :src="backdropImg">
    <div class="bg_overlay"/>
    <info-block :movie="movie" :posterImg="posterImg" :releaseDate="releaseDate"/>
  </div>
</template>

<script>
import server from '../server.js';
import InfoBlock from '../components/InfoBlock.vue';

export default {
  components: { InfoBlock },
  data() {
    return {
      movieId: this.$route.params.id,
      movie: {},
      posterImg: '',
      backdropImg: '',
      releaseDate: '',
    }
  },
  created() {
    server(this.movieId).then(data => {
      this.movie = data;
      this.posterImg = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
      this.backdropImg = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
      this.releaseDate = data.release_date.substr(0, 4);
    })
  },
}
</script>

<style lang="scss" scoped>
.bg_img{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.bg_overlay{
  background: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) 150px, rgba(31.5, 31.5, 31.5, 0.84) 100%);
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>