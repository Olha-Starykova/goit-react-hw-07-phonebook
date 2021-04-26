import axios from 'axios';
import {addContactRequest, addContactSuccess, addContactError, deleteTodo, changeFilter}  from './contacts-actions'

axios.defaults.baseURL = 'http://localhost:3000'

const addTodo = (name, number) => dispatch => {

    const contacts = { name, number }
    
    dispatch(addContactRequest())

    axios
        .post('/contacts', contacts)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)))
};

export default {
    addTodo
}
