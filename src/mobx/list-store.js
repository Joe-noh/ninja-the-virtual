import {observable} from 'mobx'

class ListStore {
  @observable list = []

  add (item) {
    this.list.push(item)
  }
}

const listStore = new ListStore()

export default listStore
