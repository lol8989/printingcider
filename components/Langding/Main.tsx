import Image from "next/image";
import Link from "next/link";
import BackgroundSection from "./BackgroundSection";
import BookMainSection from "./BookMainSection";
import BottomBannerSection from "./BottomBannerSection";
import BrochureMainSection from "./BrochureMainSection";
import GoodtipsSection from "./GoodtipsSection";
import PosterFlyerSection from "./PosterFlyerSection";

const Main = () => {
  return (
    <main>
      <BackgroundSection />
      <BookMainSection />
      <BrochureMainSection />
      <PosterFlyerSection />
      <GoodtipsSection />
      <BottomBannerSection />

      <style jsx>{`
        @media (max-width: 1199px) {
          .main_container {
            height: 800px;
            /* align-items: flex-end; */
          }
          .bear {
            /* align-items: center; */
          }
        }
        @media (max-width: 767px) {
          .main_container {
            height: 500px;
          }
        }
      `}</style>
    </main>
  );
};

export default Main;
