import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  console.log(router);

  return (
    <nav>
      <Link href="/">
        <a className="img">
          <Image
            src="/img/printingcider_logo.svg"
            width={"140px"}
            height={"30px"}
            alt="로고"
          />
        </a>
      </Link>
      <ul className="navbar_menu">
        <li>
          <Link href="/">
            <a>북</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>리플렛</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>포스터/전단</a>
          </Link>
        </li>
        <li>
          <Link href="/tips">
            <a>프린팅사이다 꿀팁</a>
          </Link>
        </li>
      </ul>
      <ul className="user_menu">
        <li>
          <a href="">로그인</a>
        </li>
        <li>
          <a href="">회원가입</a>
        </li>
        <li>
          <a href="">장바구니</a>
        </li>
      </ul>

      <style jsx>{`
        nav {
          //nav 태그네 전체 플렉스박스로 초기화
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: beige;
          /* padding: 8px 330px; */
          height: 100px;
          width: 100%;
          position: fixed;
          z-index: 1;
        }
        a {
          text-decoration-line: none;
        }
        .img {
          /* margin: 0 100px 0 0; */
        }
        .navbar_menu {
          // 리스트아이템 플렉스로 초기화
          display: flex;
        }
        .navbar_menu li {
          /* border: 1px solid black; */
          padding: 8px 74px;
          font-size: 17px;
        }
        .user_menu {
          display: flex;
          /* margin: 0 0 0 350px; */
        }
        .user_menu li {
          padding: 8px 14px;
        }
        @media (max-width: 768px) {
          nav {
            /* display: none; */

            flex-direction: column;
            padding: 0;
            align-items: flex-start;
          }

          .navbar_menu {
            flex-direction: column;
            width: 100%;
            /* align-items: flex-start; */
          }
          .user_menu {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
