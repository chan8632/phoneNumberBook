import { useEffect, useState } from "react";
import usephoneBookStore from "../stores/usephoneBookStores";
import useSearchStore from "./../stores/useSearchStore";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
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
    <Grid container spacing={2}>
      {matchingData.map((info) => {
        return (
          <Grid size={{ xs: 6, md: 4 }} key={info.id}>
            <Card variant="outlined" display='flex' alignItems={"center"}>
              <p>{info.name}</p>
              <p>{info.phoneNumber}</p>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default NumberList;
