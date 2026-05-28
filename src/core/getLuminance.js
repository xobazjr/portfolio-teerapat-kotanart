const getLuminance = ({ r, g, b }) => (0.299 * r + 0.587 * g + 0.114 * b) / 255;

export default getLuminance;