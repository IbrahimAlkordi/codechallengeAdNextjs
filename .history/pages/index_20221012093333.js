import Head from "next/head";
import Welcome from "../components/UI/organisms/Welcome/Welcome";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale,["home"]) ),
    },
  };
}

const Home = (props) => {
  return (
    <>
      {/* <Head>
        <title>Articles App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      
      <Welcome></Welcome>
    </>
  );
};
export default Home;
