import jsonEventList from '~/references/upcomingEvents.json'

export const state = () => ({
  // data: jsonEventList
  items: []
})

export const mutations = {
  setItems (state, items) {
    state.items = items
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await axios.get('https://script.google.com/macros/s/AKfycbzLxjNxZLZ5izrM5boDp0nM396uyzReduC7nr2axZepkPhXUJwS9sP3_rn3268EOP49bw/exec')
    commit('setItems', data)
  }
}

export const getters = {
  findById: (state) => (id) => {
    return state.items.filter(a => a.id === id)
  }
}


// export const getters = {
//   findById: (state) => (id) => {
//     return state.data.filter(a => a.id === id)
//   },
//   getAll: (state) => {
//     return state.data.filter(a => a.id !== 202003181442 || a.id !== 1)
//   },
//   getLatest: (state) => {
//     return state.data.filter(a => a.id === value)
//   },
// }
