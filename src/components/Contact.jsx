import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="scroll-mt-20 border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="mx-auto max-w-xl text-left tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center gap-3"
        >
          <FaMapMarkerAlt className="text-purple-500" />
          <span>{CONTACT.address}</span>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center gap-3"
        >
          <FaPhone className="text-purple-500" />
          <a href={`tel:${CONTACT.phoneNo.trim()}`}>{CONTACT.phoneNo}</a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center gap-3"
        >
          <FaEnvelope className="text-purple-500" />
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
