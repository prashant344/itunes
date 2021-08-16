import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import useStyles from "./index.style";
import { sagaActions } from "../../Saga/SagaActions";
import Filter from "../Filter";
import noResultImage from "../../Public/noResultFound.png";
import CardDetails from "../CardDetails";

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.topAlbums?.feed?.entry);
  const categoryFilter = useSelector((state) => state.Filter.categories);
  const releaseDateFilter = useSelector((state) => state.Filter.releaseDate);
  const [filteredAlbumList, setFilteredAlbumList] = useState([]);
  const favouriteItems = localStorage.getItem("fav") || [];
  const [isFavFilterSelected, setIsFavFilterSelected] = useState(false);
  const [renderDetails, setRenderDetails] = useState();
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [parsedFavItems, setParsedFavItems] = useState();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_TOP_ALBUMS });
  }, []);

  useEffect(() => {
    setFilteredAlbumList(albumList);
  }, [albumList]);

  useEffect(() => {
    let filteredItems = [];
    const parsedFavouriteItems =
      favouriteItems.length && JSON.parse(favouriteItems);
    const allFilters = {
      categoryFilter,
      releaseDateFilter,
      favouriteFilter: isFavFilterSelected ? parsedFavouriteItems : [],
    };
    if (
      categoryFilter.length ||
      releaseDateFilter.length ||
      isFavFilterSelected
    ) {
      const filterKeys = Object.keys(allFilters);
      filteredItems = albumList.filter((album) => {
        return filterKeys.every((key) => {
          if (!allFilters[key].length) return true;
          let filterAttr = "";
          if (key === "categoryFilter") {
            filterAttr = album.category.attributes["im:id"];
          } else if (key === "releaseDateFilter") {
            filterAttr = album["im:releaseDate"].attributes.label;
          } else if (key === "favouriteFilter") {
            filterAttr = album.id.attributes["im:id"];
          }
          return allFilters[key].includes(filterAttr);
        });
      });
      setFilteredAlbumList(filteredItems);
    } else {
      setFilteredAlbumList(albumList);
    }
  }, [categoryFilter, releaseDateFilter, isFavFilterSelected]);

  useEffect(() => {
    if (favouriteItems && favouriteItems.length) {
      setParsedFavItems(JSON.parse(favouriteItems));
    }
  }, [favouriteItems]);

  const onFavFilterBtnPress = (isSelected) => {
    setIsFavFilterSelected(isSelected);
  };

  const toggleFav = (item) => {
    let favList = JSON.parse(localStorage.getItem("fav")) || [];
    if (
      favList &&
      favList.length &&
      favList.includes(item.id.attributes["im:id"])
    ) {
      favList = favList.filter(
        (listItem) => listItem !== item.id.attributes["im:id"]
      );
    } else {
      favList.push(item.id.attributes["im:id"]);
    }
    setParsedFavItems(favList);
    localStorage.setItem("fav", JSON.stringify(favList));
  };

  const showDetails = (album) => {
    setRenderDetails(true);
    setSelectedAlbum(album);
  };

  return (
    <div className={classes.container}>
      <Filter onFavFilterBtnPress={onFavFilterBtnPress} />
      <div className={classes.cardContainer}>
        {renderDetails && selectedAlbum ? (
          <CardDetails
            imageSrc={selectedAlbum["im:image"][2].label}
            title={selectedAlbum.title.label}
            price={selectedAlbum["im:price"].label}
            category={selectedAlbum.category.attributes.label}
            artist={selectedAlbum["im:artist"].label}
            releaseDate={selectedAlbum["im:releaseDate"].attributes.label}
            websiteLink={selectedAlbum.link.attributes.href}
            setShowDetails={setRenderDetails}
          />
        ) : null}
        {filteredAlbumList && filteredAlbumList.length ? (
          filteredAlbumList.map((album) => (
            <div className={classes.card}>
              <img
                src={album["im:image"][2].label}
                className={classes.cardImage}
                onClick={() => {
                  showDetails(album);
                }}
              />
              <div className={classes.cardTitle}>{album.title.label}</div>
              <button
                className={classes.button}
                onClick={() => toggleFav(album)}
              >
                {parsedFavItems &&
                parsedFavItems.length &&
                parsedFavItems.includes(album.id.attributes["im:id"]) ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </button>
            </div>
          ))
        ) : (
          <div className={classes.noResultContainer}>
            <img src={noResultImage} />
          </div>
        )}
      </div>
      {renderDetails && selectedAlbum ? (
        <div className={classes.overlay} />
      ) : null}
    </div>
  );
};

export default Dashboard;
