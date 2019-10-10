<template>
    <section>

        <mouse v-if="['M', 'SM'].includes(this.cellInfo.food)" :type="this.cellInfo.food" />
        <rabbit v-if="['R', 'SR'].includes(this.cellInfo.food)" :type="this.cellInfo.food" />

        <EHead1 v-if="!this.to && this.from == 'E' && this.snake.style.type == 1" />
        <NHead1 v-if="!this.to && this.from == 'N' && this.snake.style.type == 1" />
        <WHead1 v-if="!this.to && this.from == 'W' && this.snake.style.type == 1" />
        <SHead1 v-if="!this.to && this.from == 'S' && this.snake.style.type == 1" />

        <EWSegment1 v-if="this.to == 'E' && this.from == 'W' && this.snake.style.type == 1" />
        <WESegment1 v-if="this.to == 'W' && this.from == 'E' && this.snake.style.type == 1" />
        <NSSegment1 v-if="this.to == 'S' && this.from == 'N' && this.snake.style.type == 1" />
        <SNSegment1 v-if="this.to == 'N' && this.from == 'S' && this.snake.style.type == 1" />

        <WNTurn1 v-if="(this.to == 'W' && this.from == 'N') || (this.to == 'N' && this.from == 'W') && this.snake.style.type == 1" />
        <ENTurn1 v-if="(this.to == 'E' && this.from == 'N') || (this.to == 'N' && this.from == 'E') && this.snake.style.type == 1" />
        <WSTurn1 v-if="(this.to == 'W' && this.from == 'S') || (this.to == 'S' && this.from == 'W') && this.snake.style.type == 1" />
        <ESTurn1 v-if="(this.to == 'E' && this.from == 'S') || (this.to == 'S' && this.from == 'E') && this.snake.style.type == 1" />

        <ETail1 v-if="this.to == 'E' && !this.from && this.snake.style.type == 1" />
        <NTail1 v-if="this.to == 'N' && !this.from && this.snake.style.type == 1" />
        <WTail1 v-if="this.to == 'W' && !this.from && this.snake.style.type == 1" />
        <STail1 v-if="this.to == 'S' && !this.from && this.snake.style.type == 1" />

        <progress :value="this.expirationProgress" :max="this.xMax + Math.round(this.yMax / 2)" v-if="this.cellInfo.expiration"></progress>
    </section>
</template>

<script>
import {mapGetters} from "vuex";
import {mapState} from "vuex";

import mouse from "./sprites/mouse";
import rabbit from "./sprites/rabbit"
import EHead1 from "./sprites/1-striped/EHead";
import WHead1 from "./sprites/1-striped/WHead";
import NHead1 from "./sprites/1-striped/NHead";
import SHead1 from "./sprites/1-striped/SHead";
import EWSegment1 from "./sprites/1-striped/EWSegment";
import WESegment1 from "./sprites/1-striped/WESegment";
import NSSegment1 from "./sprites/1-striped/NSSegment";
import SNSegment1 from "./sprites/1-striped/SNSegment";
import WNTurn1 from "./sprites/1-striped/WNTurn";
import ENTurn1 from "./sprites/1-striped/ENTurn";
import WSTurn1 from "./sprites/1-striped/WSTurn";
import ESTurn1 from "./sprites/1-striped/ESTurn";
import ETail1 from "./sprites/1-striped/ETail";
import NTail1 from "./sprites/1-striped/NTail";
import WTail1 from "./sprites/1-striped/WTail";
import STail1 from "./sprites/1-striped/STail";

export default {
    name: "cell",
    components: {
        mouse,
        rabbit,
        EHead1,
        WHead1,
        NHead1,
        SHead1,
        EWSegment1,
        WESegment1,
        NSSegment1,
        SNSegment1,
        WNTurn1,
        ENTurn1,
        WSTurn1,
        ESTurn1,
        ETail1,
        NTail1,
        WTail1,
        STail1
        },
    props: ["coords"],
    computed: {
        ...mapState({
            xMax: state => state.xMax,
            yMax: state => state.yMax,
            grid: state => state.grid,
            snake: state => state.snake,
            gameTick: state => state.gameTick
        }),
        expirationProgress() {
            if(!this.cellInfo) return null;
            else return this.cellInfo.expiration - this.gameTick;
        },
        cellKey() {
            return this.gameTick + " " + this.coords;
        },
        cellInfo() {
            if(this.grid[this.coords]) return this.grid[this.coords];
            else return {};
        },
        snakeIndex() {
            return this.snake.coords.indexOf(this.coords)
        },
        from() {
            if(this.snakeIndex <= 0 ) return null;
            else {
                const x = this.coords.split("-")[0];
                const y = this.coords.split("-")[1];

                const lastX = this.snake.coords[this.snakeIndex - 1].split("-")[0];
                const lastY = this.snake.coords[this.snakeIndex - 1].split("-")[1];

                const diffX = lastX - x;
                const diffY = lastY - y;

                if(diffX > 0) return "W";
                else if(diffX < 0) return "E";
                else if(diffY > 0) return "N";
                else if (diffY < 0) return "S";
                else return null;
            }
        },
        to() {
            if(this.snakeIndex == -1 || this.snakeIndex == this.snake.coords.length -1 ) return null;
            else {
                const x = this.coords.split("-")[0];
                const y = this.coords.split("-")[1];

                const nextX = this.snake.coords[this.snakeIndex + 1].split("-")[0];
                const nextY = this.snake.coords[this.snakeIndex + 1].split("-")[1];

                const diffX = nextX - x;
                const diffY = nextY - y;

                if(diffX > 0) return "W";
                else if(diffX < 0) return "E";
                else if(diffY > 0) return "N";
                else if (diffY < 0) return "S";
                else return null;
            }
        }
    },
    
}
</script>

<style lang="scss" scoped>
    section {
        height: 36px;
        width: 36;
        background-color: white;
        position: relative;

        progress {
            position: absolute;
            bottom: 12%;
            left: 0;
            width: 100%;
            height: 20%;
            color: red;
        }

        progress::-webkit-progress-value {
            background: red;
        }

        progress::-moz-progress-bar {
         background: red;
        }

        progress::-webkit-progress-value {
          background: red;
        }

        progress::-webkit-progress-bar {
         background: red;
        }
    }
</style>
