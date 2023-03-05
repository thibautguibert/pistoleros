const maxWidth = 768;
const rootWidth = Math.min(window.innerWidth, maxWidth);
const maxHeight = 1024;
const isMobile = rootWidth < maxWidth;
const smallDeviceThreshold = [375, 750];

export {
  maxWidth, rootWidth, maxHeight, isMobile, smallDeviceThreshold,
};
