"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          backgroundColor: isHovered ? "rgb(56, 146, 255)" : "rgb(78, 51, 255)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Frontend <span>Developer</span>
        </p>
      </motion.div>
      <div className={styles.body}>
        <p>
          Frontend <span>Developer</span>
        </p>
      </div>
    </main>
  );
}
