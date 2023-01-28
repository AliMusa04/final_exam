import React, { useEffect, useState } from "react";
import "./Home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addWish } from "../../redux/slice/wishSlice";
import { BsSearch } from "react-icons/bs";
import { Helmet } from "react-helmet";

const Home = ({ data, setData }) => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  console.log(input);
  const filterData = (obj) => {
    setToggle(!toggle);
    if (toggle) {
      let sortedData = obj.sort((a, b) => a.price - b.price);
      setData([...sortedData]);
    } else {
      let unsortedData = obj.sort((a, b) => b.price - a.price);
      setData([...unsortedData]);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <section className="home_first_section">
        <div className="background_img"></div>
        <div className="back_img_orange"></div>
        <div className="home_contanier">
          <div className="first_section_text">
            <h3>Push Your Life To a New Level</h3>
            <p>
              Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor
              turpis mattis
            </p>

            <div className="first_button">
              <button>
                Learn More <AiOutlineArrowRight />
              </button>
              <a href="#">Meet me</a>
            </div>
          </div>
        </div>
      </section>

      <section className="problem_fetch_section">
        <div className="home_contanier">
          <div className="cart_cont">
            <div className="title_cart">
              <h2>How Can I Help You</h2>
              <h4>We can discuss your problems</h4>
            </div>
            <div className="serach">
              <input
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                className="input_search"
                type="text"
                placeholder="Search by name"
              />
              <button
                onClick={() => {
                  filterData(data);
                }}
              >
                Filter by price
              </button>
            </div>
            <div className="card_contaier">
              {data &&
                data
                  .filter((i) => {
                    if (i.name.toLowerCase().includes(input.toLowerCase())) {
                      return i;
                    }
                  })
                  .map((item) => {
                    return (
                      <div className="card">
                        <img
                          src="http://www.themestarz.net/html/lifecoach/assets/img/icon-head-question.png"
                          alt=""
                        />
                        <h2>{item.name}</h2>

                        <h4>{item.desc}</h4>

                        <h5>
                          $ <span>{item.price}</span>
                        </h5>
                        <div className="button_div">
                          <button
                            onClick={() => {
                              dispatch(addWish(item));
                            }}
                          >
                            Add WishList
                          </button>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="home_contanier">
          <div className="courses_title">
            <h2>Latest Courses</h2>
          </div>
          <div className="card_contanier">
            <div className="card_course">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg"
                alt=""
              />

              <div className="card_course_text">
                <h5>18.23.233</h5>
                <h2>Become whole person </h2>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, assumenda!
                </p>

                <button>Join Course</button>
              </div>
            </div>

            <div className="card_course">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg"
                alt=""
              />

              <div className="card_course_text">
                <h5>18.23.233</h5>
                <h2>Become whole person </h2>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, assumenda!
                </p>

                <button>Join Course</button>
              </div>
            </div>

            <div className="card_course">
              <img
                src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg"
                alt=""
              />

              <div className="card_course_text">
                <h5>18.23.233</h5>
                <h2>Become whole person </h2>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Provident, assumenda!
                </p>

                <button>Join Course</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video_section">
        <div className="home_contanier">
          <div className="video_title">
            <h2>Free Videos</h2>
            <p>Selected videos from Previous Seminars</p>
          </div>
          <div className="img_video">
            <div className="video">
              <img
                src="https://media.istockphoto.com/id/467367026/photo/perfect-sky-and-ocean.jpg?s=612x612&w=0&k=20&c=LZYFRxIhuKQom3l-kR3TLN7GikSJYJz9NRglQ3nngBw="
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="online_web">
        <div className="home_contanier">
          <div className="web_card">
            <div className="web_card_title">
              <h1> Online Webinars</h1>
            </div>
            <div className="web_card_contanier">
              <div className="card_web">
                <img
                  src="http://www.themestarz.net/html/lifecoach/assets/img/img-success.jpg"
                  alt=""
                />
                <div className="card_web_text">
                  <h1>Short Path To Succsesfully Life</h1>
                  <p>14.01.2011</p>
                </div>
                <div className="card_web_button">
                  <button>Join Webinar</button>
                </div>
              </div>

              <div className="card_web">
                <img
                  src="http://www.themestarz.net/html/lifecoach/assets/img/img-success.jpg"
                  alt=""
                />
                <div className="card_web_text">
                  <h1>Short Path To Succsesfully Life</h1>
                  <p>14.01.2011</p>
                </div>
                <div className="card_web_button">
                  <button>Join Webinar</button>
                </div>
              </div>

              <div className="card_web">
                <img
                  src="http://www.themestarz.net/html/lifecoach/assets/img/img-success.jpg"
                  alt=""
                />
                <div className="card_web_text">
                  <h1>Short Path To Succsesfully Life</h1>
                  <p>14.01.2011</p>
                </div>
                <div className="card_web_button">
                  <button>Join Webinar</button>
                </div>
              </div>

              <div className="card_web">
                <img
                  src="http://www.themestarz.net/html/lifecoach/assets/img/img-success.jpg"
                  alt=""
                />
                <div className="card_web_text">
                  <h1>Short Path To Succsesfully Life</h1>
                  <p>14.01.2011</p>
                </div>
                <div className="card_web_button">
                  <button>Join Webinar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo_section">
        <div className="home_contanier">
          <div className="logos">
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-01.png"
              alt=""
            />

            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-02.png"
              alt=""
            />
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-03.png"
              alt=""
            />
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-04.png"
              alt=""
            />
            <img
              src="http://www.themestarz.net/html/lifecoach/assets/img/logo-05.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="map_section">
        <div className="home_contanier">
          <div className="top_seection_title">
            <h2>Buy The LifeCoach Now!</h2>
            <button>Buy Now!</button>
          </div>
          <div className="map_pic"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
