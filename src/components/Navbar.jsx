import logo from "../assets/kevinRushLogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <motion.div
           whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>
            <FaInstagram />
          </motion.div>
          <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>
            <FaGithub />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}>
            <FaWhatsapp />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}>
            <FaLinkedin />
          </motion.div>
        </div>
      </nav>
 ); 
};

export default Navbar;