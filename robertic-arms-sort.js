function sort(width, height, length, mass) {
  const isBulky = width * height * length >= 1_000_000 || width >= 150 || height >= 150 || length >= 150;
  if (isBulky && mass >= 20) return "REJECTED";
  if (isBulky || mass >= 20) return "SPECIAL";
  return "STANDARD";
}

console.log(sort(10, 10, 10, 5)); // STANDARD
console.log(sort(150, 10, 10, 5)); // SPECIAL (bulky only)
console.log(sort(10, 10, 10, 20)); // SPECIAL (heavy only)
console.log(sort(200, 200, 50, 25)); // REJECTED
console.log(sort(100, 100, 100, 20)); // REJECTED (exact thresholds)
console.log(sort(1, 1, 1, 0.1)); // STANDARD (very small values)