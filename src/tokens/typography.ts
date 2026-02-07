/**
 * Typography Design Tokens
 * Extracted from Figma design system
 *
 * @packageDocumentation
 */

/**
 * Font family definitions
 * Primary font is Inter, fallback to system fonts
 */
export const fontFamilies = {
  sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
  mono: ['ui-monospace', 'Cascadia Code', 'Source Code Pro', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
} as const;

/**
 * Font size scale
 * Values extracted directly from Figma design system
 * Includes all font sizes used across components
 */
export const fontSizes = {
  xs: '12px',      // 0.75rem - Extra small text, captions
  '13': '13px',    // 0.8125rem - Special size from Figma
  sm: '14px',      // 0.875rem - Small text, body secondary
  base: '16px',    // 1rem - Default body text
  lg: '18px',      // 1.125rem - Large body text
  xl: '20px',      // 1.25rem - Subheadings
  '22': '22px',    // 1.375rem - Special size from Figma
  '2xl': '24px',   // 1.5rem - Section headings
  '3xl': '30px',   // 1.875rem - Page headings
  '4xl': '36px',   // 2.25rem - Large headings
  '5xl': '42px',   // 2.625rem - Hero headings
  '6xl': '49px',   // 3.0625rem - Extra large headings
  '7xl': '72px',   // 4.5rem - Display headings
} as const;

/**
 * Font weight scale
 * Standard weights from 300 (light) to 700 (bold)
 */
export const fontWeights = {
  light: 300,      // Light weight for delicate text
  normal: 400,     // Normal/regular weight
  medium: 500,     // Medium weight for emphasis
  semibold: 600,   // Semi-bold for strong emphasis
  bold: 700,       // Bold for headings and strong emphasis
} as const;

/**
 * Line height scale - Relative values (unitless multipliers)
 * Use these for responsive text that scales with font size
 */
export const lineHeights = {
  none: 1,         // 100% - Tight line height for headings
  tight: 1.01,     // 100.99% - Very tight
  snug: 1.1,       // 110% - Snug line height
  normal: 1.24,    // 124% - Normal line height for body text
  relaxed: 1.29,   // 128.53% - Relaxed reading
  loose: 1.32,     // 131.81% - Loose line height for readability
} as const;

/**
 * Fixed line heights (pixel values)
 * Use these for precise control in specific components
 */
export const fixedLineHeights = {
  14: '14.52px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
  44: '44px',
} as const;

/**
 * Letter spacing (tracking) values
 */
export const letterSpacing = {
  tight: '-0.4px',  // Tight tracking for headings
  normal: '0px',    // Normal tracking
} as const;

/**
 * Predefined text style combinations
 * Common typography patterns used across the design system
 */
export const textStyles = {
  // Display styles
  displayLarge: {
    fontSize: fontSizes['7xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacing.tight,
  },
  displayMedium: {
    fontSize: fontSizes['6xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  displaySmall: {
    fontSize: fontSizes['5xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
  },

  // Heading styles
  h1: {
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
  },
  h2: {
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.snug,
  },
  h3: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
  },
  h4: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },
  h5: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },
  h6: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
  },

  // Body styles
  bodyLarge: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
  },
  body: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },
  bodySmall: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },

  // Utility styles
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
  },
  label: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
  },
  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  code: {
    fontSize: fontSizes.sm,
    fontFamily: fontFamilies.mono.join(', '),
    lineHeight: lineHeights.normal,
  },
} as const;

// Type exports for TypeScript consumers
export type FontFamily = keyof typeof fontFamilies;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeights;
export type LineHeight = keyof typeof lineHeights;
export type FixedLineHeight = keyof typeof fixedLineHeights;
export type LetterSpacing = keyof typeof letterSpacing;
export type TextStyle = keyof typeof textStyles;

/**
 * Combined typography configuration
 * Export all typography tokens as a single object
 */
export const typography = {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  fixedLineHeights,
  letterSpacing,
  textStyles,
} as const;
