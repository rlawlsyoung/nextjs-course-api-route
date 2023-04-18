import fs from "fs";
import path from "path";

const handler = (req: any, res: any) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedback,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData.toString());
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success!", feedback: newFeedback });
  } else res.status(200).json({ message: "hi there" });
};

export default handler;
