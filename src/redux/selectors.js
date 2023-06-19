export const getContacts = state => {
  const contactsCopy = [...state.contacts.items];
  const inAlphabeticalOrder = contactsCopy.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return inAlphabeticalOrder;
};

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter.filter;
