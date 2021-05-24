export const styles = () => ({
  card: {
    minHeight: 242,
    width: 309,
    "&:hover": {
      boxShadow:
        "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    },
  },
  media: {
    height: 140,
  },
  title: {
    height: "54px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "box",
    lineClamp: 2,
    boxOrient: "vertical",
    fontFamily: "Merriweather, Arial, Helvetica Neue, Helvetica, sans-serif",
    fontSize: "20px",
    textTransform: "capitalize",
    letterSpacing: 0,
    wordSpacing: "1px",
    fontWeight: 700,
    lineHeight: 1.4444,
  },
  body: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "box",
    lineClamp: 4,
    boxOrient: "vertical",
  },
  button: {
    padding: "4px",
  },
});
