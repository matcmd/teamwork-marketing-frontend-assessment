import { logInfo } from '@/utils/helpers'

export const state = () => ({
  data: {},
})

export const mutations = {
  add(state, data) {
    const addIdToItem = (item) => ({ ...item, id: Math.ceil(Math.random()*1000000) })    
    state.data = {
      ...data,
      items: data.items?.map(addIdToItem)
    }
    logInfo('Added challenges:')
    logInfo(state.data)
  },
  open(state, id) {
    const toggleItem = (item) => ({ 
      ...item, 
      open: item.id === id
    })   
    state.data = {
      ...state.data,
      items: state.data.items?.map(toggleItem)
    }
    logInfo(`Opened challenge with id ${id}`)
  }
}