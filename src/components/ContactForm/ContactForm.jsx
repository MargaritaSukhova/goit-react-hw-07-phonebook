import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, Btn } from '../ContactForm/ContactForm.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    } else if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const handleContactSave = e => {
    e.preventDefault();

    if (checkContacts(name)) {
      return alert(`${name} is already in contacts list!`);
    }
    dispatch(addContact(name, number));
    reset();
  };

  const checkContacts = name => {
    const normalizedName = name.toLocaleLowerCase();
    return contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleContactSave}>
      <Label htmlFor="name">Name</Label>
      <Input
        value={name}
        onChange={handleInputChange}
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        value={number}
        onChange={handleInputChange}
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};

export default ContactForm;
