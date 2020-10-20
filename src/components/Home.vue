<template>
<div class="home">

    <head>
        <link href="https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css" rel="stylesheet">
    </head>
    <full-page :options="options">

        <div class="section">
            <div class="container">
                <div class="box" v-for="animal in getAnimals" :key="animal.id" v-if="animal.id <= 8">
                    <div class="content">
                        <img alt="image" :src="getPath(animal.image1)" />

                        <p>{{ animal.name }}</p>

                        <div class="centerx">
                            <router-link to="/animal">
                                <button class="butoon" title="View Details!" @click="setCurrentAnimal(animal)" color="danger" type="border">Details
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="container2">
                <div class="box" v-for="animal in getAnimals" :key="animal.id" v-if="animal.id < 16 && animal.id > 8">
                    <div class="content">
                        <img alt="image" :src="getPath(animal.image1)" />

                        <p>{{ animal.name }}</p>

                        <div class="centerx">
                            <router-link to="/animal">
                                <button class="butoon" title="View Details!" @click="setCurrentAnimal(animal)" color="danger" type="border">Details
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container3">
                <div class="box" v-for="animal in getAnimals" :key="animal.id" v-if="animal.id > 16">
                    <div class="content">
                        <img alt="image" :src="getPath(animal.image1)" />

                        <p>{{ animal.name }}</p>

                        <div class="centerx">
                            <router-link to="/animal">
                                <button class="butoon" title="View Details!" @click="setCurrentAnimal(animal)" color="danger" type="border">Details
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </full-page>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
import FullPage from "vue-fullpage.js";
export default {
    name: 'home',
    components: {
        FullPage
    },
    data() {
        return {
            options: {
                paddingTop: '30px',
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
            }
        }
    },

    computed: {
        ...mapGetters(["getAnimals"]),
    },
    mounted() {

    },
    methods: {
        ...mapActions(["setCurrent"]),

        getPath(picturepath) {
            if (picturepath == null) {
                return;
            }
            return require(`../assets/${picturepath}`);
        },
        setCurrentAnimal(c) {
            this.setCurrent(c);
        }
    },

    destroyed() {
        $.fn.fullpage.destroy('all');
    }
}
</script>

<style scoped>
#app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-self: center;
    min-height: 100vh;
    background: #222;
}

.container {
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: minmax(100px, auto);
    margin: 40px;
    grid-auto-flow: dense;
    grid-gap: 10px;
}

.container2 {
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: minmax(100px, auto);
    margin: 40px;
    grid-auto-flow: dense;
    grid-gap: 10px;
}

.container3 {
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: minmax(100px, auto);
    margin: 40px;
    grid-auto-flow: dense;
    grid-gap: 10px;
}

.box {
    background: #333;
    padding: 20px;
    display: grid;
    font-size: 20px;
    place-items: center;
}

.container .box:hover {
    background: #16c0b0;
}

.container .box img {
    position: relative;
    max-width: 100px;
    margin-bottom: 10px;
}

.container .box:nth-child(1) {
    grid-column: span 2;
    grid-row: span 1;
}

.container .box:nth-child(2) {
    grid-column: span 1;
    grid-row: span 1;
}

.container .box:nth-child(3) {
    grid-column: span 1;
    grid-row: span 1;
}

.container .box:nth-child(4) {
    grid-column: span 1;
    grid-row: span 1;
}

.container .box:nth-child(5) {
    grid-column: span 1;
    grid-row: span 1;
}

.container .box:nth-child(6) {
    grid-column: span 1;
    grid-row: span 2;
}

.container .box:nth-child(7) {
    grid-column: span 1;
    grid-row: span 2;
}

.container .box:nth-child(8) {
    grid-column: span 2;
    grid-row: span 1;
}

/* Container 2  */
.container2 .box:hover {
    background: #16c0b0;
}

.container2 .box img {
    position: relative;
    max-width: 100px;
    margin-bottom: 10px;
}

.container2 .box:nth-child(1) {
    grid-column: span 1;
    grid-row: span 1;
}

.container2 .box:nth-child(2) {
    grid-column: span 1;
    grid-row: span 1;
}

.container2 .box:nth-child(3) {
    grid-column: span 1;
    grid-row: span 1;
}

.container2 .box:nth-child(4) {
    grid-column: span 1;
    grid-row: span 2;
}

.container2 .box:nth-child(5) {
    grid-column: span 1;
    grid-row: span 1;
}

.container2 .box:nth-child(6) {
    grid-column: span 2;
    grid-row: span 1;
}

.container3 .box:hover {
    background: #16c0b0;
}

.container3 .box img {
    position: relative;
    max-width: 100px;
    margin-bottom: 10px;
}

.container3 .box:nth-child(1) {
    grid-column: span 1;
    grid-row: span 2;
}

.container3 .box:nth-child(2) {
    grid-column: span 1;
    grid-row: span 1;
}

.container3 .box:nth-child(3) {
    grid-column: span 1;
    grid-row: span 1;
}

.container3 .box:nth-child(4) {
    grid-column: span 1;
    grid-row: span 1;
}

.container3 .box:nth-child(5) {
    grid-column: span 1;
    grid-row: span 1;
}

.container3 .box:nth-child(6) {
    grid-column: span 1;
    grid-row: span 1;
}

@media (max-width: 991px) {
    .container {
        grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
        grid-template-rows: minmax(auto, auto);
    }
}

p {
    color: #84cf6a;
}

.home>div:nth-child(1) {
    background: gray;
}

.home>div:nth-child(2) {
    background: yellow;
}

.home>div:nth-child(3) {
    background: green;
}

.section {
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
</style>
