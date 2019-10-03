<template>
    <section class="">

        <div class="stats-item">
            <h4>Status</h4>
            <p :class="statusClass">{{statusHTML}}</p>
        </div>

        <div class="stats-item">
            <h4>Score</h4>
            <p><span>{{this.score}}</span></p>
        </div>

        <div class="stats-item">
            <h4>Length</h4>
            <p><span>{{this.snake.coords.length}}</span> m.</p>
        </div>
    </section>
</template>

<script>
import {mapState} from "vuex";
import { setInterval } from 'timers';
export default {
    name: "game-stats",
    computed: {
        ...mapState(["snake", "score", "gameTick", "msPerGameTick", "paused", "lost"]),
        statusHTML() {
            if(this.lost) return "Lost";
            else if(this.paused) return "Paused";
            else return "Running";
        },
        statusClass() {
            if(this.lost) return "game-status nes-text is-error";
            else if(this.paused) return "game-status nes-text is-warning";
            else return "game-status nes-text is-success";
        }
    },
}
</script>

<style lang="scss" scoped>
  section {
    display: grid;
    justify-content: space-around;

    .stats-item {
        grid-column: 1;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;

        .game-status {
            width: 115px;
        }
        
        h4 {
            grid-row: 1;
            grid-column: 1 / span 3;
        }

        p {
            grid-row: 2;
            grid-column: 2 / span 2;
            white-space: nowrap;

            span {
                color: #209cee;
            }
        }

        img {
                grid-column: 2 ;
        }
    }
  }
</style>

