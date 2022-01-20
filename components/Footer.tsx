import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  console.log(router);

  return (
    <footer className="container">
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
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          background-color: red;
          /* position: absolute; */
          bottom: 0;
          height: 217px;
        }

        a {
          left: 20px;
          font-size: 17px;
          display: inline-block;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
