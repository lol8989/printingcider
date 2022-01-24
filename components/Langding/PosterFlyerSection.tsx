import Link from "next/link";
import Image from "next/image";

const PosterFlyerSection = () => {
  return (
    <>
      <div className="posterflyer">
        <div className="text__container">
          <div className="posterflyer_text_container">
            <span className="posterflyer__text">P</span>
            <span className="ook_maintext">OSTER /</span>
            <span className="posterflyer__text">F</span>
            <span className="ook_maintext">LYER</span>
          </div>
          <div className="book__content">
            공연/행사 포스터, 제품 홍보 포스터, 안내 전단 등 포스터 또는 전단
            인쇄 서비스를 통해 행사 및 매장을 홍보할 수 있습니다.
          </div>
          <div className="gotoorderbooks">
            <Link href="">
              <a className="click__text">포스터/전단 주문하러가기</a>
            </Link>
            <Image
              src="/img/next_green.png"
              width={6}
              height={11}
              alt="arrow"
            />
          </div>
          <div className="book__background__image">
            <Image
              src="/img/posters.png"
              width={1180}
              height={700}
              alt="bookImage"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .posterflyer {
          display: flex;
          background-color: #fafafa;
          height: 840px;
          justify-content: center;
          margin-bottom: 15px;
        }
        .text__container {
          display: flex;
          flex-direction: column;

          align-items: center;
        }
        .posterflyer_text_container {
          margin-top: 70px;
        }
        .posterflyer__text {
          color: #30e646;
          font-size: 44px;
        }
        .ook_maintext {
          color: #515151;
          font-size: 44px;
        }
        .book__content {
          display: flex;
          margin-top: 31px;
          text-align: center;
          font-size: 20px;
          max-width: 462px;
        }
        .gotoorderbooks {
          display: flex;
          flex-direction: row;
          color: #30e646;
          margin: 50px 8px;
        }
        .click__text {
          color: black;

          text-decoration: none;
          margin: 0 8px;
        }

        .book__background__image {
          padding-right: 50px;
        }
      `}</style>
    </>
  );
};

export default PosterFlyerSection;
