export default {
  state: {
    items: [
      {
        value: 'hosting',
        label: 'Данные хостинга'
      },
      {
        value: 'technologies',
        label:'Технологии'
      }
    ],

    selectedTypeQuery: '',
  },

  getters: {
    queryTypeSelectorItems (state) {
      return state.items
    },

    selectedTypeQuery (state) {
      return state.selectedTypeQuery
    }
  },

  mutations: {
    setSelectedTypeQuery (state, payload) {
      state.selectedTypeQuery = payload
    }
  }
}
