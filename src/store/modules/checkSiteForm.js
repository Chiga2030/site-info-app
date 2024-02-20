export default {
  state: {
    isLoading: false
  },

  mutations: {
    setCheckSiteFormLoading (store, payload) {
      store.isLoading = payload
    }
  },

  getters: {
    isCheckSiteFormLoading (state) {
      return state.isLoading
    }
  }
}
