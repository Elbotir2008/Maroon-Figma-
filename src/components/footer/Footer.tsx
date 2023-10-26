import {
  instagram,
  facebook,
  twitter,
  logo,
} from "../../../public/allPictures";
const Footer = () => {
  return (
    <footer className="w-full h-[230px] bg-mainColor">
      <div className="container">
        <div className="flex justify-between pt-[60px]">
          <div className="footer-links flex text-mainColor text-[17px] ">
            <img src={logo} alt="eror" className="me-[40px]" />
            <ul className="flex gap-[30px]">
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Магазины</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="footer-vectors flex gap-[30px]">
            <img src={instagram} alt="eror" />
            <img src={facebook} alt="eror" />
            <img src={twitter} alt="eror" />
          </div>
        </div>
        <div className="my-[20px] w-[100%] h-[1px] opacity-[1] bg-pharColor mt-[80px]"></div>
        <div className="footer-bottom flex justify-between items-center text-pharColor text-[14px] ">
          <p>Maroon 2020 Все права защищены</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
