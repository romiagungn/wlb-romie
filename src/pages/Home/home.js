import React, { useState, useEffect } from "react";
import { withStyles, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useQuery, useMutation } from "@apollo/client";

import { PostItem, DeleteConfirmation } from "../../components";
import { GET_ALL_POSTS } from "../../graphql/queries";
import { DELETE_A_POST } from "../../graphql/mutations";
import { styles } from "./styles";

const Home = (props) => {
  const { classes } = props;

  const [page, setPage] = useState(1);
  const limit = 6;
  const { data, loading } = useQuery(GET_ALL_POSTS, {
    variables: {
      options: {
        paginate: {
          page,
          limit,
        },
      },
    },
  });
  const [posts, setPosts] = useState(Array.from(Array(limit).keys()));
  const totalPost = data?.posts.meta.totalCount;
  const count = Math.ceil(totalPost / limit);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [deleteAPost] = useMutation(DELETE_A_POST);

  useEffect(() => {
    if (data) setPosts(data.posts.data);
  }, [data]);

  const handleModal = (_, id) => {
    setSelected(id);
    setIsOpen(!isOpen);
  };

  const handleDelete = () => {
    const _posts = posts.filter((post) => post.id !== selected);

    setPosts(_posts);
    deleteAPost({ variables: { id: selected } });
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {posts.map((post, idx) => (
              <PostItem
                key={post.id ?? idx}
                index={idx}
                data={post}
                loading={loading}
                handleModal={handleModal}
                onDelete={handleDelete}
              />
            ))}
          </Grid>
        </Grid>
        <div className={classes.footer}>
          {!loading && (
            <Pagination
              count={count}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={(_, value) => setPage(value)}
            />
          )}
        </div>
      </Grid>
      <DeleteConfirmation
        open={isOpen}
        handleClose={handleModal}
        onDelete={handleDelete}
      />
    </>
  );
};

export default withStyles(styles)(Home);
