import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./index.style";

const CardDetails = ({
  imageSrc,
  title,
  price,
  category,
  artist,
  releaseDate,
  websiteLink,
  setShowDetails,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.cardDetails}>
      <button
        className={classes.closeBtn}
        onClick={() => setShowDetails(false)}
      >
        <CloseIcon />
      </button>
      <img src={imageSrc} className={classes.cardImage} />
      <div className={classes.details}>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardContent}>
          <span className={classes.subHeading}>Price: </span>
          {price}
        </div>
        <div className={classes.cardContent}>
          <span className={classes.subHeading}>Categoty: </span>
          {category}
        </div>
        <div className={classes.cardContent}>
          <span className={classes.subHeading}>Artist: </span>
          {artist}
        </div>
        <div className={classes.cardContent}>
          <span className={classes.subHeading}>Release Date: </span>
          {releaseDate}
        </div>
        <a href={websiteLink} className={classes.actionButton}>
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default CardDetails;
