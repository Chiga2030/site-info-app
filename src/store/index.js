import Vue from 'vue'
import Vuex from 'vuex'
import siteInfo from './modules/siteInfo'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    siteInfo
  }
})
