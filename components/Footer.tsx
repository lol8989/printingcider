import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  console.log(router);

  return (
    <footer className="footer__container">
      <div className="top__container">
        <div>{""}</div>
        <div className="right-items">
          <div>
            <Link href="">
              <a>이용약관</a>
            </Link>
            <Link href="">
              <a>개인정보처리방침</a>
            </Link>
            <Link href="">
              <a>회사소개</a>
            </Link>
            <Link href="">
              <a>공지사항</a>
            </Link>
            <Link href="">
              <a>개인정보처리방침</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bootop__contaioner">
        <div className="img__container">
          <div className="logo__img">
            <Image
              src={"/img/footer_logo.png"}
              width={114}
              height={60}
              alt="사이다로고"
            />
          </div>
        </div>
        <div className="impo__container">
          <div className="company">
            프린팅사이다 ㈜분팟 대표이사 성대현 사업자등록번호 429-81-01174
            통신판매신고 2019-서울마포-0000
          </div>
          <div className="adress">서울특별시 마포구 백범로31길 21</div>
          <div className="adress">
            고객센터(평일 09:00 - 18:00) 대표번호 02-2115-2234 팩스
            0505-302-1313 이메일 help@boonpod.io
          </div>
          <div className="telecommunication__broker">
            프린팅사이다는 통신판매중개자이며 통신판매의 당사자가 아닙니다.
            따라서 프린팅사이다는 상품 거래정보 및 거래에 대하여 책임을 지지
            않습니다.
          </div>
          <div className="copyright">
            COPYRIGHT © 2019 PRINTINGCIDER. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="sns__container">
          <Image src={"/img/insta.png"} width={20} height={20} alt="insta" />
        </div>
      </div>

      <style jsx>{`
        .footer__container {
          display: flex;
          flex-direction: column;
        }
        .top__container {
          display: flex;
          justify-content: space-between;
          bottom: 0;
          height: 100px;
        }
        .right-items {
          display: flex;
          width: 60%;
          justify-content: center;
        }
        a {
          text-decoration: none;
          color: #231815;
          margin: 0 20px;
          font-size: 17px;
        }
        .bootop__contaioner {
          display: flex;
          justify-content: center;
          height: 200px;
          border-top: 3px solid #f7f7f7;
        }
        .impo__container {
          width: 50%;
          font-size: 13px;
          margin-top: 30px;
          color: #696969;
        }
        .logo__img {
          margin-top: 30px;
          margin-right: 20px;
        }

        .telecommunication__broker {
          margin: 16px 0;
          margin-left: 10px;
        }
        .company {
          margin-bottom: 5px;
          margin-left: 10px;
        }
        .adress {
          margin-bottom: 5px;
          margin-left: 10px;
        }
        .copyright {
          margin-bottom: 55px;
          margin-left: 10px;
        }
        .sns__container {
          margin-top: 30px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
