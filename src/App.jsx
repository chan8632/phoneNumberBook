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
