import Link from "next/link";
import Image from "next/image";

const GoodtipsSection = () => {
  return (
    <>
      <div className="goodtip__container">
        <div className="width__area">
          <div className="penguin">
            <Image
              src="/img/penguin.svg"
              width={176}
              height={138}
              alt="penguin"
            />
          </div>
          <div className="goodtip__title">
            <div>
              <Image
                src={"/img/sweet-potato.svg"}
                width={107}
                height={100}
                alt="고구마"
              />
            </div>
            <div className="sweetptato">
              <Image
                src={"/img/special-banner-title.svg"}
                width={337}
                height={114}
                alt="고답해결"
              />
            </div>
          </div>
          <div className="content__container">
            <div className="content__text">
              <div>고구마를 먹은 듯 답답했던 프린트서비스!</div>
              <div>이제 프린팅사이다에서 제공하는 온디맨드 프로세스로</div>
              <div>사이다 먹은 듯 속시원한 프린팅서비스를 제공받아 보세요!</div>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn__style">고답 해결하러 가기</button>
          </div>
          <div className="cider__bear">
            <div>
              <Image
                src={"/img/bear-cider-potato.svg"}
                width={603}
                height={594}
                alt="cider_bear"
              />
            </div>
            <div className="spark">
              <Image
                src={"/img/sparks.svg"}
                width={809}
                height={407}
                alt="스파클링"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .goodtip__container {
          display: flex;
          justify-content: center;
          background-color: #f7f7f7;
          margin-bottom: 15px;
        }
        .width__area {
          display: flex;
          flex-direction: column;
          width: 840px;
        }
        .penguin {
          display: flex;
          justify-content: flex-end;
          margin-top: 90px;
        }
        .goodtip__title {
          display: flex;
          justify-content: center;
        }
        .content__container {
          display: flex;
          justify-content: center;
        }
        .content__text {
          margin-top: 29px;
          padding: 10px;
          width: 55%;
          display: block;
          text-align: center;
          font-size: 18px;
        }
        .btn-container {
          display: flex;
          justify-content: center;
        }
        .btn__style {
          margin-top: 35px;
          border-radius: 10px;
          border: 2px solid #30e646;
          background-color: #30e646;
          width: 337px;
          height: 60px;
          color: white;
        }
        .cider__bear {
          margin-top: 52px;
          display: flex;
          justify-content: center;
          position: relative;
        }
        .spark {
          position: absolute;
        }
      `}</style>
    </>
  );
};

export default GoodtipsSection;
