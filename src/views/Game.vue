<template>
    <section>
        <grid :xMax="xMax" :yMax="yMax" :key="gameTick"/>
    </section>
</template>

<script>
import grid from "../components/Grid";
import {mapState} from "vuex";

export default {
    name: "game",
    components: {
        grid
    },
    computed: {
        ...mapState(["xMax", "yMax", "gameTick"])
    }
}
</script>

<style lang="scss" scoped>

</style>
