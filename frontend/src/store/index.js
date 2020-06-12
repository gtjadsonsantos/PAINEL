import { combineReducers, createStore } from 'redux'

import Administration from './Administration'

const rootReducer = combineReducers({
  Administration
})

const store = createStore(rootReducer)

export default store