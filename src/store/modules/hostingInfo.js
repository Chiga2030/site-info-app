import { API_KEY, API_URL } from "@/shared/constants"
import axios from "axios"


export default {
  state: {
    hostingInfo: null,
  },

  actions: {
    async fetchHostingInfo ({commit}, siteName) {
      commit('setCheckSiteFormLoading', true)

      const result = await axios({
        baseURL: API_URL,
        url: 'Host',
        params: {
          key: API_KEY,
          url: siteName
        }
      })


      if(result.data.result.code === 200) {
        commit('setHostingInfo', result.data)
      } else {
        commit('addAlert', result.data.result.msg)
      }
      commit('setCheckSiteFormLoading', false)
    },
  },

  mutations: {
    setHostingInfo (state, payload) {
      state.hostingInfo = payload.results[0]
    },
  },

  getters: {
    hostingInfo (state) {
      return state.hostingInfo
    },
  },
}
