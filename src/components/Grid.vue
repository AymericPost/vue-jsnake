<template>
    <section class="nes-container is-rounded with-title is-centered">
        <p class="title">Game</p>
        <div class="game-space">
            <div  class="nes-container game-grid" :style="gridSetup">
                <cell v-for="value in (((parseInt(xMax))*parseInt(yMax)))" :coords="coordsCalculator(value)" :key="value" />
            </div>
            <game-stats class="scores" />
        </div>
    </section>
</template>

<script>
import cell from "./Cell.vue";
import {mapState} from "vuex";
import router from "../router";
import {coordsForIndex} from "../utils";
import GameStats from "./GameStats";


export default {
    name: "grid",
    components: {
        cell,
        "game-stats": GameStats
    },
    props: ["xMax", "yMax"],
    data() {
        return {
            
        }
    },
    methods: {
        coordsCalculator(value) {
            return coordsForIndex(value -1, this.xMax, this.yMax);
            // const x = value % parseInt(this.xMax)
            // const y = parseInt(this.yMax) - Math.floor(value / parseInt(this.yMax))
            // return (x == 0 ? parseInt(this.xMax) : x) + "-" +  (x == 0 ? y + 1 : y);
        }
    },
    computed: {
        ...mapState(["inGame", "lost", "snake"]),
        gridSetup() {
            let columns = "";
            let rows = "";

            for(let i = 0 ; i < parseInt(this.xMax) ; i++) columns += "36px ";
            for(let i = 0 ; i < parseInt(this.yMax) ; i++) rows += "36px ";

            return {
                display: "grid",
                padding: "1px",
                "justify-content": "center",
                "grid-template-columns": columns,
                "grid-template-rows:": rows,
                "background-color": "gray",
                "grid-gap": "1px"
            }
        }
    },
    beforeMount() {
        if(!this.inGame || this.lost) router.push("/game-over")
    }
}
</script>

<style lang="scss" scoped>
    .game-space {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        justify-content: center;
        grid-gap: 3%;

        .game-grid {
            grid-row: 1;
            grid-column: 1;
        }

        .scores {
            grid-row: 1;
            grid-column: 2;
        }
    }
</style>

