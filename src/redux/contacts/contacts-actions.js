//import types from './contacts-types'
//import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');



// const addTodo = createAction('contacts/add', (name, number) => {
//     return {
//         payload: {
//             id: shortid.generate(),
//             name,
//             number,
//         }
//     }
// });

// const addTodo = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name: name,
//         number: number,
//     }
// });

export const deleteTodo = createAction('contacts/delete')

// const deleteTodo = contactId => ({
//     type: types.DELETE,
//     payload: contactId
// })

export const changeFilter = createAction('contacts/changeFilter')

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// })

// export default {
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteTodo,
//     changeFilter
// };