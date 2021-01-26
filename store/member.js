import { members2021 } from '~/contents/members2021.json'

export const state = () => ({
  memberList: members2021
})

export const getters = {
  showAllMembers: state => (year) => {
    return Object.values(state.memberList)
  }
}
