import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  AppContainer,
  LabelName,
  InputName,
  Form,
  Button,
  Title,
  SubTitle,
} from './App.styled.jsx';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = e.target.elements;

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name: name.value, id: nanoid() }],
    }));
    this.resetForm();
  };

  handleInputChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <AppContainer>
        <Title>Phonebook</Title>
        <Form onSubmit={this.handleSubmit}>
          <LabelName>
            Name
            <InputName
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </LabelName>
          <Button type="submit">Add contacts</Button>
        </Form>
        <div>
          <SubTitle>Contacts</SubTitle>
          {this.state.contacts.length > 0 && (
            <ul>
              {this.state.contacts.map(contact => (
                <li key={contact.id}> {contact.name}</li>
              ))}
            </ul>
          )}
        </div>
      </AppContainer>
    );
  }
}
