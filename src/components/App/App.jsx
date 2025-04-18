import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  AppContainer,
  LabelFilter,
  InputFilter,
  Title,
  SubTitle,
} from './App.styled.jsx';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ],
    }));
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm submitHandler={this.formSubmitHandler} />
        <div>
          <SubTitle>Contacts</SubTitle>
          <LabelFilter>
            Find contacts by name
            <InputFilter
              type="search"
              name="filter"
              title="Сontact search field"
              value={filter}
              onChange={this.handleInputChange}
              required
            />
          </LabelFilter>
          {contacts.length > 0 && (
            <ul>
              {filterNames.map(contact => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
            </ul>
          )}
        </div>
      </AppContainer>
    );
  }
}
