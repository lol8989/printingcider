import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <main>
      <div className="main_container">
        <div className="bear">
          <Image src="/img/bear.png" width={571} height={531} alt="bear" />
        </div>
      </div>
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
        .main_container {
          /* position: relative; */
          display: flex;
          height: 1000px;
          background-image: url("/img/background.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center bottom;
          overflow: hidden;
          padding: 100px 0 0 0;
          flex-direction: column;
          justify-content: flex-end;
          align-content: flex-end;
          align-items: flex-end;
        }
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
        /* @media (prefers-reduced-motion: no-preference) {
            .App-logo {
              animation: App-logo-spin infinite 20s linear;
            }
          } */
        @media (prefers-reduced-motion: no-preference) {
          .bear {
            animation: logo-bounce infinite 2s;
          }
        }

        .bear {
          width: 30%;
          position: relative;
          margin: 0 50px 20px 0px;
          animation-name: ;
        }
        @keyframes logo-bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .book__main {
          display: flex;
          /* background-image: url("/img/books.png"); */
          /* background-size: 800px; */
          /* background-repeat: no-repeat; */
          background-color: #fafafa;
          height: 840px;
          justify-content: center;
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
          font-size: 21px;
          max-width: 462px;
        }
        .gotoorderbooks {
          display: flex;
          flex-direction: row;
          color: #30e646;
          margin: 50px 8px;
        }
        .click__text {
          text-decoration: none;
          margin: 0 8px;
        }
        .book__background__image {
          /* z-index: -1; */
          /* background-image: url("../../public/img/book.png"); */
        }
      `}</style>
    </main>
  );
};

export default Main;
