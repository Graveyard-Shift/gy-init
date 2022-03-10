export const hooks = `
import {
  TypedUseSelectorHook,
  useDispatch as useDispatch_,
  useSelector as useSelector_
} from 'react-redux'
import type { RootState, AppDispatch } from '../../store'

export const useDispatch = () => useDispatch_<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useSelector_
`.trimStart()

export const store = `
import { configureStore } from '@reduxjs/toolkit'
import dummy from '../reducers/dummy'

const store = configureStore({
  reducer: {
    dummy
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
`.trimStart()

export const dummyReducer = `
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DummyState {
  dummyProp: string[]
  dummyProp2: string
}

export const dummySlice = createSlice({
  name: 'tabs',

  initialState: {
    dummyProp: [],
    dummyProp2: ''
  } as DummyState,

  reducers: {
    dummy: (state, action: PayloadAction<string>) => {
      state.dummyProp.push(action.payload)
      state.dummyProp2 = action.payload
    }
  }
})

export const { dummy } = dummySlice.actions
export default dummySlice.reducer
`.trimStart()
