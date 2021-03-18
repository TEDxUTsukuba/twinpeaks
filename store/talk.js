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
    const itemNum = Object.keys(state.talkList).length;
    const randNum = Math.floor(Math.random() * itemNum);
    console.log(randNum+1, ((randNum + 4) % itemNum)+1, ((randNum + 8) % itemNum)+1, ((randNum + 12) % itemNum)+1);
    return Object.values(state.talkList).filter(a => a.id === randNum || a.id === ((randNum + 4) % itemNum) || a.id === ((randNum + 8) % itemNum) || a.id === ((randNum + 12) % itemNum))
  }
}
