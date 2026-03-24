// SVG UTILITIES
function wrapSVG(body) {
  return 'data:image/svg+xml,' + encodeURIComponent(`<svg viewBox="0 0 210 360">${body}</svg>`);
}

// BASE CHARACTER
export function getBase() {
  return wrapSVG(`
    <ellipse cx="105" cy="64" rx="40" ry="44" fill="#FFD0A8" />
  `);
}

// EYES
export function makeEyes(color) {
  return wrapSVG(`
    <circle cx="90" cy="60" r="8" fill="${color}" />
    <circle cx="120" cy="60" r="8" fill="${color}" />
  `);
}

// TOP
export function makeTop(color) {
  return wrapSVG(`
    <rect x="60" y="120" width="90" height="100" fill="${color}" />
  `);
}
