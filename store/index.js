import IDB from './utils/IDB'

export const state = () => ({
  listOfSpontaneousApplication: [],
})

export const mutations = {
  updateList(state, fromDB) {
    state.listOfSpontaneousApplication = fromDB
  },
}

export const actions = {
  addToDB(state, newSpontaneousApplication) {
    const list = state.state.listOfSpontaneousApplication

    const IDToIncrement = list[list.length - 1]?.id || 0

    const newSponApp = {
      id: IDToIncrement + 1,
      ...newSpontaneousApplication,
    }
    IDB(state, 'addToDB', newSponApp)
  },
  getFromDB(state) {
    IDB(state, 'getFromDB')
  },
  deleteInDB(_state, spontaneousApplicationToDelete) {
    IDB(_state, 'deleteInDB', spontaneousApplicationToDelete)
  },
}
