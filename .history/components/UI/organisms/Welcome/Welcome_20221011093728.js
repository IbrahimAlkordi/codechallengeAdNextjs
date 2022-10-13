import React from "react";
import classes from "./Welcome.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
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
        <div
          className={`${classes.btn}  ${classes.btn_animated} `}
        >
          <Link href="/login">{t("discover")}</Link>
        </div>
      </div>
    </header>
  );
}

export default Welcome;
