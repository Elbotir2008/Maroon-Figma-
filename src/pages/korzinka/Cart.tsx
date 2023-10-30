import { useEffect } from "react";

export type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
  numOfProducts?: number;
};

const Cart = ({ cart, setCart }: any) => {
  console.log(cart);
  useEffect(() => {
    let prods = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(prods);
  }, []);
  return (
    <div className="mt-24 mb-16 Cart">
      <div className="par">
        <h1 className="text-center text-[3rem]">Korzinka</h1>
      </div>
      <div className="cards grid grid-cols-4 gap-[5rem]">
        {cart.map((i: Product) => (
          <div className="card w-[20rem] ms-[5rem]" key={i.id}>
            <img src={i.image} alt="img" className="mb-5" />
            <div className="card-content flex justify-between">
              <div className="left">
                <h3 className="text-[1.3rem]">{i.name}</h3>
                <p className="text-[1.3rem]">{i.category}</p>
              </div>
              <div className="left">
                <h3 className="text-[1.3rem]">{i.price} </h3>
                <p className="text-[1.3rem]">{i.weight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
