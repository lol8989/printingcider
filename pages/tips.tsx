// import GoodTips from "../components/GoodTips";
// import Footer from "../components/MainPage/Footer";
import { NextPage } from "next";
import Head from "next/head";

const Tips: NextPage = () => {
  return (
    <div>
      <Head>
        <title>인쇄 꿀팁 - 프린팅사이다</title>
        <meta
          name="description"
          content="인쇄에 필요한 유익한 꿀팁을 소개합니다."
        />

        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="프린팅사이다 꿀팁" />
        <meta
          property="og:description"
          content="인쇄할때 필요한 유익한 꿀팁!"
        />
        <meta property="og:image" content="/img/goodtip-snslink.png" />
        <meta property="og:url" content="https://printingcider.io/tip" />
      </Head>

      {/* <GoodTips /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Tips;
