export const sendContactForm = async (data: object) =>
  fetch("https://my-portfolio-ai-zeek.vercel.app/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
