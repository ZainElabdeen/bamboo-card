import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { giftCardData, IGiftCard } from "../assets/data";

interface GiftCardItemProps {
  card: IGiftCard;
}

const GiftCardItem: React.FC<GiftCardItemProps> = ({ card }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{
          width: 300,
          height: 200,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              mb: 1,
            }}
          >
            {card.cardName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Value: ${card.value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Expiration Date: {card.expirationDate}
          </Typography>
          <Typography
            variant="body2"
            color={card.isActive ? "success.main" : "error.main"}
          >
            Status: {card.isActive ? "Active" : "Inactive"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Recipient: {card.recipientEmail}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const GiftCardList = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      justifyContent="center"
      width="100%"
    >
      {giftCardData.map((card) => (
        <GiftCardItem key={card.id} card={card} />
      ))}
    </Grid>
  );
};

export default GiftCardList;
