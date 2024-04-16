import { createStore } from 'vuex'

export default createStore({
  state: {
    language: 'en'
  },
  getters: {
    getLanguage(state){
      return state.language
    }
  },
  mutations: {
    setLanguage(state,lang){
      state.language = lang
    }
  },
  actions: {
  },
  modules: {
  }
})
