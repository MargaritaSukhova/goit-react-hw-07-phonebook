import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ListItem,
  Text,
  DelBtn,
} from '../ContactListItem/ContactListItem.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <DelBtn type="button" onClick={() => handleContactDelete(id)}>
        Delete
      </DelBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
