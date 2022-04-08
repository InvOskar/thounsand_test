<template>
  <div class="container">
    <div class="btn" @click="setSort('popular')">Популярные</div>
    <div class="btn" @click="setSort('top_rated')">C наивысшим рейтингом</div>
    <div class="btn" @click="setSort('upcoming')">Скоро выход</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods:{ 
        ...mapActions(['setSort'])
    }
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
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    background-color: #081c22;
}
</style>