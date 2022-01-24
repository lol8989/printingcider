import Link from "next/link";
import Image from "next/image";

const BookMainSection = () => {
  return (
    <>
      <div className="book__main">
        <div className="text__container">
          <div className="book_text_container">
            <span className="book__main__text">B</span>
            <span className="ook_maintext">OOK</span>
          </div>
          <div className="book__content">
            도서, 교재, 정기간행물, 학술지, 제안서, 팬북, 도록등 완벽한 나만의
            단행본을 제작할 수 있습니다.
          </div>
          <div className="gotoorderbooks">
            <Link href="">
              <a className="click__text">책주문하러가기</a>
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
              src="/img/books.png"
              width={1329}
              height={797}
              alt="bookImage"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .book__main {
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
        .book_text_container {
          margin-top: 70px;
        }
        .book__main__text {
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

export default BookMainSection;
