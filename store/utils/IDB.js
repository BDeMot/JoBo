import SponAppConstructor from '../models/SpontaneousApplication'

const IDBopen = (state, operationType, payload) => {
  let db = ''
  const openRequest = indexedDB.open('dbtest', 1)

  openRequest.onupgradeneeded = () => {
    db = openRequest.result

    if (!db.objectStoreNames.contains('spontaneousApplications')) {
      db.createObjectStore('spontaneousApplications', {
        keyPath: 'id',
      })
    }
  }

  openRequest.onerror = () => {
    alert("y'a un pb!")
  }

  openRequest.onsuccess = () => {
    db = openRequest.result
    const transaction = db.transaction('spontaneousApplications', 'readwrite')
    transaction.oncomplete = () => {
      console.log('IndexedDB : transaction terminée!')
    }

    const spontaneousApplications = transaction.objectStore(
      'spontaneousApplications'
    )

    // Vuex Action: CREATE
    if (operationType === 'addToDB') {
      const add = spontaneousApplications.add(payload)

      add.onsuccess = () => {
        state.dispatch('getFromDB')
        console.log('sponApp ajouté avec clé :' + add.result)
      }
      add.onerror = () => {
        console.log('erreur : ' + add.error)
      }
    }
    // Vuex Action: READ
    if (operationType === 'getFromDB') {
      const getAll = spontaneousApplications.getAll()

      getAll.onsuccess = () => {
        const listOfSpontaneousApplication = []
        if (getAll.result.length > 0) {
          getAll.result
            .map((sponApp) => new SponAppConstructor(sponApp))
            .forEach((sponApp) => {
              listOfSpontaneousApplication.push(sponApp)
            })
        }
        state.commit('updateList', listOfSpontaneousApplication)
      }
      getAll.onerror = () => {
        console.log('erreur : ' + getAll.error)
      }
    }
    // Vuex Action: DELETE
    if (operationType === 'deleteInDB') {
      const deleteInDB = spontaneousApplications.delete(payload)

      deleteInDB.onsuccess = () => {
        state.dispatch('getFromDB')
      }
      deleteInDB.onerror = () => {
        console.log('erreur : ' + deleteInDB.error)
      }
    }
  }
}

export default IDBopen
