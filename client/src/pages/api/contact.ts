// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "@/config/nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  success?: boolean;
};

const contactMessageFields = {
  name: "",
  email: "",
  message: "",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const formData = req.body;
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ message: "Bad Request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "My Website Message",
        text: `${formData.message}`,
        html: `<h1>${formData.name}</h1> <h2>${formData.email}</h2><p>${formData.message}</p> `,
      });
      return res.status(400).json({ success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  console.log(req.body);
  return res.status(400).json({ message: "Bad Request" });
}
