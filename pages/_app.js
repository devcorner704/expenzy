import Head from "next/head";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
// import theme from '../src/theme'
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>Dev Dash</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
