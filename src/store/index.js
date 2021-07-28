import { createStore } from 'vuex'

export default createStore({
  state: {
    reportDialog: false,
    deleteMusicDialog: true,
    isLogin: false
  },
  mutations: {
    setReportDialog (state, payload) {
      state.reportDialog = payload
    },
    setDeleteMusic (state, payload) {
      state.deleteMusicDialog = payload
    },
    login (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    reportDialog (context, payload) {
      context.commit('setReportDialog', payload)
    },
    deleteMusicDialog (context, payload) {
      context.commit('setDeleteMusic', payload)
    },
    login (context, payload) {
      context.commit('login', payload)
    }
  },
  getters: {
    reportDialogState (state) {
      return state.reportDialog
    },
    deleteMusicState (state) {
      return state.deleteMusicDialog
    },
    loginState (state) {
      return state.isLogin
    }
  }
})
