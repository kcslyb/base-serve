const common = {
  state: {
    fileUploadPath: 'http://127.0.0.1:8018/api/file/upload',
    dict: [],
    dictGroup: {}
  },
  mutations: {
    SET_DICT: (state: any, data: any) => {
      if (!state.dict.includes(data)) {
        state.dict.unshift(data)
      }
    },
    SET_DICT_GROUP: (state: any, data: any) => {
      state.dictGroup[state.dict[0]] = data
    }
  },
  actions: {
    initDict: ({ commit }: { commit: any }) => {
      commit('SET_DICT', commit)
    }
  }
}

export default common
