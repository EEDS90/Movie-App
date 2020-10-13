import React from "react";
import { useParams } from "react-router-dom";

function ShowPage(props) {
  const params = useParams();
  console.log(params);

  const review = props.reviews.find((r) => r.id === params.id);

  return (
    <div>
      <div className="title">
        <h2>{review.fields.title}</h2>
      </div>
      <div className="comments">
        <h4>{review.fields.comments}</h4>
      </div>
      <div className="ratings">
        <h5>{review.fields.ratings}</h5>
      </div>
    </div>
  );
}

export default ShowPage;
