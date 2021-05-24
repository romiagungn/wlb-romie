import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { styles } from "./styles";
import { ContentWrapper } from "../../components";
import { GET_A_POST } from "../../graphql/queries";

const PostDetail = (props) => {
  const { classes } = props;
  const location = useLocation();
  const { image } = location.state;

  const { id } = useParams();

  const { data, loading } = useQuery(GET_A_POST(id));

  const _renderTitle = () => {
    if (loading) {
      return (
        <Skeleton
          animation="wave"
          variant="rect"
          height={30}
          width="80%"
          className={classes.title}
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
        {data?.post.title}
      </Typography>
    );
  };

  const _renderMedia = () => {
    if (loading) {
      return (
        <Skeleton
          animation="wave"
          variant="rect"
          height={224}
          className={classes.image}
        />
      );
    }
    return <img src={image} alt="" className={classes.image} />;
  };

  const _renderBody = () => {
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
        {data?.post.body}
      </Typography>
    );
  };

  return (
    <ContentWrapper>
      {_renderTitle()}
      <div className={classes.media}>{_renderMedia()}</div>
      {_renderBody()}
    </ContentWrapper>
  );
};

export default withStyles(styles)(PostDetail);
