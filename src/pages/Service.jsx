import React, { useState } from "react";
import about2 from "../images/gallery/about2.jpg";
import ServiceCard from "../components/ServiceCard";
import CustomerSay from "../components/CustomerSay";

const services = {
  hair: [
    { name: "Trim your Hair", price: 40 },
    { name: "Special Beard Treatment", price: 40 },
    { name: "Color your Beard", price: 40 },
    { name: "Wax your Beard", price: 40 },
  ],
  beard: [
    { name: "Trim your Hair", price: 40 },
    { name: "Special Beard Treatment", price: 40 },
    { name: "Color your Beard", price: 40 },
    { name: "Wax your Beard", price: 40 },
  ],
};

const Service = () => {
  const [openTab, setOpenTab] = useState("hair");

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">ALL WE DO FOR YOU</h2>

          {/* For Hair */}
          <div className="mb-6">
            <button
              className="bg-red-600 text-white px-4 py-2 w-full text-left font-semibold"
              onClick={() => setOpenTab("hair")}
            >
              For Hair
            </button>
            {openTab === "hair" && (
              <ul className="border border-t-0 p-4 space-y-2">
                {services.hair.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-red-600 font-bold">
                      From ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* For Beard */}
          <div>
            <button
              className={`px-4 py-2 w-full text-left font-semibold text-white ${
                openTab === "beard" ? "bg-red-600" : "bg-black"
              }`}
              onClick={() => setOpenTab("beard")}
            >
              For Beard
            </button>
            {openTab === "beard" && (
              <ul className="border border-t-0 p-4 space-y-2">
                {services.beard.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="text-red-600 font-bold">
                      From ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={about2} alt="Beard Treatment" className="rounded shadow" />
        </div>
      </div>
      <ServiceCard />
      <CustomerSay />
    </>
  );
};

export default Service;
