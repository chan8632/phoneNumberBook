import { useState } from "react";
import useSearchStore from "./../stores/useSearchStore";

const SearchBar = () => {
  const [inputName, setInputName] = useState("");
  const { changeSearchData } = useSearchStore();
  const searchSubmit = (event) => {
    event.preventDefault();
    changeSearchData(inputName);
  };
  return (
    <div className="search-bar">
      <form onSubmit={searchSubmit}>
        <span>검색</span>
        <input type="text" onChange={(e) => setInputName(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchBar;
