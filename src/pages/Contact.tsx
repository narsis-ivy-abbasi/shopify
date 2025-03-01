import { Mail, MapPinHouse, PhoneCall } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div>
        <img src="./contact_us.jpg" alt="Contact Us" width="600px" />
      </div>
      <div className="flex flex-col items-start px-5">
        <div className="mb-5">
          <label className="text-3xl">Contact Us</label>
        </div>
        <div className="flex gap-2 m-2">
          <div>
            <MapPinHouse />
          </div>
          <div>123 Shopify Street, E-commerce City, USA</div>
        </div>
        <div className="flex gap-2 m-2">
          <div>
            <Mail />
          </div>
          <div>support@shopifyshop.com</div>
        </div>
        <div className="flex gap-2 m-2">
          <div>
            <PhoneCall />
          </div>
          <div>+1 (555) 123-4567</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
