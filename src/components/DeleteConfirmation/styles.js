export const styles = (theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    borderRadius: 4,
  },
  actionWrapper: {
    "& > *": { margin: theme.spacing(1) },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
});
