import AboutImage from "../images/gallery/about1.jpg";
import rightArrow from "../images/icons/right-arrow.svg";

const About = () => {
  const checklist = [
    "Be the majority have suffered alteration in some form, by injected humour.",
    "Psum available be the majority have suffered alteration in some form, by injected humour.",
    "Available be the majority have suffered alteration in some form, by injected humour.",
    "Humour available be the majority have suffered alteration in some form, by injected.",
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {/* Left: Checklist */}
        <div className="space-y-6">
          {checklist.map((text, index) => (
            <div key={index} className="flex items-start gap-8 m-6">
              <img src={rightArrow} alt="right arrow" />
              <p className="text-gray-700 text-lg">{text}</p>
            </div>
          ))}
        </div>

        {/* Center: Image */}
        <div className="flex justify-center">
          <img
            src={AboutImage}
            alt="About"
            className="rounded-md shadow-md max-h-[400px] object-cover"
          />
        </div>

        {/* Right: Text & Button */}
        <div className="space-y-4">
          <div className="border-l-4 border-red-600 pl-2">
            <h2 className="text-2xl font-extrabold uppercase">
              About Our Story
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            There are many variations of passages of Lorem Ipsum available be
            the majority have suffered alteration in some form, by injected
            humour or randomised words.
          </p>
          <button className="border border-red-600 text-red-600 font-bold px-6 py-2 hover:bg-red-600 hover:text-white transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
