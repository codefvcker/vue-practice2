import axios, { AxiosResponse } from 'axios'
import { Commit, Dispatch, Store } from 'vuex'

export default {
  state: {
    characters: [],
  },
  mutations: {
    setCharacters(state: any, characters) {
      state.characters = characters
    },
  },
  actions: {
    async getCharacters({ commit }: { commit: Commit }) {
      const res: any = await axios.get(
        'https://rickandmortyapi.com/api/character'
      )
      console.log(res)
      commit('setCharacters', res.data.results)
    },
  },
  getters: {
    characters: s => s.characters,
  },
}
