import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    token: null,
    renderPost: []
  },
  getters: {
    getUser( state ){
      return state.user
    },
    getToken( state ){
      return state.token
    },
    getRenderPost( state ){
      return state.renderPost
    }
  },
  mutations: {

    setUser( state, payload ){
      state.user = payload
    },
    setToken( state, payload ){
      state.token = payload
    },
    setRenderPost( state, payload ){
      state.renderPost = payload
    }
  },
  actions: {

    actionSetUser( { commit }, payload ){
      commit( 'setUser', payload )
    },

    actionSetToken( { commit }, payload ){
      commit( 'setToken', payload )
    },

    actionSetRenderPost( { commit }, payload ){
      commit( 'setRenderPost', payload )
    }

  },
  modules: {
  }
})
