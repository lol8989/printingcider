import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>횅</span>
      <Footer />
    </>
  );
}

export default MyApp;
