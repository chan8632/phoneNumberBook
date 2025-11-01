import usephoneBookStore from "../stores/usephoneBookStores";
import useSearchStore from "./../stores/useSearchStore";

const NumberList = () => {
  const { phoneBook } = usephoneBookStore();
  const { searchData } = useSearchStore();
  const matchContactAndSearch = () => {
    const oriPhoneBook = [...phoneBook];
    if (searchData === "") return oriPhoneBook;
    const matchingData = oriPhoneBook.filter((contact) =>
      contact.name.match(searchData)
    );
  };
  matchContactAndSearch();
  
  return (
    <div>
      {phoneBook.map((info) => {
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
