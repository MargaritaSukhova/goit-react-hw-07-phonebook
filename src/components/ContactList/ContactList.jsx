import ContactListItem from '../ContactListItem/ContactListItem';
import { ListOfContacts } from '../ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

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
