<template>
   <div class="cardetails">
      <section class="header"><h1>{{getCurrentAnimal.id}}</h1></section>
      <hr>
      <h2>Details</h2>
      <div class="details">
        <h3>Name: {{getCurrentAnimal.name}}</h3>
        <h3>Description: {{getCurrentAnimal.description}}</h3>
        <h3>Horse Power: {{getCurrentAnimal.foto}}</h3>
      </div>
      </div>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
    data(){
        return {
          sound: {},
          isPlaying: false,
        }
    },
    mounted(){
      this.sound = document.getElementById("audio")
    },
    computed:{
        ...mapGetters(['getCurrentAnimal']),
    },
    methods:{
      getPath(picturepath){
        if(picturepath == null) {
          return
        }
        return require(`../assets/${picturepath}`)
      },
     
    }

}
</script>

<style lang="scss" scoped>
.cardetails{
    width:100%;
  }

  .header{  
    width:100%;
    background-color: black;
    color:white;
  }

  .details{
    width:80%;
    display: inline-block;
    border: 1px solid black;
    margin: 10px;
  }

  .image{
    width:33.3%;
  }
  .interior{
    transition: transform 0.4s;
  }
  .interior:hover{
    /* width:50%; */
    transform: scale(1.3);
    /* height:auto; */
  }

</style>