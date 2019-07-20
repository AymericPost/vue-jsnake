<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import store from "./store"

export default {
  mounted: () => {
    window.addEventListener("keydown", (event) => {
      store.dispatch("handleUserInput", event);
    });
  }
}
</script>


<style lang="scss">
  @font-face {
    font-family: "Press Start 2P";
    src: url("./assets/PressStart2P-Regular.ttf");
  }
  html {
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
