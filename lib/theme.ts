// Zanny Luxury Brand Colors
export const colors = {
  red: '#B11226',
  gold: '#C8A04D',
  cream: '#FFF8F5',
  dark: '#1F1F1F',
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  mediumGray: '#999999',
  darkGray: '#666666',
  border: '#E5E5E5',
} as const;

// Typography configuration
export const fonts = {
  serif: "'Playfair Display', serif",
  sans: "'Geist', sans-serif",
  mono: "'Geist Mono', monospace",
} as const;

// Spacing scale
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
} as const;

// Shadow definitions
export const shadows = {
  soft: '0 10px 40px rgba(0, 0, 0, 0.08)',
  premium: '0 20px 60px rgba(0, 0, 0, 0.12)',
  hover: '0 30px 80px rgba(0, 0, 0, 0.15)',
  subtle: '0 2px 8px rgba(0, 0, 0, 0.04)',
} as const;

// Breakpoints for responsive design
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
