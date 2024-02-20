export default {
  state: {
    alerts: [],
  },

  getters: {
    alertList (state) {
      return state.alerts
    },
  },

  mutations: {
    addAlert (state, payload) {
      state.alerts.push(payload)
    }
  },
}
