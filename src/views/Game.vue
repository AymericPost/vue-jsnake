<template>
    <section>
        <game-stats />
        <grid :xMax="xMax" :yMax="yMax" :key="gameTick"/>
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
        grid,
        "game-stats": GameStats

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

</style>
