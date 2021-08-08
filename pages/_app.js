import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crypto Tracker</title>
        <meta name="description" content="Next js based Crypto tracker" />
        <link
          rel="icon"
          href="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2422-thumb.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
