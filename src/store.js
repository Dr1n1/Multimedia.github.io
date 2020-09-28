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
        image1: 'collar.png',
        description: "test3",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },

      {
        id: "2",
        name: "Bald Eagle",
        image1: 'hamster.png',
        description: "test2",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "3",
        name: "Owl",
        image1: 'hamster.png',
        description: "test4",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "4",
        name: "Flamingo",
        image1: 'hamster.png',
        description: "test4",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "5",
        name: "Parrot",
        image1: 'hamster.png',
        description: "test5",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "6",
        name: "Pelican",
        image1: 'hamster.png',
        description: "test6",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "7",
        name: "Peacock",
        image1: 'hamster.png',
        description: "test7",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "8",
        name: "Sparrow",
        image1: 'hamster.png',
        description: "test8",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },     
      {
        // Kafshet ne toke
        id: "9",
        name: "Anakonda",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "10",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "11",
        name: "Elephant",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "13",
        name: "Lion",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "14",
        name: "Squirrel",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "15",
        name: "Hedgehog",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      // Kafshet ne Uje
      {
        id: "16",
        name: "Crab",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "17",
        name: "Dolphin",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "18",
        name: "Lobster",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "19",
        name: "Seahorse",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "20",
        name: "Squid",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "21",
        name: "Seal",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "22",
        name: "Walrus",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "23",
        name: "Whale",
        image1: 'hamster.png',
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
