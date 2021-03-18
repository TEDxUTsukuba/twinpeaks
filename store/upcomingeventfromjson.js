import jsonEventList from '~/contents/upcomingEvents.json'

export const state = () => ({
  data: jsonEventList
})

export const getters = {
  findById: (state) => (id) => {
    return state.data.filter(a => a.id === id)
  },
  getAll: (state) => {
    return state.data
  },
}
