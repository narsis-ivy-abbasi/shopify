import { Mail, MapPinHouse, PhoneCall } from "lucide-react";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

emailjs.init(publicKey);

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Email sent successfully!");
          setIsSending(false);
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Failed to send email. Please try again.");
          setIsSending(false);
        }
      );
    }
  };

  return (
    <div className="flex flex-col-reverse justify-between md:flex-col-reverse gap-5 lg:flex-row ">
      <div className="md:w-full lg:w-1/2 flex flex-col gap-3 sm:w-full ">
        <div>
          <img
            src="./contact5.webp"
            alt="About Us"
            width={1000}
            className="rounded-lg hover:opacity-75"
          />
        </div>
        <div className="flex gap-3">
          <div className="lg:w-1/2">
            <img
              src="./contact3.jpg"
              alt="About Us"
              width={300}
              className="rounded-lg w-full object-cover hover:opacity-75"
              style={{ height: "250px" }}
            />
          </div>
          <div className="w-1/2">
            <img
              src="./contact2.jpg"
              alt="About Us"
              width={300}
              className="rounded-lg w-full object-cover hover:opacity-75"
              style={{ height: "250px" }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/2 text-justify lg:pl-8 sm:w-full sm:pl-0">
        <div className="text-5xl font-semibold text-gray-900 tracking-tighter pb-6">
          Contact Us
        </div>
        <div className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          cum iste velit architecto repudiandae voluptas quae assumenda
          necessitatibus.
        </div>

        <div className="mb-3">
          <div className="flex items-center gap-3 mb-3 ">
            <div>
              <PhoneCall />
            </div>
            <div className="text-gray-600 font-light">+1 (555) 123-4567</div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div>
              <MapPinHouse />
            </div>
            <div className="text-gray-600 font-light">
              AAA. Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div>
              <Mail />
            </div>
            <div className="text-gray-600 font-light">info@company.com</div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 w-full"
        >
          <div className="flex justify-between gap-2 ">
            <label className="w-1/2">
              FirstName:
              <input
                type="text"
                name="firstName"
                className="border rounded-md w-full px-3 py-1"
              />
            </label>
            <label className="w-1/2">
              LastName:
              <input
                type="text"
                name="lastName"
                className="border rounded-md w-full px-3 py-1"
              />
            </label>
          </div>

          <label>
            Email:
            <input
              type="text"
              name="email"
              className="border rounded-md w-full px-3 py-1"
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              className="border rounded-md w-full px-3 py-1"
              rows={4}
            />
          </label>

          <button
            type="submit"
            disabled={isSending}
            className={`hover:border-0 hover:bg-green-800 text-white px-4 rounded-lg py-1 bg-green-700 ${
              isSending ? "bg-gray-400" : "bg-green-700"
            } flex justify-center items-center`}
          >
            {isSending ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 border-4 border-gray-200 border-t-gray-600 rounded-full"
                viewBox="0 0 24 24"
              />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
