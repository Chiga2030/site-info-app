import { API_KEY, API_URL } from "@/shared/constants"
import axios from "axios"

export default {
  state: {
    technologiesInfo: null,
  },

  actions: {
    async fetchTechnologiesInfo ({commit}, siteName) {
      commit('setCheckSiteFormLoading', true)

      const result = await axios({
        baseURL: API_URL,
        url: 'Tech',
        params: {
          key: API_KEY,
          url: siteName
        }
      })


      if(result.data.result.code === 200) {
        commit('setTechnologiesInfo', result.data)
      } else {
        commit('addAlert', result.data.result.msg)
      }
      commit('setCheckSiteFormLoading', false)
    },
  },

  mutations: {
    setTechnologiesInfo (state, payload) {
      state.technologiesInfo = payload.results
    },
  },

  getters: {
    technologiesInfo (state) {
      return state.technologiesInfo
    },
  },
}
