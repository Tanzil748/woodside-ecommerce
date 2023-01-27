import React from "react";
import { Link } from "react-router-dom";
import "../styles/categories.css";
import Button from "react-bootstrap/button";

const Categories = () => {
  return (
    <div className="categoriesComponent py-2">
      <div className="container-xxl">
        <div className="row">
          <div className=" col-12 col-md-6 px-0">
            <div className="customAlignment">
              <div className="smallBox">
                <img
                  src="https://images.unsplash.com/photo-1455998781417-e75917915b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGZydWl0JTIwdG8lMjBvbmUlMjBzaWRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="sampleTitle"
                  className="img-fluid rounded-1"
                />
                <div className="smallBoxText">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error in debitis!
                  </p>
                </div>
              </div>
              <div className="smallBox">
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmslMjB3aXRoJTIwc29saWQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="sampleTitle"
                  className="img-fluid rounded-1"
                />
                <div className="smallBoxText">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error in debitis!
                  </p>
                </div>
              </div>
              <div className="smallBox">
                <img
                  src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rJTIwd2l0aCUyMHNvbGlkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="sampleTitle"
                  className="img-fluid rounded-1"
                />
                <div className="smallBoxText">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error in debitis!
                  </p>
                </div>
              </div>
              <div className="smallBox">
                <img
                  src="https://images.unsplash.com/photo-1518691340140-512e66ce957b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjB3aXRoJTIwc29saWQlMjBjb2xvciUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="sampleTitle"
                  className="img-fluid rounded-1"
                />
                <div className="smallBoxText">
                  <h5>Title</h5>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Error in debitis!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 px-0">
            <div className="bigBox">
              <img
                src="https://images.unsplash.com/photo-1502741126161-b048400d085d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt="sampleTitle"
                className="img-fluid rounded-1"
              />
              <div className="bigBoxText">
                <h5>Title 2</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error in debitis!
                </p>
                <Link>
                  <Button className="categoryBtn">Shop NOW</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
