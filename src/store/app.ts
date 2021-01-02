import axios, { AxiosResponse } from 'axios'
import { Commit, Dispatch, Store } from 'vuex'

const url = 'https://rickandmortyapi.com/api/'

type TItemQueryType = 'character' | 'location' | 'episode'

export default {
  state: {
    isLoading: false,
    content: [],
    nextPageUrl: '',
  },
  mutations: {
    setIsLoading(state: any) {
      state.isLoading = !state.isLoading
    },
    setContent(state: any, content) {
      state.content = content
    },
    pushNextPage(state: any, content) {
      content.forEach(i => {
        state.content.push(i)
      })
    },
    setNextPage(state: any, nextPageUrl: string) {
      state.nextPageUrl = nextPageUrl
    },
  },
  actions: {
    async getContent(
      { commit }: { commit: Commit },
      itemsType: TItemQueryType
    ) {
      try {
        commit('setIsLoading')
        const res: any = await axios.get(`${url}${itemsType}`)
        commit('setNextPage', res.data.info.next)
        commit('setContent', res.data.results)
        commit('setIsLoading')
      } catch (e) {
        console.log('ERROR GET - ', e.message)
      }
    },
    async getNextContentPage({
      commit,
      state,
    }: {
      commit: Commit
      state: any
    }) {
      try {
        if (state.nextPageUrl) {
          commit('setIsLoading')
          const res: any = await axios.get(state.nextPageUrl)
          commit('setIsLoading')
          commit('setNextPage', res.data.info.next)
          commit('pushNextPage', res.data.results)
          // if (res) {
          //   commit('setIsLoading')
          // }
        }
      } catch (e) {
        console.log('ERROR GET - ', e.message)
      }
    },
  },
  getters: {
    isLoading: (s: any) => s.isLoading,
    content: s => s.content,
  },
}
