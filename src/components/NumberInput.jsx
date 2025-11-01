import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import phoneBookStore from "./../stores/phoneBookStores";
const NumberInput = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addInfo } = phoneBookStore();
  const addNameAndNumber = (name, phoneNumber) => {
    addInfo(name, phoneNumber);
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
        onClick={() => addNameAndNumber(name, phoneNumber)}
      >
        추가
      </Button>
    </Box>
  );
};
export default NumberInput;
