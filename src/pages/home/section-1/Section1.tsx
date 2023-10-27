import axios from "axios";
import { arrow, arrow2 } from "../../../../public/allPictures";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      let res = await axios.get("http://localhost:3000/cosmetics?_limit=4");
      setPosts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <section className="mt-[10rem]">
      <div className="container">
        <div className="cards grid grid-cols-5 gap-[2rem]">
          <div className="card p-5 ">
            <h3 className="text-[2.5rem] mb-[20px]">Бестселлеры</h3>
            <p className="text-[14px]">
              Легендарные продукты, завоевавшие любовь наших клиентов
            </p>
            <Link to="/catalog">
              <button className="button-hero border-solid border-pharColor border-[1.2px] px-[3rem] py-[1rem] mt-[3rem]">
                Смотреть все
              </button>
            </Link>
          </div>
          {posts.length > 0
            ? posts.map((post) => (
                <div className="card" key={post.id}>
                  <img
                    src={post.image}
                    className="absolute z-[-1] h-[34rem]"
                    alt="Eror"
                  />
                  <div className="txts">
                    <h5 className="text-[2.5rem]">{post.name}</h5>
                    <span className="text-[1rem] text-gray-500">
                      {post.category}
                    </span>
                    <Link to={`/oneCatalog/${post.id}`}>
                      <p className="text-[1.5rem] pharDec">Подробнее</p>
                    </Link>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="arrow mt-[5rem] ms-[100rem]">
          <div className="flex gap-[3rem]">
            <img src={arrow2} className="cursor-pointer" alt="Eror" />
            <img src={arrow} className="cursor-pointer" alt="Eror" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
