export default {
  updateCount (state, num) {
    console.log(state.count + num)
    state.count = state.count + num
  }
}
