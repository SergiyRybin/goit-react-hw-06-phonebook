import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
  name: 'myValue',
  initialState: {
    contacts: {
      items: [],
      filter: '',
    },
  },

  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    removeContact(state, action) {
      const remove = state.contacts.items.filter(
        contact => contact.name !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(remove));
      state.contacts.items = remove;
    },
    filterContact(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact } = mySlice.actions;

export const { removeContact } = mySlice.actions;

export const { filterContact } = mySlice.actions;

export const contactValue = state => state.myValue.contacts.items;

export const filterValue = state => state.myValue.contacts.filter;
