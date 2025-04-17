import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  AppContainer,
  LabelName,
  LabelNumber,
  LabelFilter,
  InputName,
  InputNumber,
  InputFilter,
  Form,
  Button,
  Title,
  SubTitle,
} from './App.styled.jsx';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name.value, number: number.value },
      ],
    }));
    this.resetForm();
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, filter, name, number } = this.state;
    const filterNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <Form onSubmit={this.handleSubmit}>
          <LabelName>
            Name
            <InputName
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-ЯёЁ]+([ \u0027\-][a-zA-Zа-яА-ЯёЁ]+)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handleInputChange}
              required
            />
          </LabelName>
          <LabelNumber>
            Number
            <InputNumber
              type="tel"
              name="number"
              pattern="^\+?[0-9\-\.\(\) ]{4,20}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleInputChange}
              required
            />
          </LabelNumber>
          <Button type="submit">Add contacts</Button>
        </Form>
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
