import { create } from "zustand";

const phoneBookStore = create((set) => ({
  phoneBook: [],
  addInfo: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [{ id: new Date(), name, phoneNumber }, ...state.phoneBook],
    })),
}));
export default phoneBookStore;
