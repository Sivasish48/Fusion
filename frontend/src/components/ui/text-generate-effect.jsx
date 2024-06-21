"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn.js";
import { useTheme } from "@/components/component/theme-provider.jsx";

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  const { theme } = useTheme();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-6xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
