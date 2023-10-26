import { arrow, heroImg1, heroImg2 } from "../../../../public/allPictures";

const Hero = () => {
  return (
    <section className="hero-section w-full h-[55rem] ps-[7rem] pt-[5rem]">
      <div className="container flex items-center">
        <div className="hero-1">
          <img src={heroImg1} alt="Eror" />
          <div className="flex justify-between items-center mt-5 text-[13px] font-[600]">
            <h4>Уход для лица</h4>
            <img src={arrow} alt="Eror" />
          </div>
        </div>
        <div className="hero-2 text-center">
          <h1 className="text-[4rem]">MAROON</h1>
          <p className="text-[17px] w-[35rem] text-pharColor">
            Натуральная косметика для бережного ухода за кожей
          </p>
          <button className="button-hero border-solid border-pharColor border-[1.2px] px-[3rem] py-[1rem] mt-[3rem]">
            Подробнее
          </button>
        </div>
        <div className="hero-3">
          <img src={heroImg2} alt="Eror" />
          <div className="flex  justify-between items-center mt-5 text-[13px] font-[600]">
            <h4>Уход для лица</h4>
            <img src={arrow} alt="Eror" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
