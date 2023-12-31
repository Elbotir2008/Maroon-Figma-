import { logo, user, shop } from "../../../public/allPictures.tsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] bg-white">
      <div className="container">
        <nav className="flex justify-between items-center">
          <div className="nav-logo p-[30px]">
            <img src={logo} alt="Eror" />
          </div>
          <div className="nav-links">
            <ul className="flex gap-[40px] text-[17px] text-mainColor">
              <Link to="/catalog">
                <li>Каталог </li>
              </Link>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <img src={user} alt="Eror" />
              </li>
              <Link to="/korzinka">
                <li>
                  <img src={shop} alt="Eror" />
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
