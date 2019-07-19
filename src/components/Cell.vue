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
            if(this.cellInfo) {
                let style = {
                    height: "100%",
                    width: "100%",
                    "font-size": "8px",
                    "text-align": "center",
                    // "justify-content": "center",
                    "background-color": "white"
                }

                if(this.cellInfo.occupied) style["background-color"] = "green"
                else if(this.cellInfo.food) style["background-color"] = "yellow"
                
                return style
            } else return {};
        },
        displayHTML() {
            if(this.cellInfo) {
                if(this.cellInfo.occupied) {
                    const snakeIndex = this.snake.coords.indexOf(this.coords);
                    if(snakeIndex == 0) return "<span class='nes-text'>T</span>";
                    else if(snakeIndex == this.snake.coords.length - 1) return "<span class='nes-text'>H</span>";
                    else return "<span class='nes-text'>S</span>";
                }
                else if(this.cellInfo.food) return "<span class='nes-text'>" + this.cellInfo.food + "</span>";
                else return this.coords;
            } else return "";
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
