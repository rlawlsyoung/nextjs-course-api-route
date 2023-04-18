import { NextApiRequest, NextApiResponse } from "next";
import { buildFeedbackPath, extractFeedback } from ".";

import { FeedbackType } from "../..";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback: FeedbackType) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
};

export default handler;
