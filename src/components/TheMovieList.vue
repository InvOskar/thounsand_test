<template>
    <div class="list" ref='scrollComponent'>
        <div v-for="movie in list" :key="movie.id">
            <the-movie-card :movieId="movie.id"/>
        </div>
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
        getMoreMovie(){
            server(this.getSort).then(data => {
                if(data.length > 10){
                    let newList = data.results.slice(this.list.length, this.list.length+10);
                    for(let i=0; i<newList.length; i++){
                        this.list.push(newList[i]);
                    }
                }else{
                    let newList = this.list.slice(0, 10);
                    for(let i=0; i<newList.length; i++){
                        this.list.push(newList[i]);
                    }
                }
            })
        },
        scrollHandler(){
            if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
                this.getMoreMovie();
            }
        }
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
                        this.list = data.results.slice(0, 10);
                    })
                }
            },
            deep: true,
        },
    },
    mounted() {
        server(this.getSort).then(data => {
            this.list = data.results.slice(0, 10);
        });
        window.addEventListener('scroll', this.scrollHandler);
    },
})
</script>

<style lang="scss" scoped>
.list{
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

    &>div{
        padding: 20px 30px;
    }
}

@media (max-width: 1100px) {
    .list{
        width: 100%;
    }
}
</style>