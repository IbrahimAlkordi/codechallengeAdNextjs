import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import {appWithTranslation} from "next-i18next"
import ErrorBoundary from "../components/ErrorBoundary"

function MyApp({ Component, pageProps }) {
  return (  
    <ErrorBoundary>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </ErrorBoundary>
  ); 
}
export default appWithTranslation(MyApp);