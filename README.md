# vue-jsnake

A game of snake made with Vue.JS.

[Play here](https://aymericpost.github.io/vue-jsnake/#/)!

## How to play ?

You control a snake searching for food to grow. Grow as much as you can by passing over food without going outside the game board or touching yourself !

The snake will advance by himself. You control it by changing its direction.

### Options

#### Difficulty

Changing difficulty affects the speed of the game.

- Beginner : Moves once per second.
- Easy : Moves twice per second.
- Medium : Moves 3 times per second.
- Hard : Moves 6 times per second.

#### Game Size

Affects the size of the game space. Perishable food will last longer in a larger space.

- Small : 8x8
- Medium : 12x12
- Large : 16x16

#### Controls


Controls depends on what keyboard you chose in the menu. Choosing QWERTY binds movment to WASD and choosing AZERTY bind movment to ZQSD.

- WASD or ZQSD And arrow keys : change direction.
- Space, P and Pause : Pause the game. Press any key to resume.
- ESC : Menu (will pause the game).

### Food

Eating food will earn you points and make the snake grow.

There are two types of food : normal and perishable. Once generated, normal food will stay in the game until eaten. Persishable food earns more points than normal food but will disapear if not eaten in time.

#### Generation

New food will be generated for each normal food eaten. Eating perishable food will not create new food.

Chances for normal food :
- Mouse : 60%
- Rabbit : 40%

There is a chance perishable food will appear for each normal eaten :
- Golden mouse : 20%
- Golden rabbit : 10%
- None : 70%

#### Points

- Mouse : 10 points.
- Golden mouse (perishable) : 30 points.
- Rabbit : 20 points.
- Golden rabbit (perishable) : 50 points.

## Local installation

### Pre-requisites

- [Node.JS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

### Setup

1. Clone repository

```git clone https://github.com/AymericPost/vue-jsnake.git```

2. Install dependencies

```cd ./vue-jsnake && npm install```

### Start

```npm run serve```

Go to [http://localhost:8080/](http://localhost:8080/) to play.

## Technologies

- [Vue.JS](https://vuejs.org/)
- [VueX](https://vuex.vuejs.org/)
- [NES.css](https://nostalgic-css.github.io/NES.css/)

## What's next ?

- New game + (Keep playing on a new grid after a win)
- Improved menu to tweak every aspect of the game (almost everything is already modifiable in the code but not in the menu)
- Local multiplayer (One player with WASD/ZQSD, another with arrows)
- Online multiplayer (with a python back-end application because SNAKE !)
