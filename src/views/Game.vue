<template>
    <section id="game-screen">
        <div class="player-screen">
            <grid :xMax="xMax" :yMax="yMax" />
        </div>
    </section>
</template>

<script>
import grid from "../components/Grid";
import GameStats from "../components/GameStats"
import {mapState} from "vuex";
import {mapActions} from "vuex";

export default {
    name: "game",
    components: {
        grid
    },
    computed: {
        ...mapState(["xMax", "yMax", "gameTick"])
    },
    methods: {
        ...mapActions(["setInMenu"])
    },
    mounted() {
        this.setInMenu(false);
    }
}
</script>

<style lang="scss" scoped>
    #game-screen {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;

        .player-screen {
            display: flex;
            justify-content: space-evenly;
        }

    }

</style>
