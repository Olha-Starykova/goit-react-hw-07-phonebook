import { combineReducers } from "redux"
//import types from './contacts-types'
import actions from './contacts-actions'
import { createReducer } from '@reduxjs/toolkit';

//console.log(actions.addTodo.type)

const contacts = createReducer([], {
    [actions.addTodo]: (state, { payload }) => [...state, payload],
    [actions.deleteTodo]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
}
);

// const contacts = (state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload]
//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload)
//         default: return state
//     }
// };


// const filter = (state = '', { type, payload }) => {
//         switch (type) {  
//         case types.CHANGE_FILTER:
//             return payload
//               default: return state
//     }
//  }

    //описали редьюсер
export default combineReducers({
    contacts,
    filter
})