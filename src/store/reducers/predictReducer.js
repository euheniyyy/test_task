import { createSlice } from '@reduxjs/toolkit'
// Slice
const initialState = {
        value: '',
        passCode: Math.floor(1000 + Math.random() * 9000).toString(),
        result: {},
        newGame: true,
    };
export const slice = createSlice({
    name: 'predict',
    initialState: initialState,
    reducers: {
        inputNum: (state, action) => {
            state.newGame = true
            state.value = action.payload
            state.newGame = false
            for(let i = 0; i < state.value.length; i++) {
                    state.result = {
                        ...state.result,
                        [i]: state.value[i] === state.passCode[i]
                    }
            }

            if(Object.values(state.result).filter(val => val)?.length === 4) {
                state.newGame = true
                state.value = initialState.value
                state.result = initialState.result
                state.passCode = Math.floor(1000 + Math.random() * 9000).toString()
            }
        },
    },
});
export default slice.reducer
/// ACTIONS
const { inputNum } = slice.actions
///
export const input = (payload) => async dispatch => {
    try {
        dispatch(inputNum(payload));
    } catch (e) {
        return console.error(e.message);
    }
}
