import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const NumberInput = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Box>
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
      <Button variant="contained">추가</Button>
    </Box>
  );
};
export default NumberInput;
