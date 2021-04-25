//import types from './contacts-types'
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('contacts/add', (name, number) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number,
        }
    }
});

// const addTodo = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name: name,
//         number: number,
//     }
// });

const deleteTodo = createAction('contacts/delete')

// const deleteTodo = contactId => ({
//     type: types.DELETE,
//     payload: contactId
// })

const changeFilter = createAction('contacts/changeFilter')

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value
// })

export default { addTodo, deleteTodo, changeFilter };