import { partners2020 } from '~/references/partners2020.json'

export const state = () => ({
  partnerList: partners2020
})

export const getters = {
  findPartnersByCategory: state => (category) => {
    return Object.values(state.partnerList).filter(a => a.category === category)
  },
  findPartnerById: state => (id) => {
    return Object.values(state.partnerList).filter(a => Number(a.id) === id)
  },
  findPartnersByExceptionCategory: state => (category) => {
    return Object.values(state.partnerList).filter(a => a.category !== category)
  },
  showAllPartners: state => (category) => {
    return Object.values(state.partnerList)
  }
}
