import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getSortedContacts = createSelector([getContacts], contacts => {
  const contactsCopy = [...contacts];
  const inAlphabeticalOrder = contactsCopy.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return inAlphabeticalOrder;
});

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter.filter;
