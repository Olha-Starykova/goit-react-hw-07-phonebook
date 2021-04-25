import React from 'react';
import PropTypes from "prop-types";
import './ContactList.css'
import { connect } from 'react-redux'
import contactsActions from '../../redux/contacts/contacts-actions'

const ContactList = (({ contacts, onDeleteTodo }) =>
    <ul className="TodoList">
        {contacts.map(({ id, name, number }) => (
            <li key={id} className="TodoList__item">
                <p className="TodoList__text">{name}: {number}</p>
                <button onClick={() => onDeleteTodo(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

  
  const getVisibleTodos = (allTodos, filter) => {

    const normalizedFilter = filter.toLowerCase();

      return allTodos.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
      );
  };

const mapStateToProps = state => {
    const { filter, contacts } = state.contacts;
    const visibleTodos = getVisibleTodos(contacts, filter)
    return {
        contacts: visibleTodos,
    };
}


const mapDispatchToProps = dispatch => ({
    onDeleteTodo: (id) => dispatch(contactsActions.deleteTodo(id))
})


ContactList.propTypes = {
  onDeleteTodo: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);