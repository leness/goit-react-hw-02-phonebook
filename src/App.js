import { Component } from "react";
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter'
import ContactList from './Components/ContactList';
import shortid from 'shortid';

class App extends Component {
state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}
  

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some(el => el.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = { id: shortid.generate(), name, number };
      console.log(newContact);

    this.setState(({contacts}) => ({
      contacts: [...contacts, newContact]
    }))
    }
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacs = () => {
    const { filter, contacts } = this.state;
    const normalizeSearch = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeSearch),
    );
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact=>contact.id!==contactId)
  }))
}

  render() {
   
    const visibleContacts = this.getVisibleContacs();
    
    return (
      <div>
       
  <h1>Phonebook</h1>
  <ContactForm onSubmit={ this.formSubmitHandler} />

  <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact} />

       </div>
    )
  }
}

export default App;
