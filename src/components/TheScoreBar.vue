<template>
    <div class="score-bar">
    <svg class="progres" width="38px" height="38px" fill="#081c22">
        <circle class="progres-circle" cx="19" cy="19" r="16" stroke-width="3" ref="progresCircle"  :style="getFunction
        "/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em">{{popularity}}<tspan dy="-7" font-size="7px">%</tspan></text>
    </svg>
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
.score-bar{
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #081c22;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    position: relative;
    margin-top: -19px;
    margin-left: 10px;
}
.progres-circle{
    transform-origin: center;
    transform: rotate(-90deg);
}
text{
    fill: #fff;
    font-size: 17px;
    font-weight: bold;
}
</style>