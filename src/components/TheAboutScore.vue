<template>
    <div class="container">
        <div class="score_bar">
            <svg class="progres" width="70px" height="70px" fill="#081c22">
                <circle class="progres_circle" cx="35" cy="35" r="28" stroke-width="4" ref="progresCircle"  :style="getFunction
                "/>
                <text x="50%" y="50%" text-anchor="middle" dy=".3em">{{popularity}}<tspan dy="-7" font-size="12px">%</tspan></text>
            </svg>
        </div>
    <p>Пользовательский счет</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            circle: null,
            color: '',
        }
    },
    props: {
        popularity:{ 
            type: Number,
        }
    },
    mounted() {
        this.circle = this.$refs.progresCircle;
    },
    computed: {
        getFunction(){
            if (!this.circle) return {};
            const radius = this.circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - this.popularity / 100 * circumference;
            return {
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: offset,
                stroke: this.popularity < 40 ? '#ff0000' : this.popularity < 70 ? '#ffd700' : '#00ff00',
            }
        },
    },
    watch: {
        offset() {
            this.getColor();
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
}
.score_bar{
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #081c22;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.progres_circle{
    transform-origin: center;
    transform: rotate(-90deg);
}
text{
    fill: #fff;
    font-size: 22px;
    font-weight: bold;
}
p{
    font-size: 21px;
    font-weight: bold;
}
</style>