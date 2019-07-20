<template>
  <section>
    <h1>Vue.JSnake</h1>
    <p>A game of Snake made with Vue.JS.</p>

    <div class="nes-container with-title">
      <p class="title">{{this.inGame ? "Menu" : "New game"}}</p>
      
      <div id="game-menu">
        <div v-if="!this.inGame" id="difficulty">
          <h3>Difficulty</h3>
          
          <label>
            <input type="radio" class="nes-radio" name="difficulty" v-model="difficultyLevel" value="0" />
            <span>Vue.JSnorefest</span>
          </label>

          <label>
            <input type="radio" class="nes-radio" name="difficulty" v-model="difficultyLevel" value="1" />
            <span>Vue.JSnail</span>
          </label>

          <label>
            <input type="radio" class="nes-radio" name="difficulty" v-model="difficultyLevel" value="2" />
            <span>Vue.JSnake</span>
          </label>

          <label>
            <input type="radio" class="nes-radio" name="difficulty" v-model="difficultyLevel" value="3" />
            <span>Vue.JinSane</span>
          </label>
        </div>

        <div v-if="this.inGame" class="stray-button-container">
          <button @click="forfeitGame()" class="nes-btn">New game</button>
        </div>

        <div id="controls">
          <h3>Controls</h3>

          <button @click="setKeyboard('QWERTY')" class="nes-btn">
            <h4>QWERTY</h4>
            <div class="lists">
              <ul class="nes-list is-disc">
                <li>Movment : WASD, Arrows</li>
                <li>Pause: Space, P, Pause</li>
                <li>Menu: Esc</li>
              </ul>
            </div>
          </button>

          <button @click="setKeyboard('AZERTY')" class="nes-btn">
            <h4>AZERTY</h4>
            <div class="lists">
              <ul class="nes-list is-disc">
                <li>Movment : ZQSD, Arrows</li>
                <li>Pause: Space, P, Pause</li>
                <li>Menu: Esc</li>
              </ul>
            </div>
          </button>
          <p>Current : {{this.keyboard}}</P>
        </div>

        <div class="stray-button-container">
          <button @click="startButton()" class="nes-btn">{{this.inGame ? "Continue" : "Start"}}</button>
        </div>
        
        <div class="link-badges">
          <div>
            <a class="nes-icon github is-large" href="https://github.com/AymericPost/vue-jsnake" target="blank"></a>
          </div>

          <div>
            <a class="nes-icon linkedin is-large" href="https://www.linkedin.com/in/aymeric-post/" target="blank"></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {mapActions} from "vuex";
import {mapState} from "vuex";

export default {
  name: 'GameMenu',
  components: {
    HelloWorld
  },
  data() {
    return {
      difficultyLevel: "2"
    }
  },
  computed: {
    ...mapState(["inGame", "paused", "keyboard"]),
    tickLength() {
      switch (this.difficultyLevel) {
        case "0":
          return 1000;
          break;
        case "1":
          return 500;
          break;
        case "2":
          return 350;
          break;
        case "3":
          return 100;
          break;
        default:
          return 404;
          break;
      }
    }
  },
  methods: {
    ...mapActions(["startGame", "handleUserInput", "setTickLength", "setKeyboard", "forfeitGame"]),
    startButton() {
      if(!this.inGame) this.setTickLength(this.tickLength);
      this.startGame();
    }
  },
  mounted() {
    if(this.inGame && !this.paused) this.handleUserInput({keyCode: 32});
  }
}
</script>

<style lang="scss" scoped>
  li {
    text-align: left;
    white-space: nowrap;
  }

  section {
    display: grid;
    justify-content: center;

    p, h1 {
      text-align: center;
    }

    #game-menu {
      display: grid;
      justify-content: center;
      grid-gap: 1%;

      #difficulty {
        display: grid;
        justify-content: center;
        grid-gap: 1%;
        column-gap: 5%;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto;

        h3 {
          grid-column: 1 / span 4;
          grid-row: 1
        }

        label {
          padding-right: 1%;
        }
      }

      #controls {
        display: grid;
        justify-content: center;
        grid-gap: 1%;
        column-gap: 2%;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;

        h3 {
          padding-left: 1%;
          grid-column: 1 / span 2;
          grid-row: 1;
        }

        button {
          grid-row: 2;
          padding-right: 10px;
        }

        p {
          margin-top: 1%;
          text-align: right;
          grid-column: 2 / 2;
          grid-row: 3;
        }
      }

      .stray-button-container {
        width: 100%;
        margin-top: 1%;
        display: grid;
        justify-content: center;
        row-gap: 3%;
        grid-template-columns:  35% 35% ;

        button {
          grid-column: 1 / span 2;
          grid-row: 1
        }
      }

      .link-badges {
        width: 100%;
        margin-top: 2%;
        display: flex;
        justify-content: space-around;

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          a {
            img {
              image-rendering: pixelated;
            }
          }
        }
      }
    }
  }
</style>
