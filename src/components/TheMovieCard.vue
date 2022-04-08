<template>
  <div class="card">
      <div class="poster" @click="goAbout">
          <img :src="posterImg">
      </div>
        <the-score-bar :popularity="movie.vote_average*10" />
      <div class="info">
            <router-link :to="`/about/${movie.id}`" class="title">{{movie.title}}</router-link>
            <p class="date">{{releaseDate.day+" "+releaseDate.month+" "+releaseDate.year}}</p>
      </div>
  </div>
</template>

<script>
import TheScoreBar from '@/components/TheScoreBar.vue';
import server from '../server.js';

export default({
    components: { TheScoreBar },
    props: {
        movieId:{
            type: Number,
            required: true,
        }
    },
    methods: {
        goAbout(){
            this.$router.push('/about/'+this.movieId);
        }
    },
    data() {
        return {
            movie: {},
            posterImg: '',
            releaseDate: {day: null, month: null, year: null},
            month: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
        }
    },
    created() {
        server(this.movieId).then(data => {
            this.movie = data;
            this.posterImg = `https://image.tmdb.org/t/p/w300/${data.poster_path}`;
            this.releaseDate.day = data.release_date.substr(8, 2);
            this.releaseDate.month = this.month[data.release_date.substr(5, 2)-1];
            this.releaseDate.year = data.release_date.substr(0, 4);
        })
    },
})
</script>

<style lang="scss" scoped>
.card{
    width: 150px;
    height: 291px;
}
.poster{

    &>img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }

    &:hover{
        cursor: pointer;
    }
}
.title{
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
    text-decoration: none;
    color: black;

    &:hover{
        color: #30a5f2;
    }
}
.date{
    font-size: 15px;
    color: #999;
}
.info{
    margin-left: 10px;
}
</style>