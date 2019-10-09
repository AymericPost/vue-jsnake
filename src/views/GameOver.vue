<template>
  <section>
      <h2 class="nes-text is-error">Game Over !</h2>
      <h4 class="nes-text is-error">{{gameOverMessage}}</h4>
      <p>Score : <span class="nes-text is-primary">{{score}}</span> pts.</p>
      <p>Survived : <span v-html="survivedCalc"></span></p>
      <p>Length : <span class="nes-text is-primary">{{snake.coords.length}}</span> m.</p>
      <div><button @click="toMenu()" class="nes-btn">New game</button></div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import router from "../router";

export default {
    name: "GameOver",
    methods: {
        toMenu() {
            return router.push("/");
        }
    },
    computed: {
        ...mapState(["gameOverType", "score", "snake", "gameTick", "msPerGameTick"]),
        gameOverMessage() {
            switch (this.gameOverType) {
                case 0:
                    return "All the mice are belong to us."
                    break;
                case 1:
                    return "Why do you hit yourself ?";
                    break;
                case 2:
                    return "You cannot eat the cosmic event horizon.";
                    break;
                default:
                    return "There must be some kind of error...";
                    break;
            }
        },
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
        }
    },
    beforeMount() {
        if(this.gameOverType == -1) router.push("/");
    }
}
</script>

<style lang="scss" scoped>
    section {
        height: 100vh;
        display: grid;
        align-content: center;

        h2, h4, p {
            text-align: center;
        }

        h2, h4 {
            text-shadow: 1px 1px black;
        }

        h4 {
            margin-bottom: 4vh;
        }

        div {
            display: flex;
            justify-content: center;
            margin-top: 4vh;
            button {
                min-width: 300px;
            }
        }
        
    }
</style>