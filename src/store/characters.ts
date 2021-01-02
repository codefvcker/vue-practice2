import axios, { AxiosResponse } from 'axios'
import { Commit, Dispatch, Store } from 'vuex'

export default {
  state: {
    // charecters: [],
    // nextPageUrl: '',
  },
  mutations: {
    // setCharacters(state: any, charecters) {
    //   state.charecters = charecters
    // },
    // pushNextPage(state: any, charecters) {
    //   charecters.forEach(i => {
    //     state.charecters.push(i)
    //   })
    // },
    // setNextPage(state: any, nextPageUrl: string) {
    //   state.nextPageUrl = nextPageUrl
    // },
  },
  actions: {
    // async getCharecters({ commit }: { commit: Commit }) {
    //   try {
    //     commit('setIsLoading')
    //     const res: any = await axios.get(
    //       'https://rickandmortyapi.com/api/character'
    //     )
    //     commit('setNextPage', res.data.info.next)
    //     commit('setCharacters', res.data.results)
    //     commit('setIsLoading')
    //   } catch (e) {
    //     console.log('ERROR GET - ', e.message)
    //   }
    // },
    // async getNextCharectersPage({
    //   commit,
    //   state,
    // }: {
    //   commit: Commit
    //   state: any
    // }) {
    //   try {
    //     if (state.nextPageUrl) {
    //       commit('setIsLoading')
    //       const res: any = await axios.get(state.nextPageUrl)
    //       commit('setIsLoading')
    //       commit('setNextPage', res.data.info.next)
    //       commit('pushNextPage', res.data.results)
    //       // if (res) {
    //       //   commit('setIsLoading')
    //       // }
    //     }
    //   } catch (e) {
    //     console.log('ERROR GET - ', e.message)
    //   }
    // },
  },
  getters: {
    // charecters: s => s.charecters,
  },
}
