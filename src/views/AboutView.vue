<template>
  <div class="container">
    <img class="bg_img" :src="backdropImg">
    <div class="bg_overlay"></div>
    <div class="main">
      <div class="poster">
        <img :src="posterImg" alt="">
      </div>
      <div class="content">
        <div class="main_info">
          <p class="title">{{movie.title}} <span>({{movie.release_date.substr(0, 4)}})</span></p>
          <p class="genre"><span v-for="genre in movie.genres" :key="genre.id">{{genre.name+" "}}</span></p>
        </div>
        <div class="score">
          <the-about-score :popularity="movie.vote_average*10" />
          <p class="tagline">{{movie.tagline}}</p>
        </div>
        <div class="description">
          <p>Обзор</p>
          <p>{{movie.overview}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import server from '../server.js';
import TheAboutScore from '../components/TheAboutScore.vue';

export default {
  components: { TheAboutScore },
  data() {
    return {
      movieId: this.$route.params.id,
      movie: {},
      posterImg: '',
      backdropImg: '',
    }
  },
  created() {
    server(this.movieId).then(data => {
      this.movie = data;
      this.posterImg = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
      this.backdropImg = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
    })
  },
  mounted(){

  }
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
.main{
  display: flex;
  width: 70%;
  margin: auto;
  margin-top: 225px;
  gap: 50px;
}
.poster{
  &>img{
    border-radius: 10px;
  }
}
.content{
  padding-top: 20px;
  color: white;
  font-size: 20px;
}
.main_info{
  &>.title{
    font-size: 36px;
    font-weight: bold;
    line-height: 20px;
    text-decoration: none;
    padding: 20px 0;
    &>span{
      color: #b8b4b4;
    }
  }
}
.tagline{
  color: #b8b4b4;
  font-style: italic;
  margin-top: 10px;
}
.description{
  margin-top: 20px;
  &>p{
    font-size: 22px;
    font-weight: bold;
    line-height: 20px;
  }
  &>p:nth-child(2){
    margin-top: 10px;
    font-size: 18px;
    font-weight: normal;
  }
}
</style>