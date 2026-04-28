export function calculateGreenTime(density, waiting) {
  if (density > 70 && waiting > 50) return 60;
  if (density > 50) return 45;
  if (density > 30) return 30;
  return 15;
}