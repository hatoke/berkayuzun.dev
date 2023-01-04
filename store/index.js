export const state = () => ({
  windowList: [],
  windowFile: [
    {
      id: Math.floor(Math.random() * 1000),
      icon: '/img/macos/icons/file.png',
      text: 'Berkay-UZUN-CV-TR.pdf',
    },
  ],
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

  ADD_FILE(state, newFile) {
    if (newFile && typeof newFile === 'object') {
      state.windowFile.push(newFile)
    }
  },
}

export const actions = {
  addNewList({ commit }, { newItem }) {
    commit('ADD_LIST', newItem)
  },

  addNewFile({ commit }, newItem) {
    commit('ADD_FILE', newItem)
  },
}
