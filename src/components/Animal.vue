<template>
<div class="animaldetails">
    <section class="header">
        <h1>{{getCurrentAnimal.id}}</h1>

    </section>
    <hr>
    <h2>Details</h2>
    <div class="details">
        <div class="photo"> </div>
        <h1>Name: {{getCurrentAnimal.name}}</h1>
        <h3>Description: {{getCurrentAnimal.description}}</h3>
        <img class="image" v-webp="getPath(getCurrentAnimal.foto)">
        <img class="image" v-webp="getPath(getCurrentAnimal.foto2)">

        <div v-if="getCurrentAnimal.video != ''">
            <video class="vid" width="960" height="720" controls>
                <source :src="getPath(getCurrentAnimal.video)" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="gif-sound">
        <h3> In this section it will be shown the animal movement and the sound of the animal.</h3>
        <img class="image" v-webp="getPath(getCurrentAnimal.gif)">
        <h3>How it sounds:</h3>
        <button title="Hear the sound!" @click="playAudio()"><img :src="getPath('volume-level.svg')" alt="" style="width:30px;heights:30px"></button>
        <audio id="audio" controls hidden>
            <source :src="getPath(getCurrentAnimal.audio)" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>

</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {
    data() {
        return {
            sound: {},
            isPlaying: false,
        }
    },
    mounted() {
        this.sound = document.getElementById("audio")
    },

    computed: {
        ...mapGetters(['getCurrentAnimal']),
    },
    methods: {
        getPath(picturepath) {
            if (picturepath == null) {
                return
            }
            return require(`../assets/${picturepath}`)
        },
        playAudio() {
            this.isPlaying ? this.sound.pause() : this.sound.play();
            this.isPlaying = !this.isPlaying
        }

    }

}
</script>

<style lang="scss" scoped>
.animaldetails {
    width: 100%;
}

.header {
    width: 100%;
    background-color: black;
    color: white;
}

.details {
    width: 80%;
    display: inline-block;
    border: 1px solid black;
    margin: 10px;
}

.gif-sound {
    width: 80%;
    display: inline-block;
    border: 1px solid black;
    margin: 10px;
}

.image {
    width: 33.3%;
    width: 300px;
    margin: 15px 0;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
}

.image:hover {
    width: 400px;
    margin-left: -50px;
}

h1:hover {
    color: green;
}
</style>
