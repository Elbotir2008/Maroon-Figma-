import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Section1 from "../home/section-1/Section1";
import { ToastContainer, toast } from "react-toastify";

type Product = {
  id: number;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
  title: string;
  description: string;
};

const OneCatalog = ({ cart, setCart }: any) => {
  // console.log(cart);
  const param: any = useParams();
  const [posts, setPosts] = useState<Product[]>([]);
  const paramId = param.id * 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/cosmetics/" + paramId
        );
        setPosts([response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [paramId]);
  // console.log(posts);

  const showToastMessage = () => {
    toast.success("Success added to cart!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleAddToCart = (product: Product) => {
    if (!cart.includes(product)) {
      setCart([...cart, { ...product, numOfProducts: 1 }]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="div">
      <section>
        <div className="container">
          {posts.length > 0
            ? posts.map((pr) => (
                <div className="oneCard p-[5rem]" key={pr.id}>
                  <div className="flex gap-[5rem]">
                    <img src={pr.image} className="w-[40rem]" alt="Eror" />
                    <div className="oneCard-text">
                      <h1 className="text-[4rem]">{pr.name}</h1>
                      <h5 className="text-[1.5rem] text-[#9A9DA0;]">
                        {pr.title}
                      </h5>
                      <p className="w-[40rem] text-[1.4rem] mt-5 mb-5 font-semibold">
                        {pr.description}
                      </p>
                      <hr />
                      <div className="flex my-5 justify-between">
                        <h4 className="text-[1.7rem]">Состав</h4>
                        <p className="text-[2rem] cursor-pointer">+</p>
                      </div>
                      <hr />
                      <div className="flex my-5 justify-between">
                        <h4 className="text-[1.7rem]">Способ применения</h4>
                        <p className="text-[2rem] cursor-pointer">+</p>
                      </div>
                      <hr />
                      <p className="text-[2rem]">Weight: {pr.weight}</p>
                      <h3 className="text-[3rem] my-5 text-pharColor">
                        {pr.price}
                      </h3>
                      <button
                        className="button-hero border-solid border-pharColor border-[1.2px] px-[3rem] py-[1rem] mt-[3rem]"
                        onClick={showToastMessage}
                        // onClick={() => handleAddToCart(pr)}
                      >
                        <p onClick={() => handleAddToCart(pr)}>
                          Добавить в корзину
                        </p>
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>
      <div className="my-[10rem]">
        <Section1 />
      </div>
    </div>
  );
};

export default OneCatalog;
