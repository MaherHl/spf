import {configureStore} from '@reduxjs/toolkit'
import painterReducer from '../faetures/painters'

const store = configureStore({
  reducer:{
    painters:painterReducer,
     
  }
})
export default store