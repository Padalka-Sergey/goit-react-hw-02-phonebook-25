import { NameBox, Button } from './ContactListItem.styled';

export const ContactListItem = ({ deleteContact, filterNames }) => {
  return filterNames.map(contact => (
    <li key={contact.id}>
      <NameBox>
        {contact.name}: {contact.number}
      </NameBox>
      <Button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </Button>
    </li>
  ));
};
