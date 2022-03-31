import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function QuoteCard({
  symbol,
  price,
  change,
  percentChange,
  high,
  low,
  open,
  prevClose,
}) {
  return (
    <Card elevation={1}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">{symbol}</Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {price}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex" }}>
        <Typography
          sx={{ fontWeight: 600 }}
          className={`${
            Math.sign(parseFloat(percentChange)) === 1 ? "positive" : "negative"
          }`}
        >
          {Math.sign(parseFloat(percentChange)) === 1 ? (
            <ExpandLessIcon className="positive" />
          ) : (
            <ExpandMoreIcon className="negative" />
          )}
          {percentChange}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/search/${symbol}`} style={{ textDecoration: "none" }}>
          <Button size="small">See Stock</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
