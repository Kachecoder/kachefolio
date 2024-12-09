import React from "react";
import { motion } from "framer-motion";

const AnimatedTitle = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#cc00cc",
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      Hello, I'm [Your Name]
    </motion.h1>
  );
};

export default AnimatedTitle;
