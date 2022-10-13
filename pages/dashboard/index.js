import React from 'react'
import Dashboard from "../../components/UI/organisms/Dashboard/Dashboard";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale,["home"]) ),
    },
  };
}
const DashboardPa = () => {
  return (
   <Dashboard></Dashboard>
  )
}

export default DashboardPa;