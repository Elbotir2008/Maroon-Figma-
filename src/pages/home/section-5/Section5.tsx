import {
  shareImg1,
  shareImg2,
  shareImg3,
  shareImg4,
  shareImg5,
  shareImg6,
} from "../../../../public/allPictures";

const Section5 = () => {
  return (
    <section className="mt-[15rem]">
      <div className="container flex">
        <div className="imgs flex p-[2rem]">
          <div className="imgOne">
            <img src={shareImg1} alt="Eror" />
            <img src={shareImg2} alt="Eror" />
          </div>
          <div className="imgTwo">
            <img src={shareImg3} alt="Eror" />
            <img src={shareImg4} alt="Eror" />
          </div>
          <div className="imgThree">
            <img src={shareImg5} alt="Eror" />
            <img src={shareImg6} alt="Eror" />
          </div>
        </div>
        <div className="titles mt-[15rem]">
          <h2 className="text-pharColor text-[3rem] mb-5">
            Присоединяйтесь к нам
          </h2>
          <p className="text-pharColor text-[1.5rem] w-[35rem]">
            Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и
            акциях первыми
          </p>
          <button className="button-hero border-solid border-pharColor border-[1.2px] px-[3rem] py-[1rem] mt-[3rem] font-[600]">
            Подписаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
