import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentAnimal: {},
    currentTerran: {},
    currentAqua: {},
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
    terran: [
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
    aqua: [
      {
        id: "11",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test3",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },

      {
        id: "22",
        name: "Majmun",
        image1: 'hamster.png',
        description: "test2",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "33",
        name: "Fatkue",
        image1: 'hamster.png',
        description: "test4",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "44",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test5",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "55",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test6",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "66",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test7",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "77",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test8",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
      {
        id: "88",
        name: "Brejtes",
        image1: 'hamster.png',
        description: "test9",
        foto: 'hamster.png',
        video: 'hamster.png',
        gif: 'hamster.png',
      },
    ],
  },
  //Kafshet airore 
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
  // // Kafshet toksore Tokesore
  // mutations: {
  //   SET_CURRENT: (state, terran) => {
  //     state.currentTerran = terran
  //   }
  // },
  // actions: {
  //   setCurrent(context, terran) {
  //     context.commit("SET_CURRENT", terran);
  //   },
  // },
  // getters: {
  //   getTerran: state => state.terran,
  //   getCurrentTerran: state => state.currentTerran,
  //   getTerranById: (state, id) => state.terran.find((t) => t.id == id),
  // },
  // // Kafshet toksore Ujore
  // mutations: {
  //   SET_CURRENT: (state, aqua) => {
  //     state.currentAqua = aqua
  //   }
  // },
  // actions: {
  //   setCurrent(context, aqua) {
  //     context.commit("SET_CURRENT", aqua);
  //   },
  // },
  // getters: {
  //   getAqua: state => state.aqua,
  //   getCurrentAqua: state => state.currentAqua,
  //   getAquaById: (state, id) => state.aqua.find((a) => a.id == id),
  // },
});
