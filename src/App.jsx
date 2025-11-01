import "./App.css";
import NumberInput from "./components/NumberInput";
import NumberList from "./components/NumberList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function App() {
  return (
    <>
      <h1>연락처</h1>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <NumberInput />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <NumberList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
