import {
  map,
  instagram,
  facebook,
  twitter,
} from "../../../../public/allPictures";

const Section6 = () => {
  return (
    <section className="contact-section p-[4rem] mt-[10rem]">
      <div className="container flex">
        <div className="contact-left w-[50rem] h-[50rem] bg-mainColor p-[5rem]">
          <h2 className="text-[3rem] text-pharColor">Контакты</h2>
          <br />
          <h4 className="text-[2rem]">Адрес</h4>
          <p className="text-[1.3rem] w-[17rem]">
            Санкт-Петербург, ул. Большая Конюшенная, 19
          </p>
          <br />
          <h4 className="text-[2rem]">Телефон</h4>
          <p className="text-[1.3rem]">+7 (923) 888-90-60</p>
          <br />
          <h4 className="text-[2rem]">E-mail</h4>
          <p className="text-[1.3rem]">info@maroon.ru</p>
          <br />
          <div className="flex gap-[3rem] mt-[4rem]">
            <img src={instagram} className="cursor-pointer" alt="Eror" />
            <img src={facebook} className="cursor-pointer" alt="Eror" />
            <img src={twitter} className="cursor-pointer" alt="Eror" />
          </div>
        </div>
        <div className="contact-right pt-[3rem] absolute left-[35%]">
          <img src={map} alt="Eror" className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
