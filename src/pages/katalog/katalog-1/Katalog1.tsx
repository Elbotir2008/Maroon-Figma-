import HomeCopies from "../HomeCopies";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
type Product = {
  id: string;
  image: string;
  name: string;
  category: string;
  weight: string;
  price: string;
  title: string;
  description: string;
};

const Katalog1 = () => {
  const [allposts, setAllPosts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const fetchPosts = async () => {
    try {
      let res = await axios.get("http://localhost:3000/cosmetics");
      setAllPosts(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputText = e.target.value.toLowerCase();
    setInput(inputText);
    console.log(input);
  };

  const filterByCategory = (category: any) => {
    setSelectedCategory(category);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filtered = allposts
    .filter((el) => {
      if (selectedCategory === "" && input === "") {
        return true;
      } else if (selectedCategory !== "" && input === "") {
        return el.category === selectedCategory;
      } else if (selectedCategory === "" && input !== "") {
        return (
          el.name.toLowerCase().includes(input) ||
          el.title.toLowerCase().includes(input)
        );
      } else {
        return (
          el.category === selectedCategory &&
          (el.name.toLowerCase().includes(input) ||
            el.title.toLowerCase().includes(input))
        );
      }
    })
    .slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="flex justify-between">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              id="search"
              className="py-3 px-2 w-[50rem]  border-[2px]"
              onChange={searchText}
            />
            <div className="categories">
              <select
                onChange={(e) => filterByCategory(e.target.value)}
                className="w-[10rem] py-[1rem]"
              >
                <option value="all">All</option>
                <option value="Crem">Crem</option>
                <option value="mask">Mask</option>
                <option value="Powders">Powders</option>
                <option value="Foams">Foams</option>
              </select>
            </div>
          </div>
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
