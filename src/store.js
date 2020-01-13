import Vue from 'vue';
import Vuex from 'vuex';

import router from "./router";
import {coordsForIndex} from "./utils";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inGame: false,
    inMenu: true,
    isNewGamePlus: false,
    paused: false,
    lost: false,
    gameOverType: -1,
    clockId: "",
    keyboard: "QWERTY",
    keyMapping: {
      38: "directionUp",
      87: "directionUp",
      39: "directionRight",
      68: "directionRight",
      40: "directionDown",
      83: "directionDown",
      37: "directionLeft",
      65: "directionLeft",
      32: "togglePause",
      80: "togglePause",
      19: "togglePause"
    },
    foodValues: {
      M: 10,
      SM: 30,
      R: 20,
      SR: 50
    },
    xMax: 12,
    yMax: 12,
    gameTick: 0,
    msPerGameTick: 1000,
    grid: {},
    score: 0,
    snake: {
      style: {
        type: 1,
        outline: "black",
        body: "green",
        feature: "orange",
        eyes: "yellow"
      },
      coords: [],
      direction: "",
      ateFood: false,
      foodCount: {
        M: 0,
        SM: 0,
        R: 0,
        SR: 0
      }
    }
  },
  getters: {
    getGridCell(state, coords) {
      return state.grid[coords];
    }
  },
  mutations: {
    directionUp() {
      const head = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
        return parseInt(elem);
      });
      const newDirection = [head[0], head[1] + 1].join("-")

      if(this.state.grid[newDirection] && newDirection == this.state.snake.coords[0] || !this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    directionRight() {
      const head = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
        return parseInt(elem);
      });
      const newDirection = [head[0] + 1, head[1]].join("-")

      if(this.state.grid[newDirection] && newDirection == this.state.snake.coords[0] || !this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    directionDown() {
      const head = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
        return parseInt(elem);
      });
      const newDirection = [head[0], head[1] - 1].join("-")

      if(this.state.grid[newDirection] && newDirection == this.state.snake.coords[0] || !this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    directionLeft() {
      const head = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
        return parseInt(elem);
      });
      const newDirection = [head[0] - 1, head[1]].join("-")

      if(this.state.grid[newDirection] && newDirection == this.state.snake.coords[0] || !this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    togglePause() {
      console.log(this.state.paused ? "RESUME" : "PAUSE");
      this.state.paused = !this.state.paused;
    },
    setKeyboardAZERTY() {
      this.state.keyboard = "AZERTY";
      this.state.keyMapping = {
        38: "directionUp",
        90: "directionUp",
        39: "directionRight",
        68: "directionRight",
        40: "directionDown",
        83: "directionDown",
        37: "directionLeft",
        81: "directionLeft",
        32: "togglePause",
        80: "togglePause",
        19: "togglePause"
      }
    },
    setKeyboardQWERTY() {
      this.state.keyboard = "QWERTY";
      this.state.keyMapping = {
        38: "directionUp",
        87: "directionUp",
        39: "directionRight",
        68: "directionRight",
        40: "directionDown",
        83: "directionDown",
        37: "directionLeft",
        65: "directionLeft",
        32: "togglePause",
        80: "togglePause",
        19: "togglePause"
      }
    },
    setBoard(state, arr) {
      this.state.xMax = arr[0];
      this.state.yMax = arr[1];
    },
    setMsPerGameTick(state, ms) {
      if(typeof ms == "number") this.state.msPerGameTick = ms;
    },
    setClockId(state, id) {
      this.state.clockId = id;
    },
    setInMenu(state, bool) {
      if(typeof bool == "boolean") this.state.inMenu = bool;
    },
    setNewGamePlus(state, bool) {
      if(typeof bool == "boolean") this.state.isNewGamePlus = bool;
    },
    gameInit() {
      this.state.inGame = true;
      this.state.lost = false;
      this.state.gameOverType = -1;
      if(this.state.isNewGamePlus) this.state.msPerGameTick -= 25;
      if(!this.state.isNewGamePlus) this.state.gameTick = 0;
      if(!this.state.isNewGamePlus) this.state.score = 0;
      if(!this.state.isNewGamePlus) this.state.snake.foodCount = {
        M: 0,
        SM: 0,
        R: 0,
        SR: 0
      }

      for(let i = 0 ; i < (((this.state.xMax) * this.state.yMax)) ; i++) {
          this.state.grid[coordsForIndex(i, this.state.xMax, this.state.yMax)] = {occupied: false, food: null};
      }

      const midPoint = [Math.floor(this.state.xMax / 2), Math.floor(this.state.yMax / 2)]
      this.state.snake.coords = [(midPoint[0] - 1) + "-" + midPoint[1], midPoint[0] + "-" + midPoint[1], (midPoint[0] + 1) + "-" + midPoint[1]]
      this.state.snake.direction = (midPoint[0] + 2) + "-" + midPoint[1];

      this.state.isNewGamePlus = false;
    },
    nextGameTick() {
      this.state.snake.ateFood = false;

      if(this.state.snake.coords.length == Object.keys(this.state.grid).length) {
        this.state.lost = true;
        this.state.gameOverType = 0;
      } else {
        try {
          if(this.state.grid[this.state.snake.direction].occupied && this.state.snake.direction != this.state.snake.coords[0]) {
            this.state.lost = true;
            this.state.gameOverType = 1;
          }
          else {
            const previous = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
              return parseInt(elem);
            });
            const next = this.state.snake.direction.split("-").map(elem => {
              return parseInt(elem);
            });
            const moved = [next[0] - previous[0], next[1] - previous[1]];
  
            if(this.state.grid[next.join("-")] && this.state.grid[next.join("-")].food) {
              this.state.snake.ateFood = this.state.grid[next.join("-")].food;
              this.state.score += this.state.foodValues[this.state.grid[next.join("-")].food];
              this.state.snake.foodCount[this.state.grid[next.join("-")].food]++;
              this.state.grid[next.join("-")].food = null;
              delete this.state.grid[next.join("-")].expiration
            }
  
            this.state.snake.coords.push(this.state.snake.direction);
            this.state.snake.direction = [next[0] + moved[0], next[1] + moved[1]].join("-");
            
            if(!this.state.snake.ateFood) this.state.snake.coords.shift();
          }
  
          this.state.gameTick++;
        } catch(err) {
            this.state.lost = true;
            this.state.gameOverType = 2;
        }
      }
    },
    occupiedCheck() {
      const cellList = Object.keys(this.state.grid);
      cellList.forEach(elem => {
        this.state.grid[elem].occupied = false;
      })

      this.state.snake.coords.forEach(elem => {
        try {
          this.state.grid[elem].occupied = true;
        } catch(err) {
          console.log(err);
          this.state.lost = true;
        }
      });
    },
    expirationCheck() {
      const perishables = Object.keys(this.state.grid).filter(key => {
        return this.state.grid[key].expiration;
      });

      perishables.forEach(coords => {
        if(this.state.grid[coords].expiration < this.state.gameTick) {
          this.state.grid[coords].food = null;
          delete this.state.grid[coords].expiration;
        }
      })
    },
    generateFood() {
      const availableCoords = Object.keys(this.state.grid).filter(key => {
        return !this.state.grid[key].occupied && !this.state.grid[key].food;
      });

      const normalRoll = Math.random() * 100;
      const superRoll = Math.random() * 100;

      if(normalRoll < 40) {
        const posRoll = Math.floor(Math.random() * availableCoords.length);
        this.state.grid[availableCoords[posRoll]].food = "R";
        delete this.state.grid[availableCoords[posRoll]].expiration;
        availableCoords.splice(posRoll);
      } else  {
        const posRoll = Math.floor(Math.random() * availableCoords.length);
        this.state.grid[availableCoords[posRoll]].food = "M";
        delete this.state.grid[availableCoords[posRoll]].expiration;
        availableCoords.splice(posRoll);
      }

      if(availableCoords.length > 0 && superRoll < 30 && superRoll <= 10) {
        const posRoll = Math.floor(Math.random() * availableCoords.length);
        this.state.grid[availableCoords[posRoll]].food = "SR";
        this.state.grid[availableCoords[posRoll]].expiration = this.state.gameTick + Math.round(this.state.xMax + (this.state.yMax / 2));
      } else if(availableCoords.length > 0 && superRoll < 30 && superRoll > 10) {
        const posRoll = Math.floor(Math.random() * availableCoords.length);
        this.state.grid[availableCoords[posRoll]].food = "SM";
        this.state.grid[availableCoords[posRoll]].expiration = this.state.gameTick + Math.round(this.state.xMax + (this.state.yMax / 2));
      }

      
    },
    forfeit() {
      this.state.inGame = false;
      this.state.paused = false;
      this.state.lost = false;
      this.state.grid = {};
      this.state.gameTick = 0;
    }
  },
  actions: {
    handleUserInput(state, event) {
      const assignedKeys = Object.keys(this.state.keyMapping);
      if(event.keyCode == 27) router.push("/");
      else {
        try {
          if(!this.state.inMenu) {
            if(this.state.paused) {
              this.commit("togglePause");
    
              if(![32, 80, 19].includes(event.keyCode) && assignedKeys.includes(String(event.keyCode)))
                this.commit(this.state.keyMapping[event.keyCode]);
            }
            else if(assignedKeys.includes(String(event.keyCode)))
              this.commit(this.state.keyMapping[event.keyCode]);
          }
        } catch(err) {
          console.log(err.message)
        }
      }
    },
    setTickLength(state, ms) {
      state.commit("setMsPerGameTick", ms);
    },
    setKeyboard(state, type) {
      if(["AZERTY", "QWERTY"].includes(type)) this.commit("setKeyboard" + type);
    },
    setBoard(state, arr) {
      this.commit("setBoard", arr)
    },
    setInMenu(state, bool) {
      this.commit("setInMenu", bool)
    },
    setNewGamePlus() {
      this.commit("setNewGamePlus", true);
    },
    startGame(state) {
      if(!this.state.inGame){
        this.commit("gameInit")
        this.commit("occupiedCheck");
        this.commit("generateFood");
        let intervalId = setInterval(() => {
          if(this.state.lost) {
            this.state.inGame = false;
            this.state.paused = false;
            this.state.lost = false;
            this.state.grid = {};
            router.push("/game-over")

            clearInterval(intervalId);
          } else if(this.state.inGame && !this.state.paused && !this.state.lost) {
            this.commit("nextGameTick");
            this.commit("occupiedCheck");
            this.commit("expirationCheck");
            if(["M", "R"].includes(this.state.snake.ateFood)) this.commit("generateFood");
          };
        }, this.state.msPerGameTick);
        this.commit("setClockId", intervalId);
        router.push("/game")
    } else router.push("/game")
    },
    forfeitGame() {
      this.commit("forfeit");
      clearInterval(this.state.clockId);
    }
  }
})
