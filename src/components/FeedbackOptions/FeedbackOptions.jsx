import React from "react";

const FeedbackOptions = ({
  option1,
  option2,
  option3,
  addGoodFeedback,
  addNeutralFeedback,
  addBadFeedback,
}) => {
  return (
    <div>
      <button type="button" onClick={addGoodFeedback} className="">
        {option1}
      </button>
      <button
        type="button"
        onClick={addNeutralFeedback}
        className=""
      >
        {option2}
      </button>
      <button type="button" onClick={addBadFeedback} className="">
        {option3}
      </button>
    </div>
  );
};

export default FeedbackOptions;