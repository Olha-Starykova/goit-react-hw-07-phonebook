import axios from 'axios';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    changeFilter,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './contacts-actions'

axios.defaults.baseURL = 'http://localhost:3000'

const fetchTodos = () => dispatch => {
    dispatch(fetchContactRequest());

    axios
        .get('/contacts').then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)));
} 

const addTodo = (name, number) => dispatch => {

    const contacts = { name, number }
    
    dispatch(addContactRequest())

    axios
        .post('/contacts', contacts)
        .then(({ data }) =>
            dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};


const deleteTodo = contactId => dispatch => {
    dispatch(deleteContactRequest())

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
};
    
export default {
    fetchTodos,
    addTodo,
    deleteTodo,
}
