import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import usephoneBookStore from "../stores/usephoneBookStores";
const NumberInput = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usephoneBookStore();
  const handleAddContact = (name, phoneNumber, event) => {
    event.stopPropagation();
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber);
  };

  return (
    <Box display="flex" flexDirection={"column"} alignItems={"center"} gap={2}>
      <TextField
        id="name"
        label="name"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="phone-number"
        variant="standard"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={(event) => handleAddContact(name, phoneNumber, event)}
      >
        추가
      </Button>
    </Box>
  );
};
export default NumberInput;
