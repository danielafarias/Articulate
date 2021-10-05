import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function TextCard(props) {
  const author = "Autor " + props.author + " diz:";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="Autor">
            <AccountCircleIcon />
          </Avatar>
        }
        title={author}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="p">{props.content}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          aria-label="Favoritar"
          sx={{ backgroundColor: "#082947ff" }}
          onClick={props.onFav}
          endIcon={<FavoriteIcon />}
        >
          {props.favs}
        </Button>

        <Button
          aria-label="Gostar"
          sx={{ backgroundColor: "#082947ff" }}
          onClick={props.onLike}
          endIcon={<ThumbUpIcon />}
        >
          {props.likes}
        </Button>
      </CardActions>
    </Card>
  );
}
