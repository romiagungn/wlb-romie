import React from "react";
import {
  withStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import Skeleton from "@material-ui/lab/Skeleton";
import { Link } from "react-router-dom";

import { styles } from "./styles";

const images = [
  "https://images.unsplash.com/photo-1541422348463-9bc715520974?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
  "https://images.unsplash.com/photo-1501883824620-a2c97e2e319c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1538898780761-268f71f67675?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
  "https://images.unsplash.com/photo-1506755594592-349d12a7c52a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2033&q=80",
  "https://images.unsplash.com/photo-1520516620562-04b7d17e7500?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1460013477427-b0cce3e30151?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
];

const PostItem = (props) => {
  const { classes, index, data, loading, handleModal } = props;

  const _renderCardMedia = () => {
    if (loading) {
      return (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      );
    }
    return (
      <CardMedia
        className={classes.media}
        image={images[index]}
        title="Contemplative Reptile"
      />
    );
  };

  const _renderCardTitle = () => {
    if (loading) {
      return (
        <Skeleton
          animation="wave"
          variant="rect"
          height={12}
          width="80%"
          className={classes.title}
          style={{ marginBottom: 6 }}
        />
      );
    }
    return (
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.title}
      >
        {data.title}
      </Typography>
    );
  };

  const _renderCardBody = () => {
    if (loading) {
      return (
        <>
          <Skeleton
            animation="wave"
            variant="rect"
            height={12}
            className={classes.body}
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation="wave"
            variant="rect"
            height={12}
            width="90%"
            className={classes.body}
          />
        </>
      );
    }
    return (
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.body}
      >
        {data.body}
      </Typography>
    );
  };

  return (
    <>
      <Grid item key={data.id}>
        <Card className={classes.card} elevation={0}>
          <CardActionArea
            component={Link}
            to={{
              pathname: `/post/${data.id}`,
              state: { image: images[index] },
            }}
          >
            {_renderCardMedia()}
            <CardContent>
              {_renderCardTitle()}
              {_renderCardBody()}
            </CardContent>
          </CardActionArea>
          {!loading && (
            <CardActions>
              <IconButton
                aria-label="edit"
                size="small"
                className={classes.button}
                component={Link}
                to={`/edit/${data.id}`}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                className={classes.button}
                onClick={(e) => handleModal(e, data.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </CardActions>
          )}
        </Card>
      </Grid>
    </>
  );
};

export default withStyles(styles)(PostItem);
