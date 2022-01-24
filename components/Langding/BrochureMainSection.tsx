import Link from "next/link";
import Image from "next/image";

const BrochureMainSection = () => {
  return (
    <>
      <div className="brochure">
        <div className="text__container">
          <div className="brochure_text_container">
            <span className="brochure__text">B</span>
            <span className="ook_maintext">ROCHURES</span>
          </div>
          <div className="book__content">
            브로셔, 초대장, 행사용 안내서, 상품소개서등 브로셔 인쇄 서비스를
            통해 나만의 브랜드 또는 사업을 알릴 수 있습니다.
          </div>
          <div className="gotoorderbrochure">
            <Link href="">
              <a className="click__text">브로셔 주문하러 가기</a>
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
              src="/img/brochures.png"
              width={1062}
              height={599}
              alt="bookImage"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .brochure {
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
        .brochure_text_container {
          margin-top: 70px;
        }
        .brochure__text {
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
        .gotoorderbrochure {
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

export default BrochureMainSection;
