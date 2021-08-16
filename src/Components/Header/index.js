import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import useStyle from "./index.style";
import background from "../../Public/background.jpg";

const Header = () => {
  const classes = useStyle();
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const albumList = useSelector((state) => state.topAlbums?.feed?.entry);
  const [isSticky, setSticky] = useState(false);

  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value) {
      const filteredAlbum = albumList.filter((album) =>
        album.title.label.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResult(filteredAlbum);
    } else {
      setSearchResult([]);
    }
  };
  return (
    <div className={classes.header}>
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          top: 0,
          opacity: 0.9,
        }}
      />
      <div className={classes.stickyDiv} ref={ref} />
      <div className={`search${isSticky ? " sticky" : ""}`}>
        <input
          className={classes.searchBox}
          type={"text"}
          placeholder={"Search"}
          onChange={onSearchTextChange}
        />
        {searchResult.length > 0 ? (
          <div className={classes.list}>
            {searchResult.map((result) => (
              <div className={classes.listItem}>
                <a href={result.link.attributes.href} className={classes.link}>
                  <img
                    src={result["im:image"][0].label}
                    className={classes.cardImage}
                  />
                  <div className={classes.cardTitle}>{result.title.label}</div>
                </a>
              </div>
            ))}
          </div>
        ) : null}
        {searchText && !searchResult.length ? (
          <div className={classes.list}>
            <div className={classes.centerText}>No result found</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
