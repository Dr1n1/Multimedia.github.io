import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentAnimal: {},

    animals: [
      {
        id: "1",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test3",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },

      {
        id: "2",
        name: "Majmun",
        image1: 'hamster.png',
        description: "test2",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "3",
        name: "Fatkue",
        image1: 'hamster.png',
        description: "test4",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "4",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test5",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "5",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test6",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "6",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test7",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "7",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test8",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "8",
        name: "Brejtes",
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