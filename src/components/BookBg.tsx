import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import modalImg from "../assets/modal.jpg";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const BookBg = () => {
  return (
    <Parallax
      className="h-[60vh] flex justify-center items-center overflow-x-hidden"
      blur={2}
      bgImage={modalImg}
      strength={800}
    >
      <motion.div
        id="home"
        className="h-[calc(100vh-0px)] sm:h-screen w-screen mx-auto bg-black/50 backdrop-blur-sm rounded shadow-lg flex flex-col justify-center items-center gap-5 sm:gap-10 px-6 py-12 text-white text-center"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight shadow-sm"
          variants={fadeIn}
        >
         Book a <span className="text-yellow-500">Driver</span>
        </motion.h1>
        <motion.p
          className="max-w-2xl text-sm md:text-xl lg:text-2xl opacity-90"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <strong>Eazie-Go</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, natus voluptatibus itaque accusantium rem nesciunt laboriosam laudantium. Nulla magni esse sint, dolor, in sapiente x
        </motion.p>
      </motion.div>
    </Parallax>
  );
};

export default BookBg;
