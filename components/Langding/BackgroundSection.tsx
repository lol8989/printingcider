import Image from "next/image";

const BackgroundSection = () => {
  return (
    <>
      <div className="main_container">
        <div className="bear">
          <Image src="/img/bear.png" width={571} height={531} alt="bear" />
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
      `}</style>
    </>
  );
};

export default BackgroundSection;
