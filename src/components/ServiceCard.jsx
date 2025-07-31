import services1 from "../images/icons/services1.svg";
import services2 from "../images/icons/services2.svg";
import services3 from "../images/icons/services3.svg";

import sectionBg from "../images/gallery/section-bg.jpg";

const services = [
  {
    id: 1,
    icon: (
      <img
        src={services1}
        alt="Stylish hair cut"
        className="w-12 h-12 mx-auto mb-4"
      />
    ),
    title: "Stylish hair cut",
    description:
      "Available be the majority have suffered alteration in some form, by injected humour.",
  },
  {
    id: 2,
    icon: (
      <img
        src={services2}
        alt="Cut & hair style"
        className="w-12 h-12 mx-auto mb-4"
      />
    ),
    title: "Cut & hair style",
    description:
      "Available be the majority have suffered alteration in some form, by injected humour.",
  },
  {
    id: 3,
    icon: (
      <img
        src={services3}
        alt="Color & hair wash"
        className="w-12 h-12 mx-auto mb-4"
      />
    ),
    title: "Color & hair wash",
    description:
      "Available be the majority have suffered alteration in some form, by injected humour.",
  },
];

const ServiceCard = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {services.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className=" card-transition bg-zinc-900  rounded-xl p-8 text-white shadow-md hover:shadow-lg transition-all duration-600"
          >
            <div className="card-content">
              {icon}
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-2xl text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServiceCard;
