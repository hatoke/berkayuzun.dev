export const state = () => ({
  windowFullscreenStatus: true,
  windowList: [],
  windowFile: [],
})

export const getters = {
  windowList() {
    return state().windowList
  },

  windowFile() {
    return state().windowFile
  },
}

export const mutations = {
  ADD_LIST(state, newObject) {
    if (newObject && typeof newObject === 'object') {
      const isHas = state.windowList.some(
        (item) => item.text === newObject.text
      )
      if (!isHas) {
        newObject.id = Math.floor(Math.random() * 1000)
        state.windowList.push(newObject)
      }
    }
  },

  REMOVE_LIST(state, componentName) {
    const index = state.windowList.findIndex(
      (item) => item.component === componentName
    )
    if (state.windowList[index]) {
      state.windowList.splice(index, 1)
    }
  },

  ADD_FILE(state, newFile) {
    if (newFile && typeof newFile === 'object') {
      state.windowFile.push(newFile)
    }
  },

  UPDATE_FULLSCREEN_STATUS(state, status) {
    state.windowFullscreenStatus = status
  },
}

export const actions = {
  addWindowList({ commit }, newItem) {
    commit('ADD_LIST', newItem)
  },

  removeWindowList({ commit }, componentName) {
    commit('REMOVE_LIST', componentName)
  },

  addNewFile({ commit }, newItem) {
    commit('ADD_FILE', newItem)
  },

  updateFullscreenStatus({ commit }, status) {
    commit('UPDATE_FULLSCREEN_STATUS', status)
  },
}
