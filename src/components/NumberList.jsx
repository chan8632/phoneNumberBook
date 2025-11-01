import { useEffect, useState } from "react";
import usephoneBookStore from "../stores/usephoneBookStores";
import useSearchStore from "./../stores/useSearchStore";

const NumberList = () => {
  const { phoneBook } = usephoneBookStore();
  const { searchData } = useSearchStore();
  const [matchingData, setMatchingData] = useState(phoneBook);
  const matchContactAndSearch = () => {
    const oriPhoneBook = [...phoneBook];
    if (searchData === "") return setMatchingData(oriPhoneBook);
    const matching = oriPhoneBook.filter((contact) =>
      contact.name.match(searchData)
    );
    setMatchingData(matching);
  };
  useEffect(() => {
    matchContactAndSearch();
  }, [searchData, phoneBook]);

  return (
    <div>
      {matchingData.map((info) => {
        return (
          <div key={info.id}>
            <p>{info.name}</p>
            <p>{info.phoneNumber}</p>
          </div>
        );
      })}
    </div>
  );
};
export default NumberList;
