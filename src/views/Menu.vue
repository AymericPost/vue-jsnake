<template>
  <section>
    <h1>Vue.JSnake</h1>
    <p>A game of Snake made with Vue.JS.</p>
    <button v-on:click="startGame()" class="nes-btn">Start</button>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {mapActions} from "vuex";

export default {
  name: 'GameMenu',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(["startGame"])
  }
}
</script>

<style lang="scss" scoped>
  section {
    display: grid;
    justify-content: center;

    h1 {
      text-align: center;
    }
  }
</style>
