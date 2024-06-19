import React from "react";

const Card = ({ object }) => {
  return (
    <div
      className="card shadow  mb-3"
      style={{ maxWidth: "18rem" }}
      key={object.id}
    >
      <div className="d-flex justify-content-end">
        {/* <div className="card-header">Header</div> */}
        <i className="fa-solid fa-xmark text-danger m-3 fs-4"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{object.title}</h5>
        <p className="card-text">{object.body}</p>

      </div>
      <div className="w-100% p-2">
        <img  className = 'img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccMa6zJqKZR_Lo61ICnwt3DXwgPBhzq_sAA&s" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Card;