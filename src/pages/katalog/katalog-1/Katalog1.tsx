import HomeCopies from "../HomeCopies";
import { Link } from "react-router-dom";

const Katalog1 = () => {
  return (
    <div>
      <section>
        <div className="container">
          <Link to="/oneCatalog">
            <div className="boxes grid grid-cols-4 p-[5rem] gap-2">
              <div className="box">
                <div className="box-title-left">
                  <h5>High</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>990 $</h5>
                  <p>50ml</p>
                </div>
              </div>
              <div className="box">
                <div className="box-title-left">
                  <h5>Rest</h5>
                  <p>минеральная пудра</p>
                </div>
                <div className="box-title-right">
                  <h5>690 $</h5>
                  <p>20g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Rose</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>890 $</h5>
                  <p>50ml</p>
                </div>
              </div>
              <div className="box">
                <div className="box-title-left">
                  <h5>Milk</h5>
                  <p>масло для тела</p>
                </div>
                <div className="box-title-right">
                  <h5>790 $</h5>
                  <p>150ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Paradise</h5>
                  <p>минеральная пудра</p>
                </div>
                <div className="box-title-right">
                  <h5>590 $</h5>
                  <p>15g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Sun</h5>
                  <p>бомбочка для ванны</p>
                </div>
                <div className="box-title-right">
                  <h5>90 $</h5>
                  <p>20g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Violet</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>890 $</h5>
                  <p>50ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Clean</h5>
                  <p>маска для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>490 $</h5>
                  <p>100g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Coconut</h5>
                  <p>масло для тела</p>
                </div>
                <div className="box-title-right">
                  <h5>990 $</h5>
                  <p>300ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Lavender</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>290 $</h5>
                  <p>50g</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Lotos</h5>
                  <p>маска для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>890 $</h5>
                  <p>50ml</p>
                </div>
              </div>

              <div className="box">
                <div className="box-title-left">
                  <h5>Earth</h5>
                  <p>крем для лица</p>
                </div>
                <div className="box-title-right">
                  <h5>90 $</h5>
                  <p>20g</p>
                </div>
              </div>
            </div>
          </Link>

          <div className="pag flex text-[2rem] ms-[53rem] items-center gap-4">
            <p className="cursor-pointer">1</p>
            <div className="line w-[5rem] h-[1px] bg-black opacity-1"></div>
            <p className="cursor-pointer">8</p>
          </div>
        </div>
      </section>
      <HomeCopies />
    </div>
  );
};

export default Katalog1;
