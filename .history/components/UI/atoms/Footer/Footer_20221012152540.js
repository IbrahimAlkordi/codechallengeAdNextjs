// import React from "react";
import classes from "./Footer.module.scss";
import version from '../../../../package.json';
import { useTranslation } from "next-i18next";
function Footer() {
  const [t] = useTranslation();
  const version1 = version;
  return (
    <footer className={classes.footer}>
      <div className={classes.list2}>
        <div className={classes.div}>{t("contact us")}</div>
        <div className={classes.div}>{t("ads")}</div>
        <div className={classes.div}>{t("policy")}</div>
        <div className={classes.div}>{t("send report")}</div>
        <div className={classes.div}>{t("version")} - {version1.version}</div>
      </div>
    </footer>
  );
}

export default Footer;
