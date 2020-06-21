import { contentsData } from '~/contents/contentsData.json'

export const state = () => ({
  talkList: contentsData
})

export const getters = {
  findTalksByYear: state => (year) => {
    return Object.values(state.talkList).filter(a => a.year === year)
  },
  showAllTalks: state => (year) => {
    return Object.values(state.talkList)
  }
}
