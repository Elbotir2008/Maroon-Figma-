import HomeCopies from "../HomeCopies";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Katalog1 = () => {
  const [posts, setPosts] = useState([]);
  const [allposts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const fetchPosts = async () => {
    try {
      let res = await axios.get("http://localhost:3000/cosmetics");
      setAllPosts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [input, setInput] = useState("");
  const searchText = (e) => {
    e.preventDefault();
    const inputText = e.target.value.toLowerCase();
    setInput(inputText);
    console.log(input);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filtered = allposts
    .slice(indexOfFirstPost, indexOfLastPost)
    .filter((el) => {
      if (input === "") {
        return el;
      } else {
        return (
          el.name.toLowerCase().includes(input) ||
          el.title.toLowerCase().includes(input)
        );
      }
    });

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section>
        <div className="container">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            id="search"
            className="py-3 px-2 w-[50rem]  border-[2px]"
            onChange={searchText}
          />
          <div className="boxes grid grid-cols-4 p-[5rem] gap-2">
            {filtered.length > 0
              ? filtered.map((fl) => (
                  <Link to={`/oneCatalog/${fl.id}`} key={fl.id}>
                    <div className="box">
                      <img
                        src={fl.image}
                        className="absolute z-[-3]"
                        alt="Eror"
                      />
                      <div className="box-title-left">
                        <h5>{fl.name}</h5>
                        <p>{fl.category}</p>
                      </div>
                      <div className="box-title-right">
                        <h5>{fl.price}</h5>
                        <p>{fl.weight}</p>
                      </div>
                    </div>
                  </Link>
                ))
              : null}
          </div>

          <div className="pag flex text-[2rem] ms-[53rem] items-center gap-4">
            {Array.from({
              length: Math.ceil(allposts.length / postsPerPage),
            }).map((_, index) => (
              <p
                key={index}
                className={`cursor-pointer ${
                  currentPage === index + 1 ? "text-blue-500" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </p>
            ))}
          </div>
        </div>
      </section>
      <HomeCopies />
    </div>
  );
};

export default Katalog1;
