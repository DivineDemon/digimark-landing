import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

/**
 * @param {string} [name]
 * @param {string} [email]
 * @param {string} [phone]
 * @param {string} [message]
 * @param {(loading: boolean) => void} [setLoading]
 */
export const sendEmail = (
  name = "",
  email = "",
  phone = "",
  message = "",
  setLoading
) => {
  if (typeof setLoading === "function") {
    setLoading(true);
  }

  // Choose service ID based on email domain
  const serviceID =
    (email.includes("gmail")
      ? process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ID
      : email.includes("yahoo")
      ? process.env.NEXT_PUBLIC_YAHOO_SERVICE_ID
      : process.env.NEXT_PUBLIC_SERVICE_ID) || "";

  emailjs
    .send(
      serviceID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      {
        from_name: name,
        to_name: "Digimark Developers",
        user_email: email,
        user_phone: phone,
        message: message,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      }
    )
    .then(
      (response) => {
        toast.success("Message sent successfully!");
        if (typeof setLoading === "function") {
          setLoading(false);
        }
      },
      (error) => {
        toast.error("Something went wrong. Please try again later.");
        if (typeof setLoading === "function") {
          setLoading(false);
        }
      }
    );
};
