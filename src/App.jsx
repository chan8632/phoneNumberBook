import Grid from "@mui/material/Grid";
import "./App.css";
import NumberInput from "./components/NumberInput";
import NumberList from "./components/NumberList";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>연락처</h1>
      <SearchBar />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <NumberInput />
        </Grid>
        <Grid sx={{pr:12}} size={{ xs: 12, md: 8 }}>
          <NumberList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
