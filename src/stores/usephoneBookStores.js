import { create } from "zustand";

const usephoneBookStore = create((set) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [{ id: new Date(), name, phoneNumber }, ...state.phoneBook],
    })),
}));
export default usephoneBookStore;
