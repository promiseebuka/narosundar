import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { BsSendFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import footerLogo from "../images/logo/logo2_footer.png";
import FooterContact from "../components/FooterContact";

function Footer() {
  return (
    <footer className="bg-primary text-white pb-4 pt-8 md:pt-24 mt-8">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-4 border-icon pb-14">
          <FooterContact icon={<IoCall className="w-6 h-6 text-secondary" />} />

          <div className="md:text-center my-4 md:my-0">
            <Link to="#" className="block">
              <img src={footerLogo} alt="logo" className="md:mx-auto" />
            </Link>
            <p className="text-base text-gray-500 mt-4 mb-8">
              There are many variation of passages of Lorem Ipsum available to
              majority
            </p>
            <div className="flex space-x-4 md:justify-center">
              <a
                href="#"
                className="w-16 h-16 bg-icon hover:bg-secondary transition duration-300 rounded-full flex items-center justify-center"
              >
                <FaFacebook className="w-6 h-6 text-white" />
              </a>

              <a
                href="#"
                className="w-16 h-16 bg-icon hover:bg-secondary transition duration-300 rounded-full flex items-center justify-center"
              >
                <FaInstagram className="w-6 h-6 text-white" />
              </a>

              <a
                href="#"
                className="w-16 h-16 bg-icon hover:bg-secondary transition duration-300 rounded-full flex items-center justify-center"
              >
                <FaLinkedinIn className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          <FooterContact
            icon={<BsSendFill className="w-6 h-6 text-secondary" />}
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-base">
            &copy; {new Date().getFullYear()} All rights reserved. cloned by
            chukwuebuka
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
