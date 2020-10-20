import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentAnimal: {},
    animals: [
      // Kafshet ne aijr 
      {
        id: "1",
        name: "Albatross",
        image1: 'albatross.png',
        description: "Albatrosses are very large seabirds in the family Diomedeidae. They range widely in the Southern Ocean and the North Pacific. They are absent from the North Atlantic, although fossil remains show they once occurred there and occasional vagrants are found. Albatrosses are among the largest of flying birds, and species of the genus Diomedea have the longest wingspans of any extant birds, reaching up to 3.7 m. Albatrosses are usually regarded as falling into four genera, but disagreement exists over the number of species.",
        foto: 'albatross-photo1.jpg',
        foto2: 'Albatross2.jpg',
        gif: 'albatross.gif',
        audio: 'albatros.mp3',
        video: 'albatross.mp4'
      },

      {
        id: "2",
        name: "Bald Eagle",
        image1: 'BaldEalge.png',
        description: "The bald eagle is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle. Its range includes most of Canada and Alaska, all of the contiguous United States, and northern Mexico. It is found near large bodies of open water with an abundant food supply and old-growth trees for nesting.",
        foto: 'baldeagle.jpg',
        foto2: 'Bald-Eagle-777x518.jpg',
        gif: 'baldeagle.gif',
        audio: 'Eagle-sound-effect.mp3'
      },
      {
        id: "3",
        name: "Owl",
        image1: 'icons8_owl_120px.png',
        description: "test4",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "4",
        name: "Flamingo",
        image1: 'icons8_flamingo_120px.png',
        description: "test4",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "5",
        name: "Parrot",
        image1: 'icons8_parrot_120px.png',
        description: "test5",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "6",
        name: "Pelican",
        image1: 'Pelican.png',
        description: "test6",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "7",
        name: "Peacock",
        image1: 'icons8_peacock_head_120px.png',
        description: "test7",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "8",
        name: "Sparrow",
        image1: 'icons8_bird_120px.png',
        description: "test8",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },     
      {
        // Kafshet ne toke
        id: "9",
        name: "Anaconda",
        image1: 'icons8_snake_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "10",
        name: "Rodents",
        image1: 'icons8_hamster_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "11",
        name: "Elephant",
        image1: 'icons8_elephant_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "13",
        name: "Lion",
        image1: 'icons8_lion_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "14",
        name: "Squirrel",
        image1: 'icons8_squirrel_120px_1.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "15",
        name: "Hedgehog",
        image1: 'icons8_hedgehog_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      // Kafshet ne Uje
      {
        id: "16",
        name: "Crab",
        image1: 'icons8_crab_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "17",
        name: "Dolphin",
        image1: 'icons8_dolphin_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "18",
        name: "Lobster",
        image1: 'icons8_lobster_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "19",
        name: "Seahorse",
        image1: 'icons8_seahorse_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "20",
        name: "Squid",
        image1: 'icons8_squid_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "21",
        name: "Seal",
        image1: 'icons8_seal_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "22",
        name: "Walrus",
        image1: 'icons8_walrus_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "23",
        name: "Whale",
        image1: 'icons8_whale_120px.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
    ],
   
  
  },
  mutations: {
    SET_CURRENT: (state, animal) => {
      state.currentAnimal = animal
    }
  },
  actions: {
    setCurrent(context, animal) {
      context.commit("SET_CURRENT", animal);
    },
  },
  getters: {
    getAnimals: state => state.animals,
    getCurrentAnimal: state => state.currentAnimal,
    getAnimalById: (state, id) => state.animals.find((c) => c.id == id),
  },
  
});
