import { motion } from "framer-motion";

const MotionSection = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
