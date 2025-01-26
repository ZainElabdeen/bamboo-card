import { Box, Container } from "@mui/material";

import "./App.css";
import Header from "./components/header";
import GiftCardList from "./pages/gift-card-list";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          mt: 4,
          pb: 4,
        }}
      >
        <GiftCardList />
      </Container>
    </Box>
  );
}

export default App;
