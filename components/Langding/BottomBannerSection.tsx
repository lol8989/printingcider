import Image from "next/image";

const BottomBannerSection = () => {
  return (
    <>
      <div className="bannerContainer">
        {/* <div className="area-container"> */}
        <ul className="bannerList">
          <li>
            <Image
              src={"/img/sbc.svg"}
              width={221}
              height={24}
              alt="청년창업사관학교"
            />
          </li>
          <li>
            <Image
              src={"/img/sbc-2.svg"}
              width={221}
              height={24}
              alt="중소벤처진흥공단"
            />
          </li>
          <li>
            <Image
              src={"/img/sujang.svg"}
              width={158}
              height={24}
              alt="소상공인시장진흥공단"
            />
          </li>
          <li>
            <Image src={"/img/kibo.svg"} width={180} height={24} alt="기보" />
          </li>
          <li>
            <Image
              src={"/img/ssc.png"}
              width={180}
              height={24}
              alt="서울창업허브"
            />
          </li>
        </ul>
        {/* </div> */}
      </div>
      <style jsx>{`
        .bannerContainer {
          display: flex;
          justify-content: center;
          background-color: #f7f7f7;
          height: 175px;
        }
        .bannerList {
          display: flex;
          justify-content: space-around;
          width: 70%;
          align-items: center;
          color: black;
        }
      `}</style>
    </>
  );
};

export default BottomBannerSection;
