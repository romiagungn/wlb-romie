export const styles = () => ({
  root: {
    maxWidth: 1170,
    display: "block",
    position: "relative",
    zIndex: 1,
    backgroundColor: "transparent",
    textAlign: "center",
    margin: "0 auto",
  },
  navigation: {
    fontSize: "14px",
    color: "#fff",
    textTransform: "uppercase",
    transition: "none",
    fontWeight: 500,
    padding: "14px",
    "&:hover": {
      color: "#aaa",
    },
  },
  selected: {
    color: "#fff",
    paddingTop: "none",
    "&:hover": {
      color: "#aaa",
    },
  },
});
