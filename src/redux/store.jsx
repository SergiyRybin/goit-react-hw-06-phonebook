import { configureStore, createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'myValue',
  initialState: JSON.parse(localStorage.getItem('contacts')) ?? [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    removeContact(state, action) {
      const remove = state.filter(contact => contact.name !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(remove));
      return remove;
    },
  },
});

const myFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return action.payload;
    },
  },
});

export const { addContact } = mySlice.actions;

export const { removeContact } = mySlice.actions;

export const { filterContact } = myFilter.actions;

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
    filter: myFilter.reducer,
  },
});
