
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
        
        {/* Logo and About */}
        
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Pure<span className="text-green-700">Buy</span></h2>
         <div >
           <p className="text-gray-600">
            Fresh, organic groceries delivered with care. 
            Healthy living starts with PureBuy.
          </p>
         </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Explore</h3>
          <ul className="space-y-3">
            {["Home", "Shop", "Categories", "About Us", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-green-500 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Customer Support</h3>
          <ul className="space-y-3">
            {["Help Center", "Shipping Info", "Returns & Refunds", "Privacy Policy"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-green-500 transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-4">Stay Connected</h3>
          <p className="text-gray-600 mb-4">Subscribe for special offers & updates.</p>
          <form className="flex items-center space-x-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
            />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-green-700 hover:text-green-900 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-green-700 hover:text-green-900 text-xl"><FaInstagram /></a>
            <a href="#" className="text-green-700 hover:text-green-900 text-xl"><FaTwitter /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-green-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PureBuy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
