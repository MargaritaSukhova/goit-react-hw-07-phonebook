import ContactListItem from '../ContactListItem/ContactListItem';
import { ListOfContacts } from '../ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { store } from 'redux/store';

console.log(store);

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  if (contacts) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getVisibleContacts(contacts, filter);

  return (
    <ListOfContacts>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
        })}
    </ListOfContacts>
  );
};

export default ContactList;
