import { section3 } from "../../../../public/allPictures";

const Section3 = () => {
  return (
    <section className="bg-mainColor mb-[10rem]">
      <div className="container flex gap-[5rem]">
        <div className="left p-[5rem]">
          <h2 className="text-pharColor text-[3rem]">Индивидуальный уход</h2>
          <p className="text-[1.7rem] text-pharColor w-[40rem] leading-[2.8rem] mt-[2rem]">
            Не всегда очевидно, какие элементы и минералы необходимы коже, а
            многочисленные эксперименты с разными средствами только ухудшают ее
            качество.
            <br />
            <br />
            Заполните анкету, и мы подберем уход, подходящий именно вам,
            учитывая ваш образ жизни, место жительства и другие факторы.{" "}
          </p>
          <button className="button-hero border-solid border-pharColor border-[1.2px] px-[3rem] py-[1rem] mt-[3rem]">
            Заполнить анкету
          </button>
        </div>
        <div className="right p-[5rem]">
          <img src={section3} alt="Eror" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
