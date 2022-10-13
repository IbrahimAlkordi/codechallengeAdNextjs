import React from "react";
import classes from "./Welcome.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Translate from "../../molecules/Translate/Translate";

function Welcome() {
  const [t] = useTranslation();
  return (
    <header className={classes.header}>

<ul className={classes.translate}>
      <Translate></Translate>
      </ul>

      <div className={classes.header_title}>

        <h1 className={classes.heading_primary}>
          <span className={classes.heading_primary_main}>{t("welcome")}</span>
          <span className={classes.heading_primary_sub}>
            {t("to our website")}
          </span>
        </h1>

        <Link
          to="/Login"
          className={`${classes.btn}  ${classes.btn_white} ${classes.btn_animated} `}
        >
          {t("discover")}
        </Link>

      </div>

    </header>
  );
}

export default Welcome;
