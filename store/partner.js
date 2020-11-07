import { partners2020 } from '~/contents/partners2020.json'

export const state = () => ({
  partnerList: partners2020
})

export const getters = {
  showAllPartners: state => (year) => {
    return Object.values(state.partnerList)
  }
}
