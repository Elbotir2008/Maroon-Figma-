import HomeCopies from "../HomeCopies";
import { Link, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Katalog1 = () => {
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
    <div>
      <section>
        <div className="container">
          <div className="boxes grid grid-cols-4 p-[5rem] gap-2">
            {posts.length > 0
              ? posts.map((post) => (
                  <Link to={`/oneCatalog/${post.id}`} key={post.id}>
                    <div className="box">
                      <img
                        src={post.image}
                        className="absolute z-[-3]"
                        alt="Eror"
                      />
                      <div className="box-title-left">
                        <h5>{post.name}</h5>
                        <p>{post.category}</p>
                      </div>
                      <div className="box-title-right">
                        <h5>{post.price}</h5>
                        <p>{post.weight}</p>
                      </div>
                    </div>
                  </Link>
                ))
              : null}
          </div>

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
