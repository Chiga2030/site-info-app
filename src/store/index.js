import Vue from 'vue'
import Vuex from 'vuex'
import hostingInfo from './modules/hostingInfo'
import querySelector from './modules/querySelector'
import alerts from './modules/alerts'
import technologiesInfo from './modules/technologiesInfo'
import checkSiteForm from './modules/checkSiteForm'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    hostingInfo,
    querySelector,
    alerts,
    technologiesInfo,
    checkSiteForm,
  }
})
