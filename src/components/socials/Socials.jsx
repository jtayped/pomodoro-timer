import "./socials.css";
import ResumeLogo from "../../assets/logo512.png";
import Github from "../../assets/github.png";

import { motion } from "framer-motion";

const Socials = () => {
  return (
    <motion.ul
      className="socials"
      initial={{ y: 300 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.25, duration: 0.5, type: "spring" }}
    >
      <li>
        <button>
          <a href="https://jtayped.github.io/">
            <img src={ResumeLogo} alt="My Portfolio" />
          </a>
        </button>
      </li>
      <li>
        <button>
          <a href="https://github.com/jtayped">
            <img src={Github} alt="My Github Page" />
          </a>
        </button>
      </li>
    </motion.ul>
  );
};

export default Socials;
