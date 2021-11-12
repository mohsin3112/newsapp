import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="d-flex justify-content-center">
      <div className="card my-3">
        <span className=" position-absolute top-0 end-0  translate-middle badge rounded-pill bg-danger">
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={imageUrl}
          className="card-img-top"
          alt=""
          style={{ width: "100%", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              {author ? author : "Unknown"} published on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-primary"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
NewsItems.defaultProps = {
  title: "",
};
export default NewsItems;
