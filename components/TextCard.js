import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function TextCard() {
  const [fav, setFav] = React.useState(false);
  const [like, setLike] = React.useState(false);

  const favoriteHandler = () => {
    fav === false ? setFav(true) : setFav(false);
  };

  const likeHandler = () => {
    like === false ? setLike(true) : setLike(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="Autor">
            <AccountCircleIcon />
          </Avatar>
        }
        title="Autor 1 diz:"
      />
      <CardContent>
        <Typography variant="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {fav === false ? (
          <IconButton
            aria-label="Favoritar"
            sx={{ backgroundColor: "#082947ff" }}
            onClick={favoriteHandler}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="Favoritar"
            sx={{ backgroundColor: "#ff6e1dff" }}
            onClick={favoriteHandler}
          >
            <FavoriteIcon />
          </IconButton>
        )}
        {like === false ? (
          <IconButton aria-label="Gostar" sx={{ backgroundColor: "#082947ff" }} onClick={likeHandler}>
            <ThumbUpIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="Gostar" sx={{ backgroundColor: "#ff6e1dff" }} onClick={likeHandler}>
            <ThumbUpIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
