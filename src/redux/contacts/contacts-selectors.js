const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getContactsFrom = state => state.contacts.contacts

const getAllTodos = state => state.contacts.contacts

const getVisibleTodos = state => {
    const filter = getFilter(state)
    const contacts = getAllTodos(state)
    const normalizedFilter = filter.toLowerCase();
    
          return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
      );

}

export default {
    getLoading,
    getContactsFrom,
    getFilter,
    getVisibleTodos
}