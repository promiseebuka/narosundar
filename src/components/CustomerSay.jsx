import customer1 from "../images/gallery/customer1.png";
import customer2 from "../images/gallery/customer2.png";
import customer3 from "../images/gallery/customer3.png";

const tesmonies = [
  {
    id: 1,
    name: "Wilma Mumduya",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
    image: customer1,
  },
  {
    id: 2,
    name: "Jimmy Changa",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
    image: customer2,
  },
  {
    id: 3,
    name: "Wilma Mumduya",
    text: "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.",
    image: customer3,
  },
];

const CustomerSay = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">CUSTOMERS SAY ABOUT US</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {tesmonies.map(({ id, name, text, image }) => (
          <div key={id} className="border rounded-md p-6 shadow-sm">
            <div className="flex justify-center mb-4 text-red-500">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-2xl">
                  ★
                </span>
              ))}
            </div>
            <p className=" mb-8">"{text}"</p>
            <div className="flex items-center justify-center gap-3">
              <img
                src={image}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="font-normal text-#3b0303">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CustomerSay;
