<template>
    <section>
        <div :style="displayStyle" v-html="displayHTML" :key="cellKey"></div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";
import {mapState} from "vuex";

export default {
    name: "cell",
    props: ["coords"],
    computed: {
        ...mapState({
            grid: state => state.grid,
            snake: state => state.snake,
            gameTick: state => state.gameTick
        }), 
        // ["grid", "snake"]
        cellKey() {
            return this.gameTick + " " + this.coords;
        },
        cellInfo() {
            return this.grid[this.coords]
        },
        getSnake() {
            return this.snake;
        },
        displayStyle() {
            let style = {
                height: "100%",
                width: "100%",
                // "justify-content": "center",
                "background-color": "white"
            }

            if(this.cellInfo.occupied) style["background-color"] = "green"
            else if(this.cellInfo.food) style["background-color"] = "yellow"
            
            return style
        },
        displayHTML() {
            if(this.cellInfo.occupied) {
                const snakeIndex = this.snake.coords.indexOf(this.coords);
                if(snakeIndex == 0) return "T";
                else if(snakeIndex == this.snake.coords.length - 1) return "H"
                else return "S";
                // if(snake.coords.indexof(this.coords) == 0) return "T";
                // else if(snake.coords.indexof(this.coords) == snake.coords.length - 1) return "H";
                // else return "S"
            }
            else if(this.cellInfo.food) return this.cellInfo.food
            else return this.coords;
        }
    },
    
}
</script>

<style lang="scss" scoped>
    section {
        height: 36px;
        width: 36;
    }
</style>
