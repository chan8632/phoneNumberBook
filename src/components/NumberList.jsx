import phoneBookStore from "./../stores/phoneBookStores";
const NumberList = () => {
  const { phoneBook } = phoneBookStore();
  return (
    <div>
      {phoneBook.map((info, idx) => {
        return (
          <div key={idx}>
            <div>{info.name}</div>
            <div>{info.phoneNumber}</div>
          </div>
        );
      })}
    </div>
  );
};
export default NumberList;
