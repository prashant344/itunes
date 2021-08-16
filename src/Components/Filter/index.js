import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import useStyles from "./index.style";
import {
  addCategory,
  removeCategory,
  addReleaseDateFilter,
  removeReleaseDateFilter,
} from "../../store";

const Filter = ({ onFavFilterBtnPress }) => {
  const albumList = useSelector((state) => state.topAlbums?.feed?.entry);
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [releaseDateList, setReleaseDateList] = useState([]);
  const categoryFilter = useSelector((state) => state.Filter.categories);
  const releaseDateFilter = useSelector((state) => state.Filter.releaseDate);
  const [isFavFilterSelected, setFavFilterSelected] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState({
    category: false,
    releaseDate: false,
    favourite: false,
  });
  const classes = useStyles();

  useEffect(() => {
    if (albumList && albumList.length) {
      const tempList = [];
      const tempReleaseDtList = [];
      albumList.forEach((element) => {
        const isCategoryPresent =
          tempList.length > 0 &&
          tempList.filter(
            (el) => el["im:id"] === element.category.attributes["im:id"]
          ).length > 0;
        const isReleaseDatePresent =
          tempReleaseDtList.length > 0 &&
          tempReleaseDtList.filter(
            (el) =>
              el.attributes.label === element["im:releaseDate"].attributes.label
          ).length > 0;
        if (!isCategoryPresent) {
          tempList.push(element.category.attributes);
        }
        if (!isReleaseDatePresent) {
          tempReleaseDtList.push(element["im:releaseDate"]);
        }
      });
      setReleaseDateList(tempReleaseDtList);
      setCategoryList(tempList);
    }
  }, [albumList]);
  return (
    <div className={classes.filterContainer}>
      <div className={classes.title}>Filter by</div>
      <div
        className={classes.subTitle}
        onClick={() =>
          setIsFilterOpen((prevState) => ({
            ...prevState,
            category: !prevState.category,
          }))
        }
      >
        <span>Categories</span>
        <span>
          {isFilterOpen["category"] ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </span>
      </div>
      {categoryList.length > 0
        ? categoryList.map((item) => (
            <div
              className={[
                isFilterOpen["category"]
                  ? classes.showFilterItem
                  : classes.hideFilterItem,
              ]}
            >
              <input
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(addCategory(item["im:id"]));
                  } else {
                    dispatch(removeCategory({ id: item["im:id"] }));
                  }
                }}
                className={classes.input}
                disabled={
                  categoryFilter.length > 0 &&
                  !categoryFilter.includes(item["im:id"])
                }
                type={"checkbox"}
                id={"CategoryFilterItem"}
                name={"CategoryFilterItem"}
              />
              <label for={"CategoryFilterItem"}>{item.label}</label>
            </div>
          ))
        : null}
      <div
        className={classes.subTitle}
        onClick={() =>
          setIsFilterOpen((prevState) => ({
            ...prevState,
            releaseDate: !prevState.releaseDate,
          }))
        }
      >
        <span>Release Date</span>
        <span>
          {isFilterOpen["releaseDate"] ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </span>
      </div>
      {releaseDateList.length > 0
        ? releaseDateList.map((item) => (
            <div
              className={[
                isFilterOpen["releaseDate"]
                  ? classes.showFilterItem
                  : classes.hideFilterItem,
              ]}
            >
              <input
                onChange={(event) => {
                  if (event.target.checked) {
                    dispatch(addReleaseDateFilter(item.attributes.label));
                  } else {
                    dispatch(
                      removeReleaseDateFilter({
                        date: item.attributes.label,
                      })
                    );
                  }
                }}
                className={classes.input}
                disabled={
                  releaseDateFilter.length > 0 &&
                  !releaseDateFilter.includes(item.attributes.label)
                }
                type={"checkbox"}
                id={"DateFilterItem"}
                name={"DateFilterItem"}
              />
              <label for={"DateFilterItem"}>{item.attributes.label}</label>
            </div>
          ))
        : null}
      <div className={classes.subTitle}>
        Favourites
        <button
          onClick={() => {
            setFavFilterSelected((prevSelection) => !prevSelection);
            onFavFilterBtnPress(!isFavFilterSelected);
          }}
          className={classes.button}
        >
          {isFavFilterSelected ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </button>
      </div>
    </div>
  );
};

export default Filter;
