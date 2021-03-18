import { contentsData } from '~/contents/contentsData.json'

export const state = () => ({
  talkList: contentsData
})

export const getters = {
  findTalksByYear: state => (year) => {
    return Object.values(state.talkList).filter(a => a.year === year)
  },
  showAllTalks: state => (year) => {
    return Object.values(state.talkList).reverse()
  },
  getRandomTalks: state => (year) => {
    var num = []
    for (var i=0; i<4; i++){
      num[i] = Math.floor(Math.random() * Object.keys(state.talkList).length);
    }
    return Object.values(state.talkList).filter(a => a.id === num[0] || a.id === num[1] || a.id === num[2] || a.id === num[3])
  }
}
