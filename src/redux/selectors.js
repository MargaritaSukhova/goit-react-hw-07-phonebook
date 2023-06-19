import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter.filter;

export const getSortedContacts = createSelector([getContacts], contacts => {
  const contactsCopy = [...contacts];
  const contactsInAlphabeticalOrder = contactsCopy.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return contactsInAlphabeticalOrder;
});

export const getFilteredContacts = createSelector(
  [getSortedContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  }
);
