import axios, { AxiosResponse } from 'axios'
import { Commit, Dispatch, Store } from 'vuex'

const url = 'https://rickandmortyapi.com/api/'

type TItemQueryType = {
  type: 'character' | 'location' | 'episode'
  id?: number | number[]
}

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
    async getContent({ commit }: { commit: Commit }, { type }: TItemQueryType) {
      try {
        commit('setIsLoading')
        const res: any = await axios.get(`${url}${type}`)
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
    async getItemsById(state: any, { type, id }: TItemQueryType) {
      try {
        const res = await axios.get(`${url}${type}/${id}`)
        return res.data
      } catch (e) {
        console.log('ERROR IS - ', e.message)
      }
    },
  },
  getters: {
    isLoading: (s: any) => s.isLoading,
    content: s => s.content,
  },
}
