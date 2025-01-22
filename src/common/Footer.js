import React from "react";
import { footer } from "../data/Data";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid Layout */}
        <div className="flex flex-wrap justify-between gap-8">
          {footer.map((item, key) => (
            <div className="flex-1 min-w-[200px]" key={key}>
              <h1 className="text-2xl mb-4 text-white">{item.header}</h1>
              <p>{item.content1}</p>
              {item.content2 && <p>{item.content2}</p>}
              {item.content3 && <p>{item.content3}</p>}
              {item.content4 && <p>{item.content4}</p>}
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Sandeep Kumar Mehta. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
