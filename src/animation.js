// animations.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },   // start from bottom + hidden
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};
