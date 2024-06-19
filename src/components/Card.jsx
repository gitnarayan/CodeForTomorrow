import React from "react";

const Card = ({ object, onRemove }) => {
  return (
    <div
      className="card shadow mb-3"
      style={{ maxWidth: "24rem" }}
      key={object.id}
    >
      <div className="d-flex justify-content-end">
        <i className="fa-solid fa-xmark text-danger m-3 fs-4" onClick={onRemove}></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">{object.title}</h5>
        <p className="card-text">{object.body}</p>
      </div>
      <div className="w-100% p-2">
        <img
          className="img-fluid w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSccMa6zJqKZR_Lo61ICnwt3DXwgPBhzq_sAA&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
