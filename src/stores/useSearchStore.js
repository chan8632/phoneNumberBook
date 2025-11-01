import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchData: "",
  changeSearchData: (value) => set(() => ({ searchData: value })),
}));
export default useSearchStore;
