export const state = () => ({
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
      newObject.id = Math.floor(Math.random() * 1000)
      state.windowList.push(newObject)
    }
  },

  REMOVE_LIST(state, index) {
    if (state.windowList[index]) {
      state.windowList.splice(index, 1)
    }
  },

  ADD_FILE(state, newFile) {
    if (newFile && typeof newFile === 'object') {
      state.windowFile.push(newFile)
    }
  },
}

export const actions = {
  addWindowList({ commit }, newItem) {
    commit('ADD_LIST', newItem)
  },

  removeWindowList({ commit }, index) {
    commit('REMOVE_LIST', index)
  },

  addNewFile({ commit }, newItem) {
    commit('ADD_FILE', newItem)
  },
}
