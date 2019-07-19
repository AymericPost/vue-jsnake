<template>
    <section>
        <div :style="gridSetup">
            <cell v-for="value in (((parseInt(xMax))*parseInt(yMax)))" :coords="coordsCalculator(value)" :key="value" />
        </div>
    </section>
</template>

<script>
import cell from "./Cell.vue";
import {mapState} from "vuex";
import router from "../router"

export default {
    name: "grid",
    components: {cell},
    props: ["xMax", "yMax"],
    data() {
        return {
            
        }
    },
    methods: {
        coordsCalculator(value) {
            const x = value % parseInt(this.xMax)
            const y = parseInt(this.yMax) - Math.floor(value / parseInt(this.yMax))
            return (x == 0 ? parseInt(this.xMax) : x) + "-" +  (x == 0 ? y + 1 : y);
        }
    },
    computed: {
        ...mapState(["inGame"]),
        gridSetup() {
            let columns = "";
            let rows = "";

            for(let i = 0 ; i < parseInt(this.xMax) ; i++) columns += "36px ";
            for(let i = 0 ; i < parseInt(this.yMax) ; i++) rows += "36px ";

            return {
                display: "grid",
                padding: "1%",
                "justify-content": "center",
                "grid-template-columns": columns,
                "grid-template-rows:": rows,
                "background-color": "gray",
                "grid-gap": "2px"
            }
        }
    },
    beforeMount() {
        if(!this.inGame) router.push("/")
    }
}
</script>

<style lang="scss" scoped>
    section {
        background-color: white;
    }
</style>

