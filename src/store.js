import Vue from 'vue';
import Vuex from 'vuex';
import router from "./router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inGame: false,
    paused: false,
    lost: false,
    gameOverType: 0,
    clockId: "",
    keyboard: "QWERTY",
    keyMapping: {
      27: "toMenu",
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
    xMax: 16,
    yMax: 16,
    gameTick: 0,
    msPerGameTick: 1000,
    grid: {},
    snake: {
      coords: [],
      direction: "",
      ateFood: false
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

      if(!this.state.grid[newDirection]) this.state.snake.direction = newDirection;
      else if(!this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    directionRight() {
      const head = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
        return parseInt(elem);
      });
      const newDirection = [head[0] + 1, head[1]].join("-")

      if(!this.state.grid[newDirection]) this.state.snake.direction = newDirection;
      else if(!this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    directionDown() {
      const head = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
        return parseInt(elem);
      });
      const newDirection = [head[0], head[1] - 1].join("-")

      if(!this.state.grid[newDirection]) this.state.snake.direction = newDirection;
      else if(!this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    directionLeft() {
      const head = this.state.snake.coords[this.state.snake.coords.length - 1].split("-").map(elem => {
        return parseInt(elem);
      });
      const newDirection = [head[0] - 1, head[1]].join("-")

      if(!this.state.grid[newDirection]) this.state.snake.direction = newDirection;
      else if(!this.state.grid[newDirection].occupied) this.state.snake.direction = newDirection;
    },
    togglePause() {
      console.log(this.state.paused ? "RESUME" : "PAUSE");
      this.state.paused = !this.state.paused;
    },
    setKeyboardAZERTY() {
      this.state.keyboard = "AZERTY";
      this.state.keyMapping = {
        27: "toMenu",
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
        27: "toMenu",
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
    setMsPerGameTick(state, ms) {
      this.state.msPerGameTick = ms;
    },
    setClockId(state, id) {
      this.state.clockId = id;
    },
    gameInit() {
      this.state.inGame = true;
      this.state.lost = false;
      this.state.gameTick = 0;
      this.state.gameOverType = 0;

      for(let i = 1 ; i < (((this.state.xMax) * this.state.yMax) + 1) ; i++) {
          const x = i % this.state.xMax
          const y = this.state.yMax - Math.floor(i / this.state.yMax)
          this.state.grid[(x == 0 ? this.state.xMax : x) + "-" +  (x == 0 ? y + 1 : y)] = {occupied: false, food: null};
      }

      const midPoint = [Math.floor(this.state.xMax / 2), Math.floor(this.state.yMax / 2)]
      this.state.snake.coords = [(midPoint[0] - 1) + "-" + midPoint[1], midPoint[0] + "-" + midPoint[1], (midPoint[0] + 1) + "-" + midPoint[1]]
      this.state.snake.direction = (midPoint[0] + 2) + "-" + midPoint[1];
    },
    nextGameTick() {
      this.state.gameTick++;
      this.state.snake.ateFood = false;

      try {
        if(this.state.grid[this.state.snake.direction].occupied) {
          console.error("snakePointerException: \"why do you hit yourself?\"")
          console.log("You lost!")
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
            this.state.snake.ateFood = true;
            this.state.grid[next.join("-")].food = null;
          }

          this.state.snake.coords.push(this.state.snake.direction);
          this.state.snake.direction = [next[0] + moved[0], next[1] + moved[1]].join("-");
          
          if(!this.state.snake.ateFood) this.state.snake.coords.shift();
  
        }
      } catch(err) {
          console.error("snakeOutOfBoundException: \"you cannot eat the cosmic event horizon\"");
          console.log("You lost!")
          this.state.lost = true;
          this.state.gameOverType = 2;
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
    generateFood() {
      let dropPoint = this.state.snake.coords[0];

      while(this.state.grid[dropPoint].occupied) {
        dropPoint = (Math.floor(Math.random() * this.state.xMax) + 1) + "-" + (Math.floor(Math.random() * this.state.yMax) + 1 ) 
      }

      this.state.grid[dropPoint].food = "F";
    },
    forfeit() {
      this.state.inGame = false;
      this.state.paused = false;
      this.state.lost = false;
      this.state.grid = {};
      this.state.snake = {
        coords: [],
        direction: "",
        ateFood: false
      };
      this.state.gameTick = 0;
    }
  },
  actions: {
    handleUserInput(state, event) {
      const assignedKeys = Object.keys(this.state.keyMapping);
      if(event.keyCode == 27) router.push("/");
      else {
        try {
          if(this.state.paused) {
            this.commit("togglePause");
  
            if(![32, 80, 19].includes(event.keyCode) && assignedKeys.includes(String(event.keyCode)))
              this.commit(this.state.keyMapping[event.keyCode]);
          }
          else if(assignedKeys.includes(String(event.keyCode)))
            this.commit(this.state.keyMapping[event.keyCode]);
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
    startGame(state) {
      if(!this.state.inGame){
        this.commit("gameInit")
        this.commit("occupiedCheck");
        this.commit("generateFood");
        let intervalId = setInterval(() => {
          if(this.state.lost) {
            this.state.inGame = false;
            this.state.paused = false;

            setTimeout(() => {
              router.push("/")
            }, 500)

            clearInterval(intervalId);
          } else if(this.state.inGame && !this.state.paused && !this.state.lost) {
            this.commit("nextGameTick");
            this.commit("occupiedCheck");
            if(this.state.snake.ateFood) this.commit("generateFood");
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
