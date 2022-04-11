<template>
  <div class="main" ref="mainContainer">
      <div class="poster">
        <img :src="posterImg" alt="">
      </div>
      <div class="content">
        <div class="main_info">
          <p class="title">{{movie.title}} <span>({{releaseDate}})</span></p>
          <p class="genre"><span v-for="genre in movie.genres" :key="genre.id">{{genre.name+" "}}</span></p>
        </div>
        <div class="score">
          <the-about-score :popularity="movie.vote_average*10" />
          <p class="tagline">{{movie.tagline}}</p>
        </div>
        <div class="description" v-if="movie.overview">
          <p>Обзор</p>
          <p>{{movie.overview}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import TheAboutScore from '@/components/TheAboutScore.vue';

export default {
    components: { TheAboutScore },
    props: {
        movie: {
            type: Object,
            required: true,
        },
        posterImg: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            height: '',
        }
    },
    mounted() {
        this.height = (this.$refs.mainContainer.clientHeight/2) + 'px';
    },
    watch: {
        height() {
            this.$refs.mainContainer.style.height = this.height;
        }
    },
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  width: 70%;
  margin: auto;
  margin-top: calc(100vh/2 - v-bind(height));  
  align-items: center;
  gap: 50px;
}
.poster{
  &>img{
    border-radius: 10px;
  }
}
.content{
  color: white;
  font-size: 20px;
}
.main_info{
  &>.title{
    font-size: 36px;
    font-weight: bold;
    text-decoration: none;
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
  }
  &>p:nth-child(2){
    margin-top: 10px;
    font-size: 18px;
    font-weight: normal;
  }
}

@media (max-width: 767px) {
    .main{
        display: grid;
        margin-top: 20px;
        width: 80%;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        gap: 10px;
    }
    .poster{
        width: 70%;
        display: flex;
        justify-content: center;
        margin: auto;
        &>img{
            width: 70%;
        }
    }
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        width: 80%;
    }
    .main_info{
        &>.title{
            font-size: 24px;
            &>span{
                font-size: 16px;
            }
        }
        &>.genre{
            font-size: 16px;
        }
    }
    .score{
        transform: scale(0.8);
    }
    .description{
        margin-top: 10px;
        &>p{
            font-size: 18px;
        }
        &>p:nth-child(2){
            font-size: 16px;
        }
    }
}
</style>