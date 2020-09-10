import { initGlobalState, MicroAppStateActions } from 'qiankun'

const initialState = {
  user: {}
}
const actions: MicroAppStateActions = initGlobalState(initialState)

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev)
})

actions.setGlobalState(initialState)
actions.offGlobalStateChange()

export default actions
