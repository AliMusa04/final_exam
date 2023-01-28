import React, { useEffect } from "react";
import "./Footer.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Footer = ({ data, setData }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      desc: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8080/api/problem", values).then(() => {
        axios.get("http://localhost:8080/api/problem").then((res) => {
          setData(res.data);
        });
        alert("Created card")
      });
    },
  });
  return (
    <footer>
      <div className="formik_section">
        <div className="contact">
          <div className="contact_title">
            <h2>Contact Us</h2>
            <p>2590 Rocky Road Philadelphia, PA 19108 </p>
          </div>
          <div className="contact_info">
            <div className="contact_text">
              <h4>Email:</h4>
              <p className="email">office@example.com</p>
            </div>
            <div className="contact_text">
              <h4>Phone</h4>
              <p>+1 215-606-0391</p>
            </div>
            <div className="contact_text">
              <h4>Skype:</h4>
              <p>LifeCoach</p>
            </div>
          </div>
        </div>

        <div className="formik_input">
          <h2>Write Your Problem</h2>

          <form onSubmit={formik.handleSubmit}>
            <input
              placeholder="Enter your Name"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <span>{formik.errors.name} !</span>
            ) : null}

            <input
              placeholder="Enter your description"
              id="desc"
              name="desc"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
            />
            {formik.touched.desc && formik.errors.desc ? (
              <span>{formik.errors.desc} !</span>
            ) : null}

            <input
              placeholder="Enter Price"
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <span>{formik.errors.price} !</span>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
