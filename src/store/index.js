import { createStore } from 'vuex'

export default createStore({
  state: {
    reportDialog: false,
    deleteMusicDialog: true
  },
  mutations: {
    setReportDialog (state, payload) {
      state.reportDialog = payload
    },
    setDeleteMusic (state, payload) {
      state.deleteMusicDialog = payload
    }
  },
  actions: {
    reportDialog (context, payload) {
      context.commit('setReportDialog', payload)
    },
    deleteMusicDialog (context, payload) {
      context.commit('setDeleteMusic', payload)
    }
  },
  getters: {
    reportDialogState (state) {
      return state.reportDialog
    },
    deleteMusicState (state) {
      return state.deleteMusicDialog
    }
  }
})
