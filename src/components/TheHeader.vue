<template>
  <div class="container">
    <div class="btn" @click="setSort('popular')" :class="{active: getSort=='popular'}">Популярные</div>
    <div class="btn" @click="setSort('top_rated')" :class="{active: getSort=='top_rated'}">C наивысшим рейтингом</div>
    <div class="btn" @click="setSort('upcoming')" :class="{active: getSort=='upcoming'}">Скоро выход</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods:{ 
        ...mapActions(['setSort'])
    },
    computed: {
        ...mapGetters({
            getSort: 'getSort',
        }),
    },
}
</script>

<style lang="scss" scoped>
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    &:hover{
        cursor: pointer;
        color: #bfe3ca;
    }
    &.active{
        color: #29e060;
    }
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    background-color: #081c22;
}

@media (max-width: 768px) {
    .container{
        flex-direction: column;
    }
}
</style>