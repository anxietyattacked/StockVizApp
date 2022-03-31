import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({
  headline,
  id,
  image,
  source,
  summary,
  url,
}) {
  return (
    <Card key={id}>
      <a href={url}>
        <CardMedia component="img" height="140" image={image} alt={headline} />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="medium" sx={{ width: "100%" }}>
          <a style={{ textDecoration: "none", color: "white" }} href={url}>
            Link
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
