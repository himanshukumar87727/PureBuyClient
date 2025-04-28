import { motion } from "framer-motion";
import {
  FaShoppingCart, FaHome, FaBlog, FaSearch, FaStore, FaWineBottle, FaBriefcase, FaMapMarkerAlt,
  FaQuestionCircle, FaEnvelope, FaAppleAlt, FaCarrot, FaIceCream
} from "react-icons/fa";
import { GiBananaBunch, GiMilkCarton, GiCheeseWedge, GiOrange, GiMeat } from "react-icons/gi";
import { FaEgg, FaFish, FaPepperHot } from "react-icons/fa6";
import { RiBreadFill } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";

export default function PageNotFound() {
  const bubbles = Array.from({ length: 30 });
  
  const navLinks = [
    {
      category: "Navigation",
      links: [
        { path: "/", label: "Home", icon: <FaHome className="mr-2" /> },
        { path: "/blog", label: "Blog", icon: <FaBlog className="mr-2" /> },
      ]
    },
    {
      category: "Shopping",
      links: [
        { path: "/location", label: "Shop by location", icon: <FaMapMarkerAlt className="mr-2" /> },
        { path: "/store", label: "Shop by store", icon: <FaStore className="mr-2" /> },
        { path: "/search", label: "Search by product", icon: <FaSearch className="mr-2" /> },
      ]
    },
    {
      category: "Services",
      links: [
        { path: "/alcohol", label: "Alcohol delivery", icon: <FaWineBottle className="mr-2" /> },
        { path: "/jobs", label: "Shopper jobs", icon: <FaBriefcase className="mr-2" /> },
      ]
    },
    {
      category: "Support",
      links: [
        { path: "/help", label: "Help center", icon: <FaQuestionCircle className="mr-2" /> },
        { path: "/contact", label: "Contact us", icon: <FaEnvelope className="mr-2" /> },
      ]
    }
  ];

  // Enhanced floating items with more variety and better animations
  const floatingItems = [
    { icon: <FaAppleAlt />, size: "w-10 h-10", color: "from-red-400 to-red-600", position: "top-10 left-10", animation: { y: [0, -30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] } },
    { icon: <GiBananaBunch />, size: "w-12 h-12", color: "from-yellow-400 to-yellow-600", position: "top-20 right-5", animation: { y: [0, 25, 0], rotate: [0, -10, 10, 0], scale: [1, 1.05, 1] } },
    { icon: <FaEgg />, size: "w-8 h-8", color: "from-yellow-300 to-yellow-500", position: "top-5 left-20", animation: { y: [0, -15, 0], rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] } },
    { icon: <GiMilkCarton />, size: "w-10 h-10", color: "from-blue-500 to-blue-100", position: "top-5 right-20", animation: { y: [0, 20, 0], rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] } },
    { icon: <RiBreadFill />, size: "w-12 h-12", color: "from-amber-400 to-amber-600", position: "top-32 left-16", animation: { y: [0, -20, 0], rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] } },
    { icon: <GiCheeseWedge />, size: "w-9 h-9", color: "from-yellow-300 to-yellow-500", position: "top-28 right-16", animation: { y: [0, 30, 0], rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] } },
    { icon: <FaCarrot />, size: "w-8 h-8", color: "from-orange-400 to-orange-600", position: "top-40 left-5", animation: { y: [0, -25, 0], rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] } },
    { icon: <BiDrink />, size: "w-10 h-10", color: "from-green-400 to-green-600", position: "top-36 right-8", animation: { y: [0, 15, 0], rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] } },
    { icon: <FaIceCream />, size: "w-9 h-9", color: "from-pink-300 to-pink-500", position: "top-44 left-24", animation: { y: [0, -15, 0], rotate: [0, 12, -12, 0], scale: [1, 1.05, 1] } },
    { icon: <GiOrange />, size: "w-11 h-11", color: "from-orange-300 to-orange-500", position: "top-52 right-12", animation: { y: [0, 20, 0], rotate: [0, -12, 12, 0], scale: [1, 1.1, 1] } },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#1c1c3c] to-[#2a2a5a] text-white p-4 md:p-8">
      {/* Enhanced Bubble Particles Background */}
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 40 + 10}px`,
            height: `${Math.random() * 40 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "-100%"],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Left Section: Text and Links */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Oops! 404 Error
          </h1>
          <h2 className="text-3xl md:text-4xl mt-2 font-semibold">
            Lost in the Shopping Aisle
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-lg">
            The page you're looking for can't be found. Don't worry - we'll help you navigate back to what you need.
          </p>
        </motion.div>

        {/* Organized Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-2xl">
          {navLinks.map((category, catIndex) => (
            <div key={catIndex} className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.links.map((link, index) => (
                  <motion.a
                    key={link.path}
                    href={link.path}
                    className="flex items-center px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 hover:border-white/20"
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: catIndex * 0.2 + index * 0.1 }}
                  >
                    <span className="text-purple-300">{link.icon}</span>
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Cart and Floating Items */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center my-12 md:my-0 h-[400px] md:h-auto">
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Shopping Cart Base */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-white/20 w-full h-full"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <FaShoppingCart className="w-full h-full" />
            </motion.div>
          </div>

          {/* Floating Grocery Items */}
          {floatingItems.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute ${item.size} ${item.position} flex items-center justify-center`}
              animate={item.animation}
              transition={{
                repeat: Infinity,
                duration: 3 + Math.random() * 2,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            >
              <div className={`bg-gradient-to-br ${item.color} p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow`}>
                <motion.div 
                  className="text-white w-full h-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* 404 Badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg flex items-center"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1, 
              rotate: [0, 10, -10, 0],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              rotate: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3
              },
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
          >
            <span className="mr-1">🚫</span> 404
          </motion.div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.a
        href="/"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-xl z-20 flex items-center hover:shadow-2xl transition-shadow"
        whileHover={{ 
          scale: 1.05,
          background: "linear-gradient(to right, #a855f7, #ec4899)"
        }}
        whileTap={{ scale: 0.95 }}
        >
        <FaHome className="mr-2" />
        Back to Home
      </motion.a>
    </div>
  );
}