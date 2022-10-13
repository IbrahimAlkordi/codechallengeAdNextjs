// import React from "react";
import { useSelector } from "react-redux";
import Highlighter from "react-highlight-words";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useTranslation } from "next-i18next";
import classes from "./ArticleItem.module.scss";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import Image from "next/image";

const Article = ({ abstract, lead_paragraph, image }) => {
  const { searchInput } = useSelector((state) => state.article);
  const [t] = useTranslation();
  let now = moment();

  if (abstract && lead_paragraph) {
    return (
      <div className={classes.articleCont}>

        <div className={classes.articleCont_imgParent}>
          <img
            src={image}
            className={classes.articleCont_compImg}
            alt="articles "
            layout="fill">
            </img>
        </div>

        <div className={classes.articleCont_artDetails}>
          <h2 className={classes.articleCont_artDetails_title}>{t("Title")}</h2>
          <Highlighter
            searchWords={[searchInput]}
            autoEscape={true}
            textToHighlight={abstract}
          />
          <h3 className={classes.articleCont_artDetails_desc}>
            {t("Description")}
          </h3>
          <ReactReadMoreReadLess
            charLimit={200}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {lead_paragraph}
          </ReactReadMoreReadLess>
        </div>

        <p className={classes.articleCont_moment}>
          <Moment date={now} format="DD/MM/YYYY hh:mm"></Moment>
        </p>
        
      </div>
    );
  }

  return null;
};
export default Article;
