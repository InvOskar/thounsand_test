<template>
    <div class="list" ref='scrollComponent'>
        <div v-for="movie in list" :key="movie.id">
            <the-movie-card :movieId="movie.id"/>
        </div>
        <div></div>
    </div>
</template>

<script>
import TheMovieCard from '@/components/TheMovieCard.vue';
import { mapGetters } from 'vuex';
import server from '../server.js';

export default({
    components: { TheMovieCard },
    data() {
        return {
            list: [],
        }
    },
    methods:{
        
    },
    computed: {
        ...mapGetters({
            getSort: 'getSort',
        }),
    },
    watch: {
        getSort: {
            handler(newVal, oldVal) {
                if(newVal != oldVal){
                    server(this.getSort).then(data => {
                        this.list = data.results.slice(0, 20);
                    })
                }
            },
            deep: true,
        },
    },
    mounted() {
        server(this.getSort).then(data => {
            this.list = data.results.slice(0, 20);
        })
    },
})
</script>

<style lang="scss" scoped>
.list{
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;

    &>div{
        padding: 20px 30px;
    }
}
</style>