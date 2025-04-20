import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, filterNames, deleteContact }) => {
  return (
    contacts.length > 0 && (
      <ul>
        <ContactListItem
          filterNames={filterNames}
          deleteContact={deleteContact}
        />
      </ul>
    )
  );
};
