import Vue from "vue";
import Vuex from "vuex";
import films from "@/assets/films.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: films.map(film => {
      return film;
    })
  },
  mutations: {},
  actions: {},
  getters: {
    movies: state => state.movies,
    movieById: state => id => {
      return state.movies.find(movie => movie.kinopoisk_id === id);
    }
  },
  modules: {}
});
