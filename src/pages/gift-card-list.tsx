import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import { IGiftCard } from "../assets/data";
import GiftCardItem from "../components/gift-card-item";
import { mockApiCall } from "../services/mockApiCall";

const GiftCardList = () => {
  const [giftCards, setGiftCard] = useState<IGiftCard[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchGiftCards = async () => {
    try {
      const response = await mockApiCall();
      setGiftCard(response.data);
    } catch (error) {
      console.error("Error fetching gift cards:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGiftCards();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      justifyContent="center"
      width="100%"
    >
      {giftCards?.map((card) => (
        <GiftCardItem key={card.id} card={card} />
      ))}
    </Grid>
  );
};

export default GiftCardList;
