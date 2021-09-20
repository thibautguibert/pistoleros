const maxWidth = 768;
const rootWidth = Math.min(window.innerWidth, maxWidth);
const maxHeight = 1024;
const isMobile = rootWidth < maxWidth;

export {
  maxWidth, rootWidth, maxHeight, isMobile,
};
