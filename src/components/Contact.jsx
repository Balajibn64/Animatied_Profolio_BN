import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="border-b  pb-20">
        <motion.h1 
          whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1 }}
          className="my-10 text-center text-3xl py-10">
            Get In Touch
            </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x:0 }}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 1 }}
          className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </motion.div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://github.com/Balajibn64" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}>
            <a href="mailto:balajibn6464@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
            </a>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}>
            <a href="https://www.linkedin.com/in/balaji64/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
          </motion.div>
          <motion.div
           whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://www.instagram.com/its_my_sign_bn64?igsh=MWo0ajFsNnZkM2doeA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
          </motion.div>
        </div>
    </div>
  );
};

export default Contact;