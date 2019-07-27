<template>
    <section class="nes-container is-rounded">
        <div class="stats-item">
            <h4>Vue<span :class="titleClass">{{titleHTML}}</span></h4>
        </div>

        <div class="stats-item">
            <h4>Status</h4>
            <p :class="statusClass">{{statusHTML}}</p>
        </div>

        <div class="stats-item">
            <h4>Score</h4>
            <p><span>{{this.score}}</span> pts.</p>
        </div>

        <div class="stats-item">
            <h4>Length</h4>
            <p><span>{{this.snake.coords.length}}</span> m.</p>
        </div>

        <div class="stats-item">
            <h4>Survived</h4>
            <p v-html="this.survived"></p>
        </div>
    </section>
</template>

<script>
import {mapState} from "vuex";
import { setInterval } from 'timers';
export default {
    name: "game-stats",
    data() {
        return {
            survived: this.survivedCalc,
            clockId: ""
        }
    },
    computed: {
        ...mapState(["snake", "score", "gameTick", "msPerGameTick", "paused", "lost"]),
        survivedCalc() {
            const elapsedMs = this.gameTick * this.msPerGameTick;
            const elapsedSec = elapsedMs / 1000;

            const seconds = Math.floor((elapsedSec) % 60);
            const days = Math.floor(elapsedSec / 86400);
            const hours = Math.floor((elapsedSec / 3600) % 24);
            const minutes = Math.floor((elapsedSec / 60) % 60);

            return `${days > 0 ? `<span class="nes-text is-primary">${days}</span> d. ` : ""}${
                (hours > 0 || days > 0) ? ` <span class="nes-text is-primary">${hours}</span> hrs. ` : ""
            }${
                (minutes > 0 || hours > 0 || days > 0) ? ` <span class="nes-text is-primary">${minutes}</span> min. ` : ""
            } <span class="nes-text is-primary">${seconds}</span> sec.`;
        },
        titleHTML() {
            if(this.msPerGameTick > 800) return ".JSnorefest";
            else if(this.msPerGameTick >= 500) return ".JSnail";
            else if(this.msPerGameTick >= 300) return ".JSnake";
            else return ".JSkate";
        },
        titleClass() {
            if(this.msPerGameTick > 800) return "nes-text is-disabled";
            else if(this.msPerGameTick >= 500) return "nes-text is-primary";
            else if(this.msPerGameTick >= 300) return "nes-text is-success";
            else return "nes-text is-error";
        },
        statusHTML() {
            if(this.lost) return "Lost";
            else if(this.paused) return "Paused";
            else return "Running";
        },
        statusClass() {
            if(this.lost) return "nes-text is-error";
            else if(this.paused) return "nes-text is-warning";
            else return "nes-text is-success";
        }
    },
    mounted() {
        // Time jumps when "survivedCalc" is displayed directly because of tick length.
        // Interval insures survived time is updated every seconds only.
        this.survived = this.survivedCalc;
        this.clockId = setInterval(() => {
            this.survived = this.survivedCalc;
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.clockId);
    }
}
</script>

<style lang="scss" scoped>
  section {
    display: grid;
    justify-content: space-around;

    .stats-item {
        grid-row: 1;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        
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

