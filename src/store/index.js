import { createStore } from 'vuex'

export default createStore({
  state: {
    nowMusic: '/musicFile/Digital Ghosts - Unicorn Heads.mp3',
    uploadAlbumState: false,
    reportDialog: false,
    deleteMusicDialog: true,
    uploadMusicDialog: false,
    isLogin: false,
    memberId: false,
    // idLogin: 'ddddd',
    mesId: 'fffff',
    rwdmusic: false
  },
  mutations: {
    setPlayMusic (state, payload) {
      state.nowMusic = payload
    },
    rwdMusic (state, payload) {
      state.rwdmusic = payload
    },
    setReportDialog (state, payload) {
      state.reportDialog = payload
    },
    setDeleteMusic (state, payload) {
      state.deleteMusicDialog = payload
    },
    login (state, payload) {
      state.isLogin = payload.account
      state.memberId = payload.memberId
    },
    // loginId (state, payload) {
    //   state.idLogin = payload
    // },
    setUploadMusicDialog (state, payload) {
      state.uploadMusicDialog = payload
    },
    mesId (state, payload) {
      state.mesId = payload
    },
    setUploadAlbumDialog (state, payload) {
      state.uploadAlbumState = payload
    }
  },
  actions: {
    playMusic (context, payload) {
      context.commit('setPlayMusic', payload)
    },
    uploadAlbumDialog (context, payload) {
      context.commit('setUploadAlbumDialog', payload)
    },
    rwdMusicitem (context, payload) {
      context.commit('rwdMusic', payload)
    },
    reportDialog (context, payload) {
      context.commit('setReportDialog', payload)
    },
    deleteMusicDialog (context, payload) {
      context.commit('setDeleteMusic', payload)
    },
    login (context, payload) {
      context.commit('login', payload)
    },
    // loginId (context, payload) {
    //   context.commit('loginId', payload)
    // },
    uploadMusicDialog (context, payload) {
      context.commit('setUploadMusicDialog', payload)
    },
    mesId (context, payload) {
      context.commit('mesId', payload)
    }
  },
  getters: {
    getNowMusic (state) {
      return state.nowMusic
    },
    rwdMusicState (state) {
      return state.rwdmusic
    },
    reportDialogState (state) {
      return state.reportDialog
    },
    deleteMusicState (state) {
      return state.deleteMusicDialog
    },
    uploadMusicDialogState (state) {
      return state.uploadMusicDialog
    },
    loginState (state) {
      return state.isLogin
    },
    memberIdState (state) {
      return state.memberId
    },
    // loginIdState (state) {
    //   return state.idLogin
    // },
    mesIdState (state) {
      return state.mesId
    },
    uploadAlbumState (state) {
      return state.uploadAlbumState
    }
  }
})
