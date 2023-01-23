import React from "react";

const Categories = () => {
  return (
    <div className="container-xxl pt-2">
      <h2 className="text-center">Shop Our Categories!</h2>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col col-sm-4 col-lg-2">
          <div className="p-5 bg-secondary mb-3 text-center fw-bolder text-white rounded">
            Fruits
          </div>
        </div>
        <div className="col col-sm-4 col-lg-2">
          <div className="p-5 bg-secondary mb-3 text-center fw-bolder text-white rounded">
            Vegetables
          </div>
        </div>
        <div className="col col-sm-4 col-lg-2">
          <div className="p-5 bg-secondary mb-3 text-center fw-bolder text-white rounded">
            Beverages
          </div>
        </div>
        <div className="col col-sm-4 col-lg-2">
          <div className="p-5 bg-secondary mb-3 text-center fw-bolder text-white rounded">
            Sweets
          </div>
        </div>
        <div className="col col-sm-4 col-lg-2">
          <div className="p-5 bg-secondary mb-3 text-center fw-bolder text-white rounded">
            Spices
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
