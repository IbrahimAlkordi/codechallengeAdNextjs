import React from "react";
import classes from "./Welcome.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Translate from "../../molecules/Translate/Translate";
import { useRouter } from "next/router";

function Welcome() {
  const {t} = useTranslation();
  const router = useRouter();
  return (
    <header className={classes.header}>
      <ul className={classes.translate}>
        <Translate></Translate>
      </ul>

      <div className={classes.header_title}>
        <h1 className={classes.heading_primary}>
          <span className={classes.heading_primary_main}>{t("home:welcome")}</span>
          <span className={classes.heading_primary_sub}>
            {t("home:welcome_msg1")}
          </span>
        </h1>
        <Link href="/login">
        <a  className={`${classes.btn} ${classes.btn_white} ${classes.btn_animated}`}>{t("home:discover")}</a>
</Link>
       {/* <buttun className={`${classes.btn} ${classes.btn_white} ${classes.btn_animated}`} onClick={()=>{router.push('/login')}}  >
       {t("home:discover")}
       </buttun> */}
          {/* <Link href="/login" className={`${classes.btn} ${classes.btn_white} ${classes.btn_animated} `}>{t("home:discover")}</Link> */}
      </div>
    </header>
  );
}

export default Welcome;
