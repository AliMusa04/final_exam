import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeWish } from "../../redux/slice/wishSlice";
import "./Wishlist.scss";
import {Helmet} from "react-helmet";

const Wishlist = () => {
  const wishData = useSelector((state) => state.addToWish.value);
  const dispatch = useDispatch()
  console.log(wishData);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WishList Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <section>
      <div className="wishPage_contanier">
        <div className="wishPage_content">
          <ul>
            {wishData &&
              wishData.map((item) => {
                return(
                <li>
                  <div className="wish_text">
                    <p className="name">{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                  <button onClick={()=>{
                      dispatch(removeWish(item._id))
                      alert("Cart deleted")
                  }}>delete</button>
                </li>);
              })}
          </ul>
        </div>
      </div>
    </section>
    </>
  );
};

export default Wishlist;
