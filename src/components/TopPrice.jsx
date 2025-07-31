import barber1 from "../images/Gallery/barber1.jpg";
import barber2 from "../images/Gallery/barber2.jpg";
import barber3 from "../images/Gallery/barber3.jpg";
import barber4 from "../images/Gallery/barber4.jpg";
import barber5 from "../images/Gallery/barber5.jpg";
import barber6 from "../images/Gallery/barber6.jpg";

const images = [barber1, barber2, barber3, barber4, barber5, barber6];

const services = [
  "Special Beard Treatment",
  "Special Beard Treatment",
  "Color your Beard",
  "Wax your Beard",
  "Wax your Beard",
];

const TopPrice = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Left: Image Grid */}
        <div className="md:col-span-2 grid grid-cols-3 gap-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Beard Style ${index + 1}`}
              className=" w-full h-60 object-cover"
            />
          ))}
        </div>

        {/* Right: Pricing */}
        <div className="space-y-9">
          <div className="pt-5">
            <h2 className="text-2xl font-extrabold uppercase flex items-center gap-2">
              <span className="border-t-4 border-red-600 pt-1 w-fit inline-block">
                Our
              </span>
              Top Prices
            </h2>
          </div>
          <hr />
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex justify-between text-gray-700 text-lg"
              >
                <span className="font-medium">{service}</span>
                <span className="text-red-600 font-semibold">From $40</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default TopPrice;
