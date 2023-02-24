// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const formData = req.body;
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ message: "Bad Request" });
    }
  }
  console.log(req.body);
  return res.status(400).json({ message: "Bad Request" });
}
