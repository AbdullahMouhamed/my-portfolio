// CreeperWalk.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CreeperWalk() {
  const [frame, setFrame] = useState(0);
  const totalFrames = 4;
  const frameWidth = 64;
  const frameHeight = 64;
  const speed = 160;

  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState("");
  const [isExploded, setIsExploded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const messageRef = useRef<HTMLDivElement | null>(null);

  // cycle frames (always walking)
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % totalFrames);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  // click outside to hide message
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (messageRef.current && !messageRef.current.contains(e.target as Node)) {
        setShowMessage("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = () => {
    if (!isVisible) return;
    setClickCount((prev) => prev + 1);

    if (clickCount === 0) {
      setShowMessage("Keep looking at the portfolio and leave me alone!");
    } else if (clickCount === 1) {
      setShowMessage("I warned you...");
    } else if (clickCount === 2) {
      // Explosion
      setShowMessage("");
      setIsExploded(true);

      setTimeout(() => {
        setIsVisible(false); // temporarily hide
        setIsExploded(false);

        // Respawn after 3 seconds
        setTimeout(() => {
          setClickCount(0);
          setIsVisible(true);
        }, 3000);
      }, 800);
    }
  };

  // hide everything after explosion
  if (!isVisible) return null;

  if (isExploded) {
    return (
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "fixed",
          bottom: -10,
          left: 0,
          zIndex: 999999,
          width: 60,
          height: 60,
          background: "radial-gradient(circle, #ff0000, #000)",
          borderRadius: "50%",
        }}
      />
    );
  }

  return (
    <>
      <motion.div
        onClick={handleClick}
        initial={{ x: -100 }}
        animate={{ x: window.innerWidth + 100 }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          position: "fixed",
          bottom: -10,
          left: 0,
          zIndex: 999999,
          width: 40,
          height: frameHeight,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: totalFrames * frameWidth,
            height: frameHeight,
            backgroundImage: "url('/creeper_walk.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${frame * frameWidth}px 0`,
            backgroundSize: `${totalFrames * frameWidth}px ${frameHeight}px`,
            imageRendering: "pixelated",
          }}
        />
      </motion.div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            ref={messageRef}
            key="message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              bottom: "10%",
              left: "35%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.8)",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 10,
              fontFamily: "monospace",
              fontSize: 14,
              zIndex: 999999,
            }}
          >
            {showMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
