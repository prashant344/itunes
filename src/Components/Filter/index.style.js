import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  filterContainer: {
    width: 200,
    borderRightWidth: 1,
    borderRightColor: "#efefef",
    borderRightStyle: "solid",
  },
  showFilterItem: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 10,
    fontSize: 12,
  },
  hideFilterItem: {
    display: "none",
  },
  input: {
    marginRight: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    margin: 20,
  },
  subTitle: {
    fontWeight: 500,
    fontSize: 16,
    textAlign: "left",
    margin: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    display: "flex",
    cursor: "pointer",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
}));
