import React from 'react'
import Login from "../../components/UI/organisms/Login/Login";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale,["home"]) ),
    },
  };
}
const LoginPa = () => {
  return (
   <Login></Login>
  )
}

export default LoginPa;