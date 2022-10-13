// import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import {appWithTranslation} from "next-i18next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale,["home"]) ),
    },
  };
}

function MyApp({ Component, pageProps }) {
  return (  
    <Provider store={store}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}

export default appWithTranslation(MyApp);