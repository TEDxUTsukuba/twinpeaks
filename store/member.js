import { members2020 } from '~/contents/members2020.json'

export const state = () => ({
  memberList: members2020
})

export const getters = {
  showAllMembers: state => (year) => {
    return Object.values(state.memberList)
  }
}
