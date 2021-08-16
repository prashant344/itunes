import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  card: {
    width: 170,
    height: 200,
    margin: 20,
    padding: 10,
    cursor: "pointer",
    transition: ".5s ease",
  },
  cardImage: {
    boxShadow: "0 4px 14px rgb(0 0 0 / 10%)",
    borderRadius: 5,
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    width: "90%",
    justifyContent: "center",
    alignContent: "flex-start",
  },
  button: {
    border: "none",
    background: "#ffffff",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    height: "100vh",
    left: 0,
    width: "100vw",
    background: "grey",
    opacity: 0.8,
    zIndex: 1,
    top: 0,
  },
  cardTitle: {
    fontSize: 12,
    textAlign: "left",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: 170,
    overflow: "hidden",
    color: "#1E1E1E",
    fontWeight: "bold",
  },
  searchBox: {
    alignSelf: "center",
  },
  noResultContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
}));
