import { useState } from "react";
import { GetStaticProps } from "next";

import { buildFeedbackPath, extractFeedback } from "../api/feedback";
import { FeedbackType } from "..";

interface FeedbackPageProps {
  feedbackItems: FeedbackType[];
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ feedbackItems }) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackType>();

  const loadFeedbackHandler = (id: string) => {
    fetch("/api/feedback/" + id)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  };
  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default FeedbackPage;
