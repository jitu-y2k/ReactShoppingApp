/**
 * fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const [data, setData] = useState([]);

  /**
   * useEffect - everytime your component renders, the code inside
   * useEffect is called
   * dependency array -
   *  i when it is empty - useEffect will be called only once
   *  ii when we have some values - useffect will be called when the
   * the values in dependency array changes
   */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [data]);
  let isLoading = false;
  let loadError = null;

  // console.log(selectedCategory);

  if (isLoading) {
    return <div>Data is Loading ...</div>;
  } else if (loadError) {
    return (
      <div>Oops there seems to be an error. Please try again later ...</div>
    );
  } else {
    return (
      <div className="header-items">
        {data.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              "header-item " +
              (selectedCategory === category ? "header-item-selected" : "")
            }
          >
            {category}
          </div>
        ))}
        <div className="shopping-items">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span style={{ marginLeft: 5 }} className="cart-length"></span>
        </div>
      </div>
    );
  }
};
export default Header;
