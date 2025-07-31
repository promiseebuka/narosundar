import instra1 from "../images/gallery/instra1.jpg";
import instra2 from "../images/gallery/instra2.jpg";
import instra3 from "../images/gallery/instra3.jpg";
import instra4 from "../images/gallery/instra4.jpg";
import instra5 from "../images/gallery/instra5.jpg";
import instra6 from "../images/gallery/instra6.jpg";

const Gallery = () => {
  const images = [
    { id: 1, src: instra1 },
    { id: 2, src: instra2 },
    { id: 3, src: instra3 },
    { id: 4, src: instra4 },
    { id: 5, src: instra5 },
    { id: 6, src: instra6 },
  ];

  return (
    <>
      <section className="w-full h-[300px] flex flex-col md:flex-row">
        {/* Left Side - Text */}
        <div className="flex-1 bg-[#150303] text-white flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-chivo ">
            GALLERY
          </h1>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <img
            src={instra2}
            alt="Barber Service"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="py-12 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-extrabold mb-10">GALLERY</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={img.src}
                alt={`Gallery ${img.id}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
