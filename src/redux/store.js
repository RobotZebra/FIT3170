import { createSlice, configureStore } from '@reduxjs/toolkit'

const dueDateSlice = createSlice({
    name: 'dueDate',
    initialState: {
        value: ""
    },
    reducers: {
        newDueDate: (state, newValue) => {
            state.value = newValue
        }
    }
})

export const { newDueDate } = dueDateSlice.actions

const store = configureStore({
    reducer: dueDateSlice.reducer
})

store.subscribe(() => console.log(store.getState()))