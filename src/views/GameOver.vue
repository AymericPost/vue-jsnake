<template>
  <section>
    <h2 :class="this.gameOverStyleClass(1)">Game Over !</h2>
    <h4 :class="this.gameOverStyleClass(2)">{{gameOverMessage}}</h4>

    <div class="diet-item" v-if="this.snake.foodCount.M > 0">
        <div class="diet-representation">
            <div><mouse type="M" /></div>
        </div>
        <div class="diet-text">
            <div>
                <p>
                    Mice :
                    <span class="nes-text is-primary">{{this.foodValues.M}}</span> pts.
                    x{{this.snake.foodCount.M}}
                    = <span class="nes-text is-primary">{{this.foodValues.M * this.snake.foodCount.M}}</span> pts.
                </p>
            </div>
        </div>
    </div>

    <div class="diet-item" v-if="this.snake.foodCount.SM > 0">
        <div class="diet-representation">
            <div><mouse type="SM" /></div>
        </div>
        <div class="diet-text">
            <div>
                <p>
                    Golden mice :
                    <span class="nes-text is-primary">{{this.foodValues.SM}}</span> pts.
                    x{{this.snake.foodCount.SM}}
                    = <span class="nes-text is-primary">{{this.foodValues.SM * this.snake.foodCount.SM}}</span> pts.
                </p>
            </div>
        </div>
    </div>

    <div class="diet-item" v-if="this.snake.foodCount.R > 0">
        <div class="diet-representation">
            <div><rabbit type="R" /></div>
        </div>
        <div class="diet-text">
            <div>
            <p>
                Rabbits :
                <span class="nes-text is-primary">{{this.foodValues.R}}</span> pts.
                x{{this.snake.foodCount.R}}
                = <span class="nes-text is-primary">{{this.foodValues.R * this.snake.foodCount.R}}</span> pts.
            </p>
            </div>
        </div>
    </div>

    <div class="diet-item" v-if="this.snake.foodCount.SR > 0">
        <div class="diet-representation">
            <div><rabbit type="SR" /></div>
        </div>
        <div class="diet-text">
            <div>
            <p>
                Golden rabbits :
                <span class="nes-text is-primary">{{this.foodValues.SR}}</span> pts.
                x{{this.snake.foodCount.SR}}
                = <span class="nes-text is-primary">{{this.foodValues.SR * this.snake.foodCount.SR}}</span> pts.
            </p>
            </div>
        </div>
    </div>

    <p class="diet-total">Total : <span class="nes-text is-primary">{{this.score}}</span> pts.</p>
    <p>Survived : <span v-html="survivedCalc"></span></p>
    <p>Length : <span class="nes-text is-primary">{{snake.coords.length}}</span> m.</p>

    <div>
        <button @click="toMenu(false)" class="nes-btn">New game</button>
        <button v-if="this.gameOverType == 0" @click="toMenu(true)" class="nes-btn is-success">New game<sup>+</sup></button>
    </div>
  </section>
</template>

<script>
import {mapState, mapActions} from "vuex";
import router from "../router";
import mouse from "../components/sprites/mouse";
import rabbit from "../components/sprites/rabbit";

export default {
    name: "GameOver",
    components: {
        mouse,
        rabbit
    },
    data() {
        return {
            gameWon: [
                "You win!",
                "All the mice are belong to us.",
                "Thank you snake, but the mouse is in another game.",
                "GG WP NO-RE!"
            ],
            snakeHit: [
                "Why do you hit yourself ?",
                "That must have hurt.",
                "You tried to be Ouroboros and failed.",
                "What's wrong ? Snake ?! SNAAAAKE !!"
            ],
            wallHit: [
                "You cannot eat the cosmic event horizon.",
                "There is no escape.",
                "You tested the curvature of space and found out is was flat.",
                "What's wrong ? Snake ?! SNAAAAKE !!"
            ]
        }
    },
    methods: {
        ...mapActions(["setNewGamePlus", "startGame"]),
        toMenu(newGamePlus) {
            if(newGamePlus) {
                this.setNewGamePlus();
                this.startGame();
            } 
            else  router.push("/");
        },
        gameOverStyleClass(slot) {
            if(this.gameOverType == 0 && slot == 1) return "nes-text is-primary";
            else if(this.gameOverType == 0 && slot == 2) return "nes-text is-success";
            else return "nes-text is-error";
        }
    },
    computed: {
        ...mapState(["gameOverType", "foodValues", "score", "snake", "gameTick", "msPerGameTick"]),
        gameOverMessage() {
            switch (this.gameOverType) {
                case 0:
                    return this.gameWon[Math.floor(Math.random() * this.gameWon.length)] ;
                    break;
                case 1:
                    return this.snakeHit[Math.floor(Math.random() * this.snakeHit.length)];
                    break;
                case 2:
                    return this.wallHit[Math.floor(Math.random() * this.wallHit.length)];
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

        button {
        margin-left: 3%;
        }
            
        .diet-item {
            display: grid;
            grid-row: span 1;
            grid-template-columns: auto auto;
            grid-template-rows: auto;
            position: relative;
            margin: 0;
            margin-top: -1%;
            

            .diet-representation {
                display: flex;
                flex-direction: row;
                grid-column: 1;
                grid-row: 1;
                justify-content: center;
                margin: 0;
                

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 0;

                    section {
                    height: 36px;
                    width: 36px;
                    }
                }
                
            }

            .diet-text {
                grid-column: 2;
                grid-row: 1;
                margin: 0;
                margin-left: 5%;

                display: flex;
                flex-direction: row;
                justify-content: center;

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    p {
                        white-space: nowrap;
                    }
                    
                }
            }

        }
        .diet-total {
            margin-top: 1%;
        }
    }
</style>
