import React from "react";
import "./App.css";
import { Typography, Box } from "@mui/material";
import SearchBar from "./components/SearchBar";
import StarWarsTable from "./components/StarWarsTable";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SpeciesCard from "./components/SpeciesCard";

const theme = createTheme({
  typography: {
    fontFamily: '"Titillium Web", sans-serif',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box>
          <Typography variant="h3" component="h3" style={{ textAlign: "center", marginTop:"15px" }}>
            Star Wars Characters
          </Typography>
          <SearchBar />
          <SpeciesCard/>
          <StarWarsTable />
        </Box>
      </ThemeProvider>
    </div>
  );
}




export default App;


